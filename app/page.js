import React from "react";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import "./Home.module.scss";

const page = () => {
  return (
      <div id="home-page-wrapper" className="page-container">
        <Hero/>
        <Info />
      </div>
  );
};

export default page;
