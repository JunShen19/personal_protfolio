import React from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";

const About = () => {
  const { isDarkTheme, toggleDarkTheme, navbarHeight } = useGlobalContext();

  return (
    <section
      className="max-h-screen bg-base-200 flex justify-center items-center flex-col"
      style={{
        height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px)`,
      }}
    >
      <div className="flex justify-center">
        <Education />
        <Skills />
      </div>
      <Link to="/portfolio">
        <button className="absolute btn btn-primary bottom-10 right-28">
          Let's Continue To Projects.
        </button>
      </Link>
      <Outlet />
    </section>
  );
};

export default About;
