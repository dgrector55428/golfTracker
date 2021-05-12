import React from "react";
import ScoreInput from "../components/ScoreInput/ScoreInput";
import ScoreTable from "../components/ScoreTable/ScoreTable";
import BannerTitle from "../components/BannerTitle/BannerTitle";

const ScoresScreen = () => {
  return (
    <>
      <BannerTitle name="Scores" color="#053163" text="#808891" />
      <ScoreInput />
      <ScoreTable />
    </>
  );
};

export default ScoresScreen;
