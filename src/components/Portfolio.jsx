import React from "react";
import { useFetchProjects } from "../fetchProjects";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";

const Projects = () => {
  const { isDarkTheme, toggleDarkTheme, navbarHeight } = useGlobalContext();

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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4">
          {projects.map((project) => {
            const { id, title, url, img } = project;
            return (
              <div>
                <div className="badge badge-info gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  info
                </div>
                <div className="badge badge-success gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  success
                </div>
                <div className="badge badge-warning gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  warning
                </div>
                <div className="badge badge-error gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  error
                </div>
                <a key={id} href={url} target="_blank" rel="noreferrer">
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
