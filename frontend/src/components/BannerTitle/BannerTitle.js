import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./BannerTitle.css";

const BannerTitle = (data) => {
  console.log(data);
  let bannerTitle = data.title;
  let text = data.text;
  return (
    <div>
      <span id="bannerTitle">{bannerTitle}</span>
    </div>
  );
};

export default BannerTitle;
