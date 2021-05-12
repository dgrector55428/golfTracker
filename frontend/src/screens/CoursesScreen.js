import React from "react";
import CourseInput from "../components/CoursesForm/CoursesForm";
import CourseTable from "../components/CourseTable/CourseTable";
import BannerTitle from "../components/BannerTitle/BannerTitle";
import "./screens.css";

const Courses = () => {
  return (
    <div id="divWrapper">
      <CourseInput />
      <CourseTable />
    </div>
  );
};

export default Courses;
