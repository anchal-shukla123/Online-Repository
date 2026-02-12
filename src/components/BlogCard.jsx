import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

/**
 * BlogCard Component
 * Displays a blog post card with image, title, excerpt, and metadata
 */
const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-image">
        <div className="blog-card-image-placeholder">
          <span className="blog-card-icon">📝</span>
        </div>
        <div className="blog-card-category">{post.category}</div>
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-date">📅 {post.date}</span>
          <span className="blog-card-readtime">⏱️ {post.readTime}</span>
        </div>
        
        <h3 className="blog-card-title">{post.title}</h3>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <div className="blog-card-footer">
          <span className="blog-card-author">By {post.author}</span>
          <span className="blog-card-arrow">→</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;