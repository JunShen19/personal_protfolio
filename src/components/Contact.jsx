import React from "react";
import Wrappers from "../wrappers/Contact";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pdf from "../assets/resume.pdf";
import arrowIcon from "../assets/arrow-right-svgrepo-com.svg";

const Contact = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <Wrappers>
      <div>
        <h1>Contact.</h1>
        <h3>You can contact me directly using the following email address:</h3>
        <p>tony88010955@gmail.com</p>
      </div>
      <a href={pdf} download className="download-button">
        Download Resume
      </a>
      <Link to="/" className="link">
        Go Back Home.
        <div className="arrow-container">
          <img
            src={arrowIcon}
            className={isDarkTheme ? "arrow-dark" : "arrow"}
          ></img>
        </div>
      </Link>
      <Outlet />
    </Wrappers>
  );
};

export default Contact;
