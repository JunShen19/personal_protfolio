import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Wrapper from "../wrappers/Footer";
const Footer = () => {
  return (
    <Wrapper>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
