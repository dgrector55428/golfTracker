import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./BannerTitle.css";

const BannerTitle = (view) => {
  let bannerTitle = view.name;
  return (
    <div>
      <Jumbotron className="mt-3" id="jumboWrapper">
        <span id="bannerTitle">{bannerTitle}</span>
      </Jumbotron>
    </div>
  );
};

export default BannerTitle;
