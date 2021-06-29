import React from "react";
import ResumePDF from "./max_shaffer_resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";

const Resume = () => {
  return (
    <div id="resume-section">
      <div id="resume-left-div">
        <div id="resume-white-bubble">
          <a
            href={ResumePDF}
            download="max_shaffer_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="resume-button"
              src="resume.png"
              alt="Download resume as PDF"
            />
          </a>
        </div>
      </div>
      <div id="resume-right-div">
        <h2>Take a look at my full resume here!</h2>
        <FontAwesomeIcon
          id="arrow-icon"
          icon={faAngleDoubleLeft}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Resume;
