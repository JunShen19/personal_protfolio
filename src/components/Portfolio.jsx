import React from "react";
import { useFetchProjects } from "../fetchProjects";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import Tags from "./Tags";

const Projects = () => {
  const { navbarHeight } = useGlobalContext();

  const [loading, projects] = useFetchProjects();
  if (loading) {
    return (
      <section
        className="relative"
        style={{
          height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px)`,
        }}
      >
        <span className="loading loading-spinner w-40"></span>
      </section>
    );
  }

  return (
    <>
      <section
        style={{
          height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px)`,
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-20">
          {projects.map((project) => {
            const { id, title, url, img, tags } = project;
            return (
              <div key={id} className="flex flex-col-reverse">
                <div className="flex flex-col">
                  <div className="flex gap-2 flex-wrap p-2">
                    {tags.map((tag, index) => {
                      return <Tags tag={tag.toUpperCase()} type={index} />;
                    })}
                  </div>
                  <div className="">
                    <a href={url} target="_blank" rel="noreferrer">
                      <div className="mockup-browser border border-base-300">
                        <div className="mockup-browser-toolbar absolute z-10">
                          <div className="input">{url}</div>
                        </div>
                        <div className="flex flex-col justify-center bg-base-200 h-36">
                          <div>
                            <img
                              src={img}
                              alt={title}
                              className="absolute -translate-y-6	overflow-hidden"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/contact">
          <button className="absolute btn btn-primary bottom-10 right-28">
            Lets Go To My Resume.
          </button>
        </Link>
      </section>
    </>
  );
};

export default Projects;
