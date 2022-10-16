import React from "react";

//styles
import "./styles.scss";

const BlockLink = () => {
  const frame_1 = require("assets/frame_1.png");
  const frame_2 = require("assets/frame_2.png");
  const frame_3 = require("assets/frame_3.png");
  const frame_4 = require("assets/frame_4.png");

  return (
    <div className="blockLink">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__item">
            <a>
              <img src={frame_1} title="frame" alt="frame"></img>
            </a>
            <p>Прайс-лист</p>
            <div className="gradient"></div>
          </div>
          <div className="wrapper__item">
            <a>
              <img src={frame_2} title="frame" alt="frame"></img>
            </a>
            <p>Каталог</p>
            <div className="gradient"></div>
          </div>
          <div className="wrapper__item">
            <a>
              <img src={frame_3} title="frame" alt="frame"></img>
            </a>
            <p>Гарантия</p>
            <div className="gradient"></div>
          </div>
          <div className="wrapper__item">
            <a>
              <img src={frame_4} title="frame" alt="frame"></img>
            </a>
            <p>Видео по монтажу</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLink;
