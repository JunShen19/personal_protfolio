import React from "react";
import Wrapper from "../wrappers/Hero";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper>
      <section className="hero">
        <div className="hero-content">
          <h1>Hello! I'm Jun-Shen, Lin.</h1>
          <p>
            <span>I</span>
            <span>&nbsp;</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>soon-to-be</span>
            <span>&nbsp;</span>
            <span>graduating</span>
            <span>&nbsp;</span>
            <span>Master's</span>
            <span>&nbsp;</span>
            <span>student</span>
            <span>&nbsp;</span>
            <span>majoring</span>
            <span>&nbsp;</span>
            <span>in</span>
            <span>&nbsp;</span>
            <span>Computer</span>
            <span>&nbsp;</span>
            <span>Science.</span>
          </p>
          <Link to="/about" className="hero-link">
            To learn more.
          </Link>
        </div>
        <div className="container">
          <img
            src="src\assets\352407633_228095676748173_1386981355860839164_n.gif"
            alt="GIF"
          />
        </div>
      </section>
      <Outlet />
    </Wrapper>
  );
};

export default Hero;
