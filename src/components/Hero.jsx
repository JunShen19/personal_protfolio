import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pic from "../assets/myPicture.jpg";
import pic_ from "../assets/1.jpg";
import logoImg from "../assets/352407633_228095676748173_1386981355860839164_n.gif";

const Hero = () => {
  const { isDarkTheme, toggleDarkTheme, navbarHeight } = useGlobalContext();

  return (
    <>
      <section
        className="hero min-h-screen bg-base-200"
        style={{
          minHeight: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px)`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h-96 carousel carousel-vertical rounded-box bg-neutral space-y-4 p-4">
            <div className="carousel-item">
              <img
                src={pic}
                alt="GIF"
                className="max-w-xs rounded-lg shadow-2xl rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src={pic_}
                alt="GIF"
                className="max-w-xs rounded-lg shadow-2xl rounded-box"
              />
            </div>
          </div>

          <div className="gap-4">
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
              <button className="btn btn-primary mt-4">
                See More About Me.
              </button>
            </Link>
          </div>
          <div className="avatar m-4">
            <div className="w-24 rounded-3xl">
              <img src={logoImg} alt="GIF" className="" />
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Hero;
