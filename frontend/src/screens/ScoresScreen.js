import React from "react";
import ScoreInput from "../components/ScoreInput/ScoreInput";
import ScoreTable from "../components/ScoreTable/ScoreTable";
import "./screens.css";

const ScoresScreen = () => {
  return (
    <div id="divWrapper">
      <ScoreInput />
      <ScoreTable />
    </div>
  );
};

export default ScoresScreen;
