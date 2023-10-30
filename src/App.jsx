import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { useGlobalContext } from "./context";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div
      data-theme={isDarkTheme ? `dark` : `wireframe`}
      // className="flex-col justify-between"
    >
      {/* <div data-theme="dark"> */}
      <div className="relative z-40">
        <Header />
      </div>

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
