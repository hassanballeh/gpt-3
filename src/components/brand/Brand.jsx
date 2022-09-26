import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

function Brand() {
  return (
    <div className="brand section_padding">
      <div className="image">
        <img src={google} alt="gogle" />
      </div>
      <div className="image">
        <img src={slack} alt="slack" />
      </div>
      <div className="image">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="image">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="image">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
