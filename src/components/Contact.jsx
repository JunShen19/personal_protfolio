import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pdf from "../assets/resume.pdf";
import logoImg from "../assets/duck_contact.gif";
import axios from "axios";

const Contact = () => {
  const { isDarkTheme, toggleDarkTheme, navbarHeight } = useGlobalContext();
  const [data, setData] = useState({ text: "", email: "", textarea: "" });

  const handleInputChange = (e) => {
    const { type, value } = e.target;
    console.log(data);
    setData({
      ...data,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // https://github.com/axios/axios

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/0fb4a4d7b83952f2da490758f2f929d7", {
        name: data.text,
        message: `form: ${data.email}, content: ${data.textarea}`,
      })
      .then((response) => console.log(response))
      .then(setData({ text: "", email: "", textarea: "" }))
      .catch((error) => console.log(error));
  };

  return (
    <section
      style={{
        height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px)`,
      }}
    >
      <div className="flex h-full items-center gap-4">
        <form
          className="card w-auto h-max bg-base-100 shadow-xl p-6 flex justify-between"
          style={{
            height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px - 18px)`,
          }}
          onSubmit={handleSubmit}
        >
          <h1>Contact.</h1>
          <label className="label" htmlFor="text">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            id="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={data.text}
            onChange={handleInputChange}
            required
          />
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={data.email}
            onChange={handleInputChange}
            required
          />
          <label className="label" htmlFor="content">
            <span className="label-text">Content</span>
          </label>
          <textarea
            id="content"
            className="textarea textarea-bordered resize-none h-auto"
            placeholder="Contact me!"
            value={data.textarea}
            onChange={handleInputChange}
            required
          ></textarea>
          <button className="btn btn-sm btn-primary mt-2">Send!</button>
        </form>
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
