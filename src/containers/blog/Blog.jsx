import React from "react";
import "./blog.css";
import { Article } from "../../components";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

function Blog() {
  return (
    <div className="blog section_padding" id="blog">
      <div className="heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="container">
        <div className="groupA">
          <Article imgUrl={blog01} />
        </div>
        <div className="groupB">
          <Article imgUrl={blog02} />
          <Article imgUrl={blog03} />
          <Article imgUrl={blog04} />
          <Article imgUrl={blog05} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
