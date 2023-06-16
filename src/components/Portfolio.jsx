import React from "react";
import { useFetchProjects } from "../fetchProjects";
import Wrapper from "../wrappers/Projects";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import arrowIcon from "../assets/arrow-right-svgrepo-com.svg";
const Projects = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  const [loading, projects] = useFetchProjects();
  if (loading) {
    return (
      <Wrapper>
        <section className="projects">
          <h2>Loading...</h2>
        </section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="projects">
        <div className="title">
          <h2>My Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
          {projects.map((project) => {
            const { id, title, url, img } = project;
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <h4>{title}</h4>
                <div>
                  <img src={img} alt={title} className="img"></img>
                </div>
              </a>
            );
          })}
        </div>
      </section>
      <Link to="/contact" className="link">
        Lets Go To My Resume.
        <div className="arrow-container">
          <img
            src={arrowIcon}
            className={isDarkTheme ? "arrow-dark" : "arrow"}
          ></img>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Projects;
