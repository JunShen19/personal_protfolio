import React from "react";

const Skills = () => {
  return (
    <div className="card md:w-1/3 bg-base-100 shadow-xl m-6 p-6">
      <h1>My Skills</h1>
      <h2>Programming</h2>
      <div className="flex gap-2">
        <button class="btn-xs btn btn-neutral">Python</button>
        <button class="btn-xs btn btn-neutral">JavaScript</button>
      </div>
      <h2>Frontend</h2>
      <div className="flex flex-wrap gap-2">
        <button class="btn-xs btn btn-neutral">JavaScript</button>
        <button class="btn-xs btn btn-neutral">HTML</button>
        <button class="btn-xs btn btn-neutral">CSS</button>
        <button class="btn-xs btn btn-neutral">React.js</button>
        <button class="btn-xs btn btn-neutral">Tailwind CSS</button>
      </div>
      <h2>Backend</h2>
      <div className="flex flex-wrap gap-2">
        <button class="btn-xs btn btn-neutral">Node.js</button>
        <button class="btn-xs btn btn-neutral">PostgreSQL</button>
        <button class="btn-xs btn btn-neutral">MongoDB</button>
        <button class="btn-xs btn btn-neutral">Python flask</button>
      </div>
      <h2>ML/DL</h2>
      <div className="flex gap-2">
        <button class="btn-xs btn btn-neutral">Keras</button>
        <button class="btn-xs btn btn-neutral">Scikit-learn</button>
      </div>
    </div>
  );
};

export default Skills;
