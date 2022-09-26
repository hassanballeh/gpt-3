import React from "react";
import "./whatGpt3.css";
import { Feature } from "../../components";

function WhatGpt3() {
  return (
    <div className="whatgbt3 section_margin" id="what_gbt">
      <div className=" what_is">
        <Feature
          title="What is GPT-3"
          direction={false}
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gbt_heading">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="feature_container">
        <Feature
          title="Chatbots"
          direction={true}
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          direction={true}
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          direction={true}
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}
export default WhatGpt3;
