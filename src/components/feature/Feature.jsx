import React from "react";
import "./feature.css";

function Feature({ title, text, direction }) {
  return (
    <div className="feature">
      <div className="title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
