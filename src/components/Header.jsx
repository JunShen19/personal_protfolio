import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../wrappers/Navbar";
import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          <img
            src="src\assets\352407633_228095676748173_1386981355860839164_n.gif"
            alt="GIF"
            className="nav-img"
          />
        </span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home.
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Me.
          </NavLink>
          <NavLink to="/portfolio" className="nav-link">
            Portfolio.
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Me.
          </NavLink>
          <button className="dark-toggle" onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <BsFillMoonFill className="toggle-icon" />
            ) : (
              <BsFillSunFill className="toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
