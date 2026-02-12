import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogPosts from '../../data/blogPosts';
import './BlogPost.css';

/**
 * BlogPost Component
 * Individual blog post page with full content
 */
const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the post by slug
  const post = blogPosts.find(p => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Redirect to blog list if post not found
  if (!post) {
    navigate('/blog');
    return null;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Render structured content array
  const renderContent = () => {
    return post.content.map((block, index) => {
      switch (block.type) {
        case 'h1':
          return <h1 key={index} className="blog-h1">{block.text}</h1>;
        case 'h2':
          return <h2 key={index} className="blog-h2">{block.text}</h2>;
        case 'h3':
          return <h3 key={index} className="blog-h3">{block.text}</h3>;
        case 'p':
          return <p key={index} className="blog-paragraph">{block.text}</p>;
        case 'code':
          return (
            <pre key={index} className="blog-code-block">
              <div className="code-lang-label">{block.lang}</div>
              <code>{block.text}</code>
            </pre>
          );
        case 'ul':
          return (
            <ul key={index} className="blog-list">
              {block.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://yoursite.com/blog/${post.slug}`} />
      </Helmet>

      <div className="blog-post-page">
        <div className="container py-5">
          {/* Back Button */}
          <Link to="/blog" className="blog-back-button fade-in">
            <span className="back-arrow">←</span>
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <article className="blog-post-article">
            <header className="blog-post-header fade-in">
              <div className="blog-post-category-badge">{post.category}</div>
              <h1 className="blog-post-title">{post.title}</h1>
              
              <div className="blog-post-meta">
                <span className="meta-item">
                  <span className="meta-icon">👤</span>
                  {post.author}
                </span>
                <span className="meta-item">
                  <span className="meta-icon">📅</span>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  {post.readTime}
                </span>
              </div>

              {/* Tags */}
              <div className="blog-post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">#{tag}</span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="blog-post-content slide-in-left">
              {renderContent()}
            </div>

            {/* Share Section */}
            <div className="blog-post-share fade-in">
              <p className="share-text">Found this helpful? Try our compiler!</p>
              <Link to="/compiler" className="share-compiler-btn">
                <span>Open Compiler</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="blog-related-section fade-in">
              <h2 className="related-title">Related Articles</h2>
              <div className="related-posts-grid">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="related-post-card"
                  >
                    <div className="related-post-category">{relatedPost.category}</div>
                    <h3 className="related-post-title">{relatedPost.title}</h3>
                    <p className="related-post-excerpt">{relatedPost.excerpt}</p>
                    <div className="related-post-meta">
                      <span>{relatedPost.readTime}</span>
                      <span className="related-arrow">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost;