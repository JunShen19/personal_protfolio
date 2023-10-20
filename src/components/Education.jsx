import React from "react";

const Education = () => {
  return (
    <>
      <div className="card w-auto bg-base-100 shadow-xl m-6 p-6">
        <h1>Education</h1>
        <ul className="steps steps-vertical">
          <li data-content="😚" className="step step-success flex">
            <div className="w-56">
              <p className="text-left">Graduated from FSSH.</p>
              <p className="text-right">Jul, 2017</p>
            </div>
          </li>
          <li data-content="🤨" className="step step-success">
            <div className="w-56">
              <p className="text-left">Graduated from NCU-CE.</p>
              <p className="text-right">Jun, 2021</p>
            </div>
          </li>
          <li data-content="🥳" className="step step-success">
            <div className="w-56">
              <p className="text-left">Graduated from NCU-CSIE.</p>
              <p className="text-right">Jul, 2023</p>
            </div>
          </li>
          <li data-content="🤡" className="step step-neutral">
            <div className="w-56">
              <p className="text-left">Looking for a job...</p>
              <p className="text-right">Now</p>
            </div>
          </li>
          <li data-content="😎" className="step step-primary">
            <div className="w-56">
              <p className="text-left">Be a good engineer!!!</p>
              <p className="text-right">In Future</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
