import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills-section">
      <div id="skills-section-top">
        <img id="javascript-img" src="javascript.png" alt="JavaScript logo" />
        <img id="react-img" src="react.png" alt="React logo" />
        <img id="nodejs-img" src="node.png" alt="Node.js logo" />
      </div>
      <div id="skills-section-middle">
        <img id="java-img" src="java.png" alt="Java logo" />
        <img id="spring-img" src="spring.png" alt="Spring logo" />
      </div>
      <div id="skills-section-middle-2">
        <img id="cplusplus-img" src="cplusplus.png" alt="C++ logo" />
        <img id="csharp-img" src="csharp.png" alt="C# logo" />
        <img id="c-img" src="c.png" alt="C logo" />
      </div>
      <div id="skills-section-bottom">
        <img id="python-img" src="python.png" alt="Python logo" />
      </div>
    </div>
  );
};

export default Skills;
