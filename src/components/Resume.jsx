import React from "react";
import Wrapper from "../wrappers/Test";

const Resume = () => {
  return (
    <Wrapper>
      <section className="resume">
        <div className="resume-content">
          <h2>簡歷</h2>
          <p>
            下載我的簡歷：
            <a
              href="path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              簡歷.pdf
            </a>
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Resume;
