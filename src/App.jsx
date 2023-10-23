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
    <div data-theme={isDarkTheme ? `dark` : `garden`}>
      {/* <div data-theme="dark"> */}
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
