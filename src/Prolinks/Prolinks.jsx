import React from "react";
import "./Prolinks.css";

const Prolinks = () => {
  return (
    <div id="links-section">
      <a href="https://github.com/shaffem2/" target="_blank" rel="noreferrer">
        <img id="link-button" src="github.png" alt="Link to Max's GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/maxrshaffer/"
        target="_blank"
        rel="noreferrer"
      >
        <img id="link-button" src="linkedin.png" alt="Link to Max's LinkedIn" />
      </a>
      <a
        href="https://www.instagram.com/wotbuzzbomber/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="link-button"
          src="instagram.png"
          alt="Link to Max's Personal Instagram"
        />
      </a>
    </div>
  );
};

export default Prolinks;
