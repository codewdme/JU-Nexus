import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

import ChooseCourse from "./ChooseCourse";
import Results from "./Results";

const Syllabus = () => {
  const propData = useContext(noteContext);
  const location = useLocation();

  // on componetn mount it calls the fetchfiles function to get fileInfo data from backend API;
  useEffect(() => {
    propData.setSelectedCategory(location.pathname.replace(/\//g, ""));
  });

  return (
    <>
      <div className={`${propData.state.length === 0 ? "" : "hidden"}`}>
        <ChooseCourse />
      </div>
      <div className={`${propData.state.length === 0 ? "hidden" : ""}`}>
        <Results />
      </div>
    </>
  );
};

export default Syllabus;
