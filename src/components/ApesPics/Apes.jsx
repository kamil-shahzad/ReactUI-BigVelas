import React from 'react';
import './apes.css';

const Apes = ({ imgUrl }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
  </div>
);

export default Apes;
