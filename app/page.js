import React from "react";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import "./Home.module.scss";
import navLinks from "../data/navLinks";

const page = () => {
  return (
    <div id="home-page-wrapper" className="page-container">
      <Hero navLinks={navLinks} />
      <Info />
    </div>
  );
};

export default page;
