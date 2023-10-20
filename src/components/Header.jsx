import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
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
    <div className="navbar bg-base-100" id="navbar">
      {/* <span className="logo">
        <img src={logoImg} alt="GIF" className="nav-img" />
      </span> */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" onClick={menuToggle}>
                Home.
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={menuToggle}>
                About Me.
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={menuToggle}>
                Portfolio.
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={menuToggle}>
                Contact Me.
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Jun-Shen</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" onClick={menuToggle}>
              Home.
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={menuToggle}>
              About Me.
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={menuToggle}>
              Portfolio.
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={menuToggle}>
              Contact Me.
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn dark-toggle" onClick={toggleDarkTheme}>
          {isDarkTheme ? (
            <BsFillMoonFill className="toggle-icon" />
          ) : (
            <BsFillSunFill className="toggle-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
