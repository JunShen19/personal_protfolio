import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./wrappers/Layout";
import { ScrollToTop } from "./ScrollToTop";
const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
};

export default App;
