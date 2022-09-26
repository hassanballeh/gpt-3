import React from "react";
import "./article.css";

function Article({ imgUrl }) {
  return (
    <div className="article">
      <div className="image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="content">
        <div>
          <p>Sep 26, 2021</p>
          <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
