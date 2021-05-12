import React from "react";
import CourseInput from "../components/CoursesForm/CoursesForm";
import CourseTable from "../components/CourseTable/CourseTable";
import BannerTitle from "../components/BannerTitle/BannerTitle";

const Courses = () => {
  return (
    <div>
      <BannerTitle name="Courses" />
      <CourseInput />
      <CourseTable />
    </div>
  );
};

export default Courses;
