import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./BannerTitle.css";

const BannerTitle = (data) => {
  let bannerTitle = data.name;
  let color = data.color;
  let text = data.text;
  return (
    <div>
      <Jumbotron
        className="mt-3"
        id="jumboWrapper"
        style={{ backgroundColor: color, color: text }}
      >
        <span id="bannerTitle">{bannerTitle}</span>
      </Jumbotron>
    </div>
  );
};

export default BannerTitle;
