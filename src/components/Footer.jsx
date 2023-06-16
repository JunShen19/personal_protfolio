import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Wrapper from "../wrappers/Footer";
const Footer = () => {
  return (
    <Wrapper>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100002020494554"
          className="social-icon"
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/junshen19/" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://github.com/JunShen19" className="social-icon">
          <FaGithub />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
