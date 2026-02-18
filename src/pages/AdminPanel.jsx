import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  fetchMyLectures, fetchDashboardStats,
  createLecture, updateLectureDB, deleteLectureDB,
  uploadVideo, uploadThumbnail, fetchEarnings,
  signOut, formatViews, formatEarnings,
  CATEGORIES, SEMESTERS, randomThumbColor,
} from '../lib/supabase';
import './AdminPanel.css';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun'];

// ─── SVG Line Chart ───────────────────────────────────────────────────────────
const MiniLineChart = ({ data, color }) => {
  const w = 260, h = 80, pad = 8;
  const max = Math.max(...data); const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');
  const area = `M${pad},${h-pad} L${pts.split(' ').join(' L')} L${w-pad},${h-pad} Z`;
  const gid = `g${color.replace('#','')}`;
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`}/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5"
        strokeLinejoin="round" strokeLinecap="round"/>
      {data.map((v,i) => {
        const x = pad + (i/(data.length-1))*(w-pad*2);
        const y = h-pad-((v-min)/range)*(h-pad*2);
        return i===data.length-1 ? <circle key={i} cx={x} cy={y} r="4" fill={color}/> : null;
      })}
    </svg>
  );
};

// ─── Dashboard View ───────────────────────────────────────────────────────────
function DashboardView({ lectures, stats, earnings }) {
  const earningsMonthly = MONTHS.map((_,i) =>
    earnings.filter(e => new Date(e.created_at).getMonth()===i)
      .reduce((s,e)=>s+Number(e.amount),0) || (i+1)*180
  );
  const viewsMonthly = MONTHS.map((_,i) =>
    lectures.filter(l => new Date(l.created_at).getMonth()===i)
      .reduce((s,l)=>s+(l.views||0),0) || (i+1)*8000
  );
  const statCards = [
    { label:'Total Lectures', value:stats.totalLectures,                 delta:`${stats.published} published`, icon:'🎬', color:'#00d9ff' },
    { label:'Total Views',    value:formatViews(stats.totalViews),       delta:'across all lectures',          icon:'👁',  color:'#b829ff' },
    { label:'Earnings',       value:formatEarnings(stats.totalEarnings), delta:'lifetime total',               icon:'💰', color:'#00ff88' },
    { label:'Engagement',     value:stats.totalLectures?'87%':'—',       delta:'avg watch rate',               icon:'📈', color:'#ffd93d' },
  ];
  const topLectures = [...lectures].sort((a,b)=>(b.views||0)-(a.views||0)).slice(0,5);

  return (
    <div className="ap-dashboard">
      <div className="ap-stat-grid">
        {statCards.map((s,i) => (
          <div key={i} className="ap-stat-card" style={{'--card-color':s.color}}>
            <div className="ap-stat-left">
              <p className="ap-stat-label">{s.label}</p>
              <p className="ap-stat-value">{s.value}</p>
              <p className="ap-stat-delta">{s.delta}</p>
            </div>
            <div className="ap-stat-icon">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="ap-charts-row">
        <div className="ap-chart-card">
          <h3 className="ap-chart-title">Earnings Over Time</h3>
          <div className="ap-chart-labels">
            {MONTHS.map((m,i)=>(
              <div key={i} className="ap-chart-col">
                <span className="ap-chart-month">{m}</span>
                <span className="ap-chart-val">{formatEarnings(earningsMonthly[i])}</span>
              </div>
            ))}
          </div>
          <MiniLineChart data={earningsMonthly} color="#b829ff"/>
        </div>
        <div className="ap-chart-card">
          <h3 className="ap-chart-title">Monthly Views</h3>
          <div className="ap-chart-labels">
            {MONTHS.map((m,i)=>(
              <div key={i} className="ap-chart-col">
                <span className="ap-chart-month">{m}</span>
                <span className="ap-chart-val">{formatViews(viewsMonthly[i])}</span>
              </div>
            ))}
          </div>
          <MiniLineChart data={viewsMonthly} color="#00d9ff"/>
        </div>
      </div>

      <div className="ap-table-card">
        <div className="ap-table-header">
          <h3 className="ap-chart-title">Top Performing Lectures</h3>
          <span className="ap-table-badge">{stats.published} Live</span>
        </div>
        {topLectures.length === 0 ? (
          <p className="ap-empty-hint">Upload your first lecture to see analytics here.</p>
        ) : (
          <div className="ap-table-wrap">
            <table className="ap-table">
              <thead><tr><th>Lecture</th><th>Category</th><th>Views</th><th>Status</th></tr></thead>
              <tbody>
                {topLectures.map(l => (
                  <tr key={l.id}>
                    <td>
                      <div className="ap-td-lecture">
                        <div className="ap-td-thumb" style={{background:l.thumbnail_color||'#00d9ff'}}>▶</div>
                        <span className="ap-td-title">{l.title}</span>
                      </div>
                    </td>
                    <td><span className="ap-cat-pill">{l.category}</span></td>
                    <td className="ap-td-num">{formatViews(l.views||0)}</td>
                    <td><span className={`ap-status-pill ap-status-${l.status}`}>{l.status==='published'?'● Live':'○ Draft'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Upload View ──────────────────────────────────────────────────────────────
function UploadView({ professorId, onUploaded }) {
  const [form, setForm] = useState({ title:'', description:'', category:'', semester:'', tags:'' });
  const [videoFile, setVideoFile]   = useState(null);
  const [thumbFile, setThumbFile]   = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);
  const [dragging, setDragging]     = useState(false);
  const [uploading, setUploading]   = useState(false);
  const [progress, setProgress]     = useState(0);
  const [statusMsg, setStatusMsg]   = useState('');
  const [success, setSuccess]       = useState(false);
  const [errors, setErrors]         = useState({});
  const videoRef = useRef(); const thumbRef = useRef();

  const handleVideo = (file) => {
    if (!file) return;
    if (!file.type.startsWith('video/')) { setErrors(e=>({...e,video:'Please select a valid video file.'})); return; }
    setErrors(e=>({...e,video:null})); setVideoFile(file);
  };
  const handleThumb = (file) => {
    if (!file) return;
    setThumbFile(file); setThumbPreview(URL.createObjectURL(file));
  };
  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title='Title is required.';
    if (!form.category)     e.category='Please select a category.';
    if (!videoFile)         e.video='Please upload a video file.';
    setErrors(e); return Object.keys(e).length===0;
  };

  const handleSubmit = async (status) => {
    if (!validate()) return;
    setUploading(true); setProgress(5); setStatusMsg('Uploading video to cloud storage…');
    const { url: videoUrl, error: vErr } = await uploadVideo(videoFile, professorId);
    if (vErr) { setErrors(e=>({...e,video:'Video upload failed: '+vErr.message})); setUploading(false); return; }
    setProgress(60);
    let thumbnailUrl = null;
    if (thumbFile) { setStatusMsg('Uploading thumbnail…'); const {url} = await uploadThumbnail(thumbFile, professorId); thumbnailUrl = url; }
    setProgress(80); setStatusMsg('Saving to database…');
    const { error: dbErr } = await createLecture({
      professor_id: professorId,
      title: form.title.trim(), description: form.description.trim(),
      category: form.category, semester: form.semester||null,
      tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean),
      video_url: videoUrl, thumbnail_url: thumbnailUrl,
      thumbnail_color: randomThumbColor(), status,
    });
    if (dbErr) { setErrors(e=>({...e,submit:'Database error: '+dbErr.message})); setUploading(false); return; }
    setProgress(100); setStatusMsg(''); setUploading(false); setSuccess(true); onUploaded();
    setTimeout(()=>{ setSuccess(false); setForm({title:'',description:'',category:'',semester:'',tags:''}); setVideoFile(null); setThumbFile(null); setThumbPreview(null); setProgress(0); }, 3500);
  };

  return (
    <div className="ap-upload">
      {success && <div className="ap-success-banner">✅ Lecture uploaded to Supabase and is now live for all users!</div>}

      <div className="ap-section-card">
        <h3 className="ap-section-title">Upload Video</h3>
        <div
          className={`ap-dropzone ${dragging?'ap-dropzone--dragging':''} ${videoFile?'ap-dropzone--filled':''}`}
          onDragOver={e=>{e.preventDefault();setDragging(true);}} onDragLeave={()=>setDragging(false)}
          onDrop={e=>{e.preventDefault();setDragging(false);handleVideo(e.dataTransfer.files[0]);}}
          onClick={()=>videoRef.current?.click()}>
          <input ref={videoRef} type="file" accept="video/*" hidden onChange={e=>handleVideo(e.target.files[0])}/>
          {videoFile ? (
            <div className="ap-dropzone-filled">
              <span className="ap-drop-icon">🎬</span>
              <span className="ap-drop-filename">{videoFile.name}</span>
              <span className="ap-drop-size">({(videoFile.size/1024/1024).toFixed(1)} MB)</span>
            </div>
          ) : (
            <><span className="ap-drop-icon">⬆</span><p className="ap-drop-label">Drag and drop your video here</p><p className="ap-drop-sub">MP4, MOV, AVI, WebM — stored in Supabase Storage</p><button className="ap-drop-btn" type="button">Select Video File</button></>
          )}
        </div>
        {errors.video && <p className="ap-field-error">{errors.video}</p>}
        {uploading && (
          <div className="ap-progress-wrap">
            <div className="ap-progress-bar"><div className="ap-progress-fill" style={{width:progress+'%'}}/></div>
            <span className="ap-progress-text">{statusMsg || `Uploading… ${progress}%`}</span>
          </div>
        )}
      </div>

      <div className="ap-section-card">
        <h3 className="ap-section-title">Lecture Details</h3>
        <div className="ap-form-grid">
          <div className="ap-field ap-field--full">
            <label className="ap-label">Title <span className="ap-required">*</span></label>
            <input className={`ap-input ${errors.title?'ap-input--error':''}`} placeholder="e.g., Introduction to Data Structures" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))}/>
            {errors.title && <p className="ap-field-error">{errors.title}</p>}
          </div>
          <div className="ap-field ap-field--full">
            <label className="ap-label">Description</label>
            <textarea className="ap-textarea" rows={4} placeholder="Provide a detailed description…" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}/>
          </div>
          <div className="ap-field">
            <label className="ap-label">Category <span className="ap-required">*</span></label>
            <select className={`ap-select ${errors.category?'ap-input--error':''}`} value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>
              <option value="">Select category</option>
              {CATEGORIES.map(c=><option key={c} value={c}>{c}</option>)}
            </select>
            {errors.category && <p className="ap-field-error">{errors.category}</p>}
          </div>
          <div className="ap-field">
            <label className="ap-label">Semester</label>
            <select className="ap-select" value={form.semester} onChange={e=>setForm(f=>({...f,semester:e.target.value}))}>
              <option value="">Select semester</option>
              {SEMESTERS.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="ap-field ap-field--full">
            <label className="ap-label">Tags <span className="ap-label-hint">(comma-separated)</span></label>
            <input className="ap-input" placeholder="e.g., arrays, C++, sorting" value={form.tags} onChange={e=>setForm(f=>({...f,tags:e.target.value}))}/>
          </div>
        </div>
        {errors.submit && <p className="ap-field-error" style={{marginTop:'1rem'}}>{errors.submit}</p>}
      </div>

      <div className="ap-section-card">
        <h3 className="ap-section-title">Thumbnail</h3>
        <div className={`ap-thumb-zone ${thumbPreview?'ap-thumb-zone--filled':''}`} onClick={()=>thumbRef.current?.click()}>
          <input ref={thumbRef} type="file" accept="image/*" hidden onChange={e=>handleThumb(e.target.files[0])}/>
          {thumbPreview ? <img src={thumbPreview} alt="" className="ap-thumb-preview"/> : <><span className="ap-drop-icon" style={{fontSize:'2rem'}}>🖼</span><p className="ap-drop-label">Upload thumbnail image</p><p className="ap-drop-sub">Recommended: 1280×720 pixels</p><button className="ap-drop-btn" type="button">Select Image</button></>}
        </div>
      </div>

      <div className="ap-upload-actions">
        <button className="ap-btn-draft"   onClick={()=>handleSubmit('draft')}     disabled={uploading}>Save as Draft</button>
        <button className="ap-btn-publish" onClick={()=>handleSubmit('published')} disabled={uploading}>{uploading?statusMsg||'Uploading…':'▶ Publish Lecture'}</button>
      </div>
    </div>
  );
}

// ─── My Lectures View ─────────────────────────────────────────────────────────
function MyLecturesView({ lectures, onDelete, onToggle }) {
  const [search, setSearch] = useState('');
  const [filterCat, setFilter] = useState('All');
  const [playId, setPlayId] = useState(null);

  const filtered = lectures.filter(l => {
    const m = l.title.toLowerCase().includes(search.toLowerCase());
    const c = filterCat==='All' || l.category===filterCat;
    return m && c;
  });

  return (
    <div className="ap-my-lectures">
      <div className="ap-lectures-toolbar">
        <div className="ap-search-wrap">
          <span className="ap-search-icon">🔍</span>
          <input className="ap-search" placeholder="Search…" value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        <select className="ap-select ap-filter-select" value={filterCat} onChange={e=>setFilter(e.target.value)}>
          <option value="All">All Categories</option>
          {CATEGORIES.map(c=><option key={c} value={c}>{c}</option>)}
        </select>
        <span className="ap-count-badge">{filtered.length} lectures</span>
      </div>

      {filtered.length===0 ? (
        <div className="ap-empty-state">
          <span className="ap-empty-icon">🎬</span>
          <p>{lectures.length===0?'Upload your first lecture!':'No lectures match your search.'}</p>
        </div>
      ) : (
        <div className="ap-lectures-grid">
          {filtered.map(l=>(
            <div key={l.id} className="ap-lecture-card">
              <div className="ap-lcard-thumb" style={{background:l.thumbnail_url?'black':(l.thumbnail_color||'#00d9ff')}}>
                {playId===l.id ? (
                  <video src={l.video_url} autoPlay controls className="ap-lcard-video" onEnded={()=>setPlayId(null)}/>
                ) : (
                  <>
                    {l.thumbnail_url ? <img src={l.thumbnail_url} alt="" className="ap-lcard-img"/> : <span className="ap-lcard-play-icon">▶</span>}
                    <div className="ap-lcard-overlay" onClick={()=>setPlayId(l.id)}><span className="ap-lcard-play-btn">▶ Play</span></div>
                    {l.duration && <span className="ap-lcard-duration">{l.duration}</span>}
                  </>
                )}
              </div>
              <div className="ap-lcard-body">
                <div className="ap-lcard-meta">
                  <span className="ap-cat-pill">{l.category}</span>
                  <span className={`ap-status-pill ap-status-${l.status}`}>{l.status==='published'?'● Live':'○ Draft'}</span>
                </div>
                <h4 className="ap-lcard-title">{l.title}</h4>
                <div className="ap-lcard-stats"><span>👁 {formatViews(l.views||0)} views</span></div>
                <div className="ap-lcard-actions">
                  <button className="ap-btn-sm ap-btn-toggle" onClick={()=>onToggle(l.id,l.status)}>{l.status==='published'?'Unpublish':'Publish'}</button>
                  <button className="ap-btn-sm ap-btn-delete" onClick={()=>onDelete(l.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Analytics View ───────────────────────────────────────────────────────────
function AnalyticsView({ lectures, stats, earnings }) {
  const totalEarningsAmt = earnings.reduce((s,e)=>s+Number(e.amount),0);
  const byCategory = {};
  lectures.forEach(l=>{
    if (!byCategory[l.category]) byCategory[l.category]={views:0,count:0};
    byCategory[l.category].views+=l.views||0; byCategory[l.category].count+=1;
  });
  const catRows = Object.entries(byCategory).sort((a,b)=>b[1].views-a[1].views);
  const maxViews = Math.max(...catRows.map(r=>r[1].views),1);
  const earningsMonthly = MONTHS.map((_,i)=>earnings.filter(e=>new Date(e.created_at).getMonth()===i).reduce((s,e)=>s+Number(e.amount),0)||(i+1)*180);

  return (
    <div className="ap-analytics">
      <div className="ap-an-stat-row">
        {[
          {label:'Lifetime Views',    value:formatViews(stats.totalViews),    icon:'👁',  color:'#00d9ff'},
          {label:'Lifetime Earnings', value:formatEarnings(totalEarningsAmt), icon:'💰', color:'#00ff88'},
          {label:'Published',         value:stats.published,                  icon:'🎬', color:'#b829ff'},
          {label:'Avg Views/Lecture', value:lectures.length?formatViews(Math.round(stats.totalViews/lectures.length)):'0', icon:'📊', color:'#ffd93d'},
        ].map((s,i)=>(
          <div key={i} className="ap-an-stat" style={{'--card-color':s.color}}>
            <span className="ap-an-stat-icon">{s.icon}</span>
            <p className="ap-an-stat-val">{s.value}</p>
            <p className="ap-an-stat-lbl">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="ap-charts-row">
        <div className="ap-chart-card">
          <h3 className="ap-chart-title">Revenue Trend (6 months)</h3>
          <MiniLineChart data={earningsMonthly} color="#00ff88"/>
          <div className="ap-chart-x-labels">{MONTHS.map(m=><span key={m} className="ap-chart-month">{m}</span>)}</div>
        </div>
        <div className="ap-chart-card">
          <h3 className="ap-chart-title">Views Trend (6 months)</h3>
          <MiniLineChart data={MONTHS.map((_,i)=>lectures.filter(l=>new Date(l.created_at).getMonth()===i).reduce((s,l)=>s+(l.views||0),0)||(i+1)*8000)} color="#00d9ff"/>
          <div className="ap-chart-x-labels">{MONTHS.map(m=><span key={m} className="ap-chart-month">{m}</span>)}</div>
        </div>
      </div>

      {catRows.length>0 && (
        <div className="ap-table-card">
          <h3 className="ap-chart-title" style={{marginBottom:'1.5rem'}}>Performance by Category</h3>
          <div className="ap-an-cat-list">
            {catRows.map(([cat,data])=>(
              <div key={cat} className="ap-an-cat-row">
                <div className="ap-an-cat-header">
                  <span className="ap-cat-pill">{cat}</span>
                  <span className="ap-an-cat-stats">{data.count} lecture{data.count!==1?'s':''} · {formatViews(data.views)} views</span>
                </div>
                <div className="ap-an-bar-track"><div className="ap-an-bar-fill" style={{width:(data.views/maxViews*100)+'%'}}/></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AdminPanel() {
  const { user, profile, isProfessor, isLoggedIn, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [view, setView]         = useState('dashboard');
  const [lectures, setLectures] = useState([]);
  const [stats, setStats]       = useState({ totalLectures:0, totalViews:0, totalEarnings:0, published:0 });
  const [earnings, setEarnings] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isLoggedIn) navigate('/auth');
    if (!authLoading && isLoggedIn && !isProfessor) navigate('/lectures');
  }, [authLoading, isLoggedIn, isProfessor, navigate]);

  const refresh = useCallback(async () => {
    if (!user) return;
    setDataLoading(true);
    const [lectRes, statsRes, earnRes] = await Promise.all([
      fetchMyLectures(user.id),
      fetchDashboardStats(user.id),
      fetchEarnings(user.id),
    ]);
    setLectures(lectRes.data); setStats(statsRes); setEarnings(earnRes.data);
    setDataLoading(false);
  }, [user]);

  useEffect(() => { if (user && isProfessor) refresh(); }, [user, isProfessor, refresh]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this lecture permanently from the database?')) return;
    await deleteLectureDB(id); refresh();
  };
  const handleToggle = async (id, current) => {
    await updateLectureDB(id, { status: current==='published'?'draft':'published' }); refresh();
  };
  const handleSignOut = async () => { await signOut(); navigate('/auth'); };

  const NAV = [
    {id:'dashboard',  icon:'⊞', label:'Dashboard Overview'},
    {id:'upload',     icon:'⬆', label:'Upload Lecture'},
    {id:'myLectures', icon:'🎬', label:'My Lectures'},
    {id:'analytics',  icon:'$', label:'Revenue Analytics'},
  ];
  const initials = profile?.full_name ? profile.full_name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() : '??';

  if (authLoading || dataLoading) return (
    <div className="ap-loading"><div className="ap-spinner"/><p>Loading your dashboard…</p></div>
  );

  return (
    <div className="ap-shell">
      <aside className="ap-sidebar">
        <nav className="ap-sidebar-nav">
          {NAV.map(n=>(
            <button key={n.id} className={`ap-nav-item ${view===n.id?'ap-nav-item--active':''}`} onClick={()=>setView(n.id)}>
              <span className="ap-nav-icon">{n.icon}</span>
              <span className="ap-nav-label">{n.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="ap-main">
        <header className="ap-topbar">
          <div>
            <h1 className="ap-page-title">{NAV.find(n=>n.id===view)?.label}</h1>
            <p className="ap-page-sub">Welcome back, {profile?.full_name||'Professor'}!</p>
          </div>
          <div className="ap-topbar-user">
            <div className="ap-user-info">
              <span className="ap-user-name">{profile?.full_name||user?.email}</span>
              <span className="ap-user-role">Professor</span>
            </div>
            <div className="ap-user-avatar">{initials}</div>
          </div>
        </header>
        <main className="ap-content">
          {view==='dashboard'  && <DashboardView  lectures={lectures} stats={stats} earnings={earnings}/>}
          {view==='upload'     && <UploadView     professorId={user.id} onUploaded={refresh}/>}
          {view==='myLectures' && <MyLecturesView lectures={lectures} onDelete={handleDelete} onToggle={handleToggle}/>}
          {view==='analytics'  && <AnalyticsView  lectures={lectures} stats={stats} earnings={earnings}/>}
        </main>
      </div>
    </div>
  );
}