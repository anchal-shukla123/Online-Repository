import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../../components/BlogCard';
import blogPosts from '../../data/blogPosts';
import './BlogList.css';

/**
 * BlogList Component
 * Main blog listing page with all posts
 */
const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Programming Blog - Tutorials, Guides & Tips | CodeRunner</title>
        <meta name="description" content="Learn programming with our comprehensive blog. Tutorials on Python, JavaScript, C++, Java, and more. Free coding guides for beginners and advanced developers." />
        <meta property="og:title" content="Programming Blog - CodeRunner" />
        <meta property="og:description" content="Free programming tutorials and coding guides for all skill levels" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="blog-list-page">
        <div className="container py-5">
          {/* Header */}
          <div className="blog-list-header fade-in">
            <h1 className="blog-list-title">
              <span className="title-icon">📚</span>
              CodeRunner Blog
            </h1>
            <p className="blog-list-subtitle">
              Learn programming with our comprehensive tutorials, guides, and tips
            </p>
          </div>

          {/* Category Filter */}
          <div className="blog-category-filter slide-in-left">
            <span className="filter-label">Filter by:</span>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid slide-in-right">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="blog-grid-item"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="blog-empty-state">
              <div className="empty-icon">📭</div>
              <p className="empty-text">No posts found in this category</p>
              <button 
                className="empty-btn"
                onClick={() => setSelectedCategory('All')}
              >
                View All Posts
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="blog-cta fade-in">
            <h2 className="cta-title">Ready to Start Coding?</h2>
            <p className="cta-description">
              Put your knowledge into practice with our online compiler
            </p>
            <a href="/compiler" className="cta-button">
              <span>Try Our Compiler</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;