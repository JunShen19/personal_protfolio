import React from "react";
import Wrappers from "../wrappers/Test";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import arrowIcon from "../assets/arrow-right-svgrepo-com.svg";

const About = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <Wrappers>
      <section className="about">
        <div className="about-content">
          <h2>About Me.</h2>
          <h4>
            <span>
              I am a graduate from the Civil Engineering Department at National
              Central University.
            </span>
            <span>
              Through internships and self-exploration, I discovered my interest
              in programming.
            </span>
            <span>
              Therefore, starting from my junior year, I began to study various
              subjects and gain knowledge in the field of computer science.
            </span>
            <span>
              Fortunately, I was able to pursue a Master's degree in Computer
              Science upon graduating.
            </span>
            <span>
              During my Master's program, I focused my research on areas such as
              deep learning, machine learning, and data processing. I dedicated
              my time to studying and gaining expertise in these fields.
            </span>{" "}
            <span>
              Recently, I have also developed an interest in frontend
              development and have been actively learning in this area.
            </span>
          </h4>
        </div>
        <Education />
        <Skills />
        <Link to="/portfolio" className="link">
          Let's Continue To Projects.
          <div className="arrow-container">
            <img
              src={arrowIcon}
              className={isDarkTheme ? "arrow-dark" : "arrow"}
            ></img>
          </div>
        </Link>
      </section>
      <Outlet />
    </Wrappers>
  );
};

export default About;
