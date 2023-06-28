import React from "react";
import Wrapper from "../wrappers/Skills";

const Skills = () => {
  return (
    <Wrapper>
      <section className="skills">
        <div className="skills-content">
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">JavaScript</li>
            <li className="skill">React</li>
            {/* <li className="skill">Node.js</li> */}
            <li className="skill">Python</li>
            <li className="skill">Deep Learning</li>
            <li className="skill">Pandas</li>
            <li className="skill">Numpy</li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
