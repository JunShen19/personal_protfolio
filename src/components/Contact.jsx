import React from "react";
import Wrappers from "../wrappers/Contact";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pdf from "../assets/resume.pdf";
import arrowIcon from "../assets/arrow-right-svgrepo-com.svg";
import logoImg from "../assets/duck_contact.gif";
import axios from "axios";

const Contact = () => {
  const { isDarkTheme, toggleDarkTheme, navbarHeight } = useGlobalContext();

  const sendInfo = () => {
    // https://github.com/axios/axios
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/ 0fb4a4d7b83952f2da490758f2f929d7", {
        name: "FormSubmit",
        message: "I'm from Devro LABS",
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section
      style={{
        height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px)`,
      }}
    >
      <div className="flex h-full items-center gap-4">
        <div
          class="card w-auto h-max bg-base-100 shadow-xl p-6 flex justify-between"
          style={{
            height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px - 18px)`,
          }}
        >
          <h1>Contact.</h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered resize-none h-auto"
            placeholder="Contact me!"
          ></textarea>
          <button className="btn btn-sm btn-primary mt-2" onClick={sendInfo}>
            Send!
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="avatar">
            <div className="w-32 rounded-3xl">
              <img src={logoImg} alt="GIF" className="scale-150" />
            </div>
          </div>
          <a href={pdf} download className="btn btn-neutral">
            Download Resume
          </a>
        </div>
      </div>
      <Link to="/" className="link">
        <button className="absolute btn btn-primary bottom-10 right-28">
          Go Back Home.
        </button>
      </Link>
      <Outlet />
    </section>
  );
};

export default Contact;
