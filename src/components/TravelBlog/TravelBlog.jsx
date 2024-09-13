// src/components/TravelBlog/TravelBlog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css'; 
import WellnessImage from '../../../images/WellnessImage.jpg';
import Tahoe from '../../../images/TravelBlog/Tahoe.jpg';
import Ohio from '../../../images/TravelBlog/Ohio.jpg';
import NorthCarolina from '../../../images/TravelBlog/NorthCarolina.jpg';
import Virginia from '../../../images/TravelBlog/Virginia.jpg';

const posts = [
  {
    title: "Exploring the Scenic Beauty of Virginia",
    subtitle: "From the Blue Ridge Mountains to historic towns",
    date: "August 30, 2024",
    image: Virginia,
    link: "/virginia-hotels", // Ensure this matches your route
  },
  {
    title: "Adventure Awaits in Lake Tahoe",
    subtitle: "A paradise for outdoor enthusiasts and nature lovers",
    date: "August 22, 2024",
    image: Tahoe,
    link: "/lake-tahoe-hotels", // Ensure this matches your route
  },
  {
    title: "Discovering the Charms of North Carolina",
    subtitle: "From the Outer Banks to the Smoky Mountains",
    date: "July 15, 2024",
    image: NorthCarolina,
    link: "/north-carolina-hotels", // Ensure this matches your route
  },
  {
    title: "Exploring Ohio's Hidden Gems",
    subtitle: "A journey through vibrant cities and serene landscapes",
    date: "June 5, 2024",
    image: Ohio,
    link: "/ohio-hotels", // Ensure this matches your route
  }
];


const TravelBlog = () => {
  return (
    <div className="travel-blog-sidebar">
      <div className="blog-title">Travel Blog</div>
      <div className="blog-description">Read our latest blog posts about exciting travel adventures and tips.</div>
      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post-preview">
            <Link to={post.link}>
              <div className="post-image-container">
                {post.image && <img src={post.image} alt={post.title} className="post-image" />}
              </div>
              <div className="post-text">
                <h3 className="post-title">{post.title}</h3>
                {post.subtitle && <h4 className="post-subtitle">{post.subtitle}</h4>}
                <p className="post-meta">Posted on {post.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlog;
