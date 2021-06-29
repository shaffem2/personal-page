import React from "react";
import "./Welcome.css";

const Welcome = ({ welcomeText }) => {
  return (
    <>
      <div id="welcome-section">
        <div id="photosmile-left-div">
          <img src="photosmile.jpg" id="photosmile" alt="Portrait of Max" />
        </div>
        <div id="welcome-text-right-div">{welcomeText}</div>
      </div>
    </>
  );
};

export default Welcome;
