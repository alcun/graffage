"use client";
import React, { useEffect, useState } from "react";
import navLinks from "../../data/navLinks";
import Bar from "../GraphTypes/Bar/Bar";
import Chloropleth from "../GraphTypes/Chloropleth/Chloropleth";
import Heat from "../GraphTypes/Heat/Heat";
import Scatterplot from "../GraphTypes/Scatterplot/Scatterplot";
import Treemap from "../GraphTypes/Treemap/Treemap";

// useeffect to assign correct object from navLinks for title/desc/fetchlinks
//data fetching and rendering will be done inside graphType component

const GraphWrapper = ({ graphType, graphInfo, graphData }) => {
  return (
    <div>
      <div>GraphType : {graphType}</div>
      <div id="title">Title: {graphInfo.title}</div>
      <div>Description: {graphInfo.description}</div>

      <div>
        {graphType === "bar" ? (
          <Bar />
        ) : graphType === "scatterplot" ? (
          <Scatterplot />
        ) : graphType === "heat" ? (
          <Heat />
        ) : graphType === "chloropleth" ? (
          <Chloropleth />
        ) : graphType === "treemap" ? (
          <Treemap />
        ) : null}
      </div>

      <div>
        Data links:{" "}
        {graphInfo.fetchRoutes.map((link, i) => {
          return <div key={i}>{link}</div>;
        })}
      </div>
    </div>
  );
};

export default GraphWrapper;
