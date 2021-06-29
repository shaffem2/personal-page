import React from "react";
import "./Work.css";

const Work = ({ workText }) => {
  return (
    <div id="work-section">
      <div id="work-photo-left-div">
        <a href="https://www.boozallen.com/" target="_blank" rel="noreferrer">
          <img id="bah-picture" src="bah.png" alt="Booz Allen Hamilton" />
        </a>
      </div>
      <div id="work-text-right-div">
        <h3>Software Engineer | January 2021 - Present</h3>
        {workText}
      </div>
    </div>
  );
};

export default Work;
