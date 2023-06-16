import React from "react";
import Wrappers from "../wrappers/Contact";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
const Contact = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <Wrappers>
      <div>
        <h1>Contact.</h1>
        <h3>You can contact me directly using the following email address:</h3>
        <p>tony88010955@gmail.com</p>
      </div>
      <a href="src\assets\resume.pdf" download className="download-button">
        Download Resume
      </a>
      <Link to="/" className="link">
        Go Back Home.
        <div className="arrow-container">
          <img
            src="src\assets\arrow-right-svgrepo-com.svg"
            className={isDarkTheme ? "arrow-dark" : "arrow"}
          ></img>
        </div>
      </Link>
      <Outlet />
    </Wrappers>
  );
};

export default Contact;
