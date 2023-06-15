import React from "react";
import Wrappers from "../wrappers/Test";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <Wrappers>
      <section className="contact">
        <div className="contact-content">
          <h2>聯絡我</h2>
          <p>如果你有任何問題或合作機會，歡迎與我聯繫。</p>
          <ul className="contact-info">
            <li>
              <span>電子郵件：</span>
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </li>
            <li>
              <span>電話號碼：</span>
              <a href="tel:+1234567890">+1234567890</a>
            </li>
            <li>
              <span>社交媒體：</span>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />
    </Wrappers>
  );
};

export default Contact;
