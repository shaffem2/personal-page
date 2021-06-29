import "./App.css";
import React from "react";
import Welcome from "./Welcome/Welcome";
import Prolinks from "./Prolinks/Prolinks";
import Work from "./Work/Work";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Header from "./Header/Header";
import { welcomeText, eduText, workText } from "./Text.js";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Welcome welcomeText={welcomeText} />
      <Skills />
      <Work workText={workText} />
      <Resume />
      <Education eduText={eduText} />
      <Prolinks />
    </div>
  );
};

export default App;
