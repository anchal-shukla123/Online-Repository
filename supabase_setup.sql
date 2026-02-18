-- ============================================================
-- CodeRunner Platform — Supabase Database Setup
-- Run this entire file in your Supabase SQL Editor (one shot)
-- ============================================================

-- ── 1. PROFILES TABLE ─────────────────────────────────────
-- Extends Supabase auth.users with role + display info
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text not null default '',
  role        text not null default 'student'   -- 'professor' | 'student'
              check (role in ('professor', 'student')),
  avatar_url  text,
  bio         text,
  created_at  timestamptz not null default now()
);

-- Auto-create a profile row whenever a new user signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'role', 'student')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── 2. LECTURES TABLE ──────────────────────────────────────
create table if not exists public.lectures (
  id              uuid primary key default gen_random_uuid(),
  professor_id    uuid not null references public.profiles(id) on delete cascade,
  title           text not null,
  description     text,
  category        text not null,
  semester        text,
  tags            text[],
  video_url       text,         -- Supabase Storage public URL
  thumbnail_url   text,         -- Supabase Storage public URL
  thumbnail_color text default '#00d9ff',
  duration        text default '—',
  status          text not null default 'draft'
                  check (status in ('draft', 'published')),
  views           bigint not null default 0,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Auto-update updated_at on any row change
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists lectures_updated_at on public.lectures;
create trigger lectures_updated_at
  before update on public.lectures
  for each row execute function public.set_updated_at();

-- ── 3. EARNINGS TABLE ─────────────────────────────────────
-- Each row = one earning event (e.g. monthly payout or per-view credit)
create table if not exists public.earnings (
  id           uuid primary key default gen_random_uuid(),
  lecture_id   uuid not null references public.lectures(id) on delete cascade,
  professor_id uuid not null references public.profiles(id) on delete cascade,
  amount       numeric(10,2) not null default 0,
  month        text not null,   -- e.g. '2026-01'
  created_at   timestamptz not null default now()
);

-- ── 4. ROW LEVEL SECURITY ──────────────────────────────────

alter table public.profiles  enable row level security;
alter table public.lectures   enable row level security;
alter table public.earnings   enable row level security;

-- profiles: anyone can read; only owner can update
create policy "profiles_select_all"  on public.profiles  for select using (true);
create policy "profiles_update_own"  on public.profiles  for update using (auth.uid() = id);

-- lectures: published lectures visible to all; professors manage own
create policy "lectures_select_published" on public.lectures
  for select using (status = 'published' or auth.uid() = professor_id);

create policy "lectures_insert_own" on public.lectures
  for insert with check (auth.uid() = professor_id);

create policy "lectures_update_own" on public.lectures
  for update using (auth.uid() = professor_id);

create policy "lectures_delete_own" on public.lectures
  for delete using (auth.uid() = professor_id);

-- earnings: professors see only their own
create policy "earnings_select_own" on public.earnings
  for select using (auth.uid() = professor_id);

create policy "earnings_insert_own" on public.earnings
  for insert with check (auth.uid() = professor_id);

-- ── 5. STORAGE BUCKETS ─────────────────────────────────────
-- Run these in the Supabase dashboard → Storage → New Bucket
-- OR uncomment and run here if your project supports it:

-- insert into storage.buckets (id, name, public) values ('lectures', 'lectures', true);
-- insert into storage.buckets (id, name, public) values ('thumbnails', 'thumbnails', true);

-- Storage policies (add via Dashboard → Storage → Policies):
-- Bucket: lectures   — allow authenticated professors to upload
-- Bucket: thumbnails — allow authenticated professors to upload
-- Both buckets: allow public read (anonymous)

-- ── 6. HELPER: increment view count (called from frontend) ─
create or replace function public.increment_views(lecture_id uuid)
returns void language sql security definer as $$
  update public.lectures
  set views = views + 1
  where id = lecture_id;
$$;

-- ── 7. SEED DATA (optional demo data) ─────────────────────
-- After you create a professor account, replace the UUID below
-- with your professor's profile id to seed demo lectures.
-- Example:
-- insert into public.lectures (professor_id, title, category, status, views, thumbnail_color)
-- values
--   ('YOUR-PROFESSOR-UUID', 'Intro to Data Structures', 'Data Structures', 'published', 125000, '#00d9ff'),
--   ('YOUR-PROFESSOR-UUID', 'Advanced Algorithms', 'Algorithms', 'published', 89000, '#b829ff');