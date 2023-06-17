import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../wrappers/Navbar";
import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import logoImg from "../assets/352407633_228095676748173_1386981355860839164_n.gif";
const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          <img src={logoImg} alt="GIF" className="nav-img" />
        </span>
        <div className="btn-container">
          <button className="menu-btn" onClick={menuToggle}>
            <FaBars />
          </button>
        </div>
        <div className={isMenuOpen ? "nav-links-show" : "nav-links"}>
          <NavLink to="/" className="nav-link" onClick={menuToggle}>
            Home.
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={menuToggle}>
            About Me.
          </NavLink>
          <NavLink to="/portfolio" className="nav-link" onClick={menuToggle}>
            Portfolio.
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={menuToggle}>
            Contact Me.
          </NavLink>
        </div>
        <button className="dark-toggle" onClick={toggleDarkTheme}>
          {isDarkTheme ? (
            <BsFillMoonFill className="toggle-icon" />
          ) : (
            <BsFillSunFill className="toggle-icon" />
          )}
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;
