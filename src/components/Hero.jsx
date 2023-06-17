import React from "react";
import Wrapper from "../wrappers/Hero";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pic from "../assets/myPicture.jpg";
import arrowIcon from "../assets/arrow-right-svgrepo-com.svg";

const Hero = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-title">
            <h1>
              <span>Hello!</span>
              <span>&nbsp;</span>
              <span>I'm</span>
              <span>&nbsp;</span>
              <span>Jun-Shen,</span>
              <span>&nbsp;</span>
              <span>Lin.</span>
            </h1>
            <div className="container">
              <img src={pic} alt="GIF" className="hero-img" />
            </div>
          </div>
          <h4>
            <span>I'm</span>
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
          </h4>
          <p>
            <span>Hello,</span>
            <span>&nbsp;</span>
            <span>I'm</span>
            <span>&nbsp;</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>person</span>
            <span>&nbsp;</span>
            <span>who</span>
            <span>&nbsp;</span>
            <span>loves</span>
            <span>&nbsp;</span>
            <span>learning</span>
            <span>&nbsp;</span>
            <span>and</span>
            <span>&nbsp;</span>
            <span>finds</span>
            <span>&nbsp;</span>
            <span>great</span>
            <span>&nbsp;</span>
            <span>motivation</span>
            <span>&nbsp;</span>
            <span>in</span>
            <span>&nbsp;</span>
            <span>things</span>
            <span>&nbsp;</span>
            <span>that</span>
            <span>&nbsp;</span>
            <span>help</span>
            <span>&nbsp;</span>
            <span>me</span>
            <span>&nbsp;</span>
            <span>grow.</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>&nbsp;</span>
            <span>enjoy</span>
            <span>&nbsp;</span>
            <span>engaging</span>
            <span>&nbsp;</span>
            <span>in</span>
            <span>&nbsp;</span>
            <span>conversations</span>
            <span>&nbsp;</span>
            <span>with</span>
            <span>&nbsp;</span>
            <span>others.</span>
            <span>&nbsp;</span>
          </p>
          <p>
            <span>In</span>
            <span>&nbsp;</span>
            <span>addition</span>
            <span>&nbsp;</span>
            <span>to</span>
            <span>&nbsp;</span>
            <span>that,</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>&nbsp;</span>
            <span>have</span>
            <span>&nbsp;</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>passion</span>
            <span>&nbsp;</span>
            <span>for</span>
            <span>&nbsp;</span>
            <span>dancing</span>
            <span>&nbsp;</span>
            <span>and</span>
            <span>&nbsp;</span>
            <span>painting.</span>
            <span>&nbsp;</span>
            <span>Currently,</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>&nbsp;</span>
            <span>am</span>
            <span>&nbsp;</span>
            <span>concentrate</span>
            <span>&nbsp;</span>
            <span>on</span>
            <span>&nbsp;</span>
            <span>my</span>
            <span>&nbsp;</span>
            <span>second</span>
            <span>&nbsp;</span>
            <span>year</span>
            <span>&nbsp;</span>
            <span>of</span>
            <span>&nbsp;</span>
            <span>graduate</span>
            <span>&nbsp;</span>
            <span>school</span>
            <span>&nbsp;</span>
            <span>and</span>
            <span>&nbsp;</span>
            <span>working</span>
            <span>&nbsp;</span>
            <span>on</span>
            <span>&nbsp;</span>
            <span>my</span>
            <span>&nbsp;</span>
            <span>thesis.</span>
            <span>&nbsp;</span>
          </p>
          <Link to="/about" className="link">
            See More About Me.
            <div className="arrow-container">
              <img
                src={arrowIcon}
                className={isDarkTheme ? "arrow-dark" : "arrow"}
              ></img>
            </div>
          </Link>
        </div>
      </section>
      <Outlet />
    </Wrapper>
  );
};

export default Hero;
