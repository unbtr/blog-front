import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostItem key={post.ID} {...post} />
    ))}
  </div>
);

export default PostList;