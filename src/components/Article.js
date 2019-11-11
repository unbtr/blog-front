import React from 'react';
import '../css/article.css';

const Article = ({ post }) => {
  const updated = <div className="article__date article__date--updated">最終更新日 : {post.updatedAt}</div>;

  return (
    <article className="article">
      <header className="article__header">
        <h1 className="article__heading">{post.title}</h1>
        <div className="article__date article__date--created">記事公開日 : {post.createdAt}</div>
        {post.createdAt !== post.updatedAt && updated}
      </header>
      <div className="article__body">
        {post.content}
      </div> 
    </article>
  );
};

export default Article;