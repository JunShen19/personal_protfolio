import React from "react";
import Wrappers from "../wrappers/Test";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <Wrappers>
      <section className="about">
        <div className="about-content">
          <h2>About Me.</h2>
          <p>這裡是關於我的詳細介紹，包括我的背景、技能和經驗等。</p>
        </div>
        <Education />
        <Skills />
      </section>
      <Outlet />
    </Wrappers>
  );
};

export default About;
