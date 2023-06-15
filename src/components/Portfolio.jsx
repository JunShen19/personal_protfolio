import React from "react";
import { useFetchProjects } from "../fetchProjects";
import Wrapper from "../wrappers/Projects";
const Projects = () => {
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
          <h2>My Works</h2>
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
    </Wrapper>
  );
};

export default Projects;
