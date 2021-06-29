import React from "react";
import "./Education.css";

const Education = ({ eduText }) => {
  return (
    <div id="work-section">
      <div id="work-photo-left-div">
        <a href="https://sunypoly.edu/" target="_blank" rel="noreferrer">
          <img
            id="suny-picture"
            src="suny.png"
            alt="SUNY Polytechnic Institute"
          />
        </a>
      </div>
      <div id="work-text-right-div">
        <h3>Bachelor of Science | August 2017- December 2020</h3>
        {eduText}
      </div>
    </div>
  );
};

export default Education;
