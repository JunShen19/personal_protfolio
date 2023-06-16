import React from "react";
import Wrappers from "../wrappers/Test";

const Education = () => {
  return (
    <Wrappers>
      <section className="education">
        <div className="education-content">
          <h2>Education Background</h2>
          <ul className="education-list">
            <li>
              <h3>Bachelor of Civil Engineering</h3>
              <p>
                <span>National Central University</span>
              </p>
              <p>
                <span>2017. 9 ~ 2021. 6</span>
              </p>
            </li>
            <li>
              <h3>Master of Computer Science and Information Engineering</h3>
              <p>
                <span>National Central University</span>
              </p>
              <p>
                <span>2021. 9 ~ 2023. 7</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Wrappers>
  );
};

export default Education;
