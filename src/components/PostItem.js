import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ ID, title }) => (
  <div className="post-item">
    <h2><Link to={`/p/${ID}`}>{title}</Link></h2>
  </div>
);

export default PostItem;