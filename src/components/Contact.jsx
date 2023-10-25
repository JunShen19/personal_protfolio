import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import pdf from "../assets/pdf_for_portfolio.pdf";
import logoImg from "../assets/duck_contact.gif";
import axios from "axios";

const Contact = () => {
  const { navbarHeight } = useGlobalContext();
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
      className="bg-base-200 overflow-auto"
      style={{
        height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px + 1rem)`,
      }}
    >
      <div className="md:flex md:justify-center md:items-center bg-base-200 md:flex-col">
        <div className="my-4 flex flex-col md:flex-row h-full items-center gap-4">
          <form
            className="overflow-auto card w-auto md:h-max bg-base-100 shadow-xl p-6 flex md:justify-between m-4"
            // style={{
            //   height: `calc(100vh - ${navbarHeight}px - ${navbarHeight}px - 18px)`,
            // }}
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
          <div className="flex justify-center items-center flex-col gap-4">
            <div className="avatar">
              <div className="w-24 md:w-32 rounded-3xl">
                <img src={logoImg} alt="GIF" className="scale-150" />
              </div>
            </div>
            <div>
              <a href={pdf} download className="btn btn-neutral">
                Download Resume
              </a>
            </div>
          </div>
          <div>
            <Link to="/">
              <button className="mb-4 md:mb-0 md:absolute btn btn-primary md:-bottom-5 md:right-28">
                Go Back Home.
              </button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default Contact;
