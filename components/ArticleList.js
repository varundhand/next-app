import React from "react";
import articleStyles from "../styles/Article.module.css";

const Article = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <h3 key={article.id}>
          {article.id}
          {article.title}
        </h3>
      ))}
    </div>
  );
};

export default Article;
