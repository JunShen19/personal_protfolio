import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pic from "../assets/myPicture.jpg";
import pic_ from "../assets/1.jpg";
import logoImg from "../assets/352407633_228095676748173_1386981355860839164_n.gif";

const Hero = () => {
  const { navbarHeight } = useGlobalContext();

  return (
    <section
      className="bg-base-200 overflow-auto"
      style={{
        height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px + 1rem)`,
      }}
    >
      <div className="hero-content flex-col flex justify-center md:flex-row-reverse">
        <div className="h-48 carousel carousel-vertical rounded-box bg-neutral space-y-4 p-4 md:h-96">
          <div className="carousel-item">
            <img
              src={pic}
              alt="img"
              className="w-48 rounded-lg shadow-2xl rounded-box md:w-80"
            />
          </div>
          <div className="carousel-item">
            <img
              src={pic_}
              alt="img"
              className="w-48 rounded-lg shadow-2xl rounded-box md:w-80"
            />
          </div>
        </div>

        <div className="gap-4 flex flex-col items-center md:block">
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>Hi, I'm Jun-Shen, Lin.</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Graduated in 2023</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Computer Science from NCU</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
          <Link to="/about">
            <button className="btn btn-primary mt-4">See More About Me.</button>
          </Link>
        </div>
        <div className="hidden avatar m-4 md:block">
          <div className="w-24 rounded-3xl">
            <img src={logoImg} alt="GIF" className="" />
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Hero;
