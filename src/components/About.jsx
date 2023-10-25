import React from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";

const About = () => {
  const { isDarkTheme, toggleDarkTheme, navbarHeight } = useGlobalContext();

  return (
    <section
      className="bg-base-200 overflow-auto"
      style={{
        height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px + 1rem)`,
      }}
    >
      <div className="flex flex-col items-center md:flex-row justify-center">
        <Education />
        <Skills />
        <Link to="/portfolio">
          <button className="mb-4 md:mb-0 md:absolute btn btn-primary md:-bottom-5 md:right-28">
            Let's Continue To Projects.
          </button>
        </Link>
      </div>
      <Outlet />
    </section>
  );
};

export default About;
