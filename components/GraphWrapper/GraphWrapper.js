"use client";
import React, { useEffect, useState } from "react";
import navLinks from "../../data/navLinks";
import Bar from "../GraphTypes/Bar/Bar";
import Chloropleth from "../GraphTypes/Chloropleth/Chloropleth";
import Heat from "../GraphTypes/Heat/Heat";
import Scatterplot from "../GraphTypes/Scatterplot/Scatterplot";
import Treemap from "../GraphTypes/Treemap/Treemap";
import Script from "next/script";

// useeffect to assign correct object from navLinks for title/desc/fetchlinks
//data fetching and rendering will be done inside graphType component

const GraphWrapper = ({ graphType }) => {
  const [hasGraph, setHasGraph] = useState(null);
  const [graphInfo, setGraphInfo] = useState(null);

  useEffect(() => {
    //if graphType url param is included in name values to lowercase set hasgraph to true
    //and set the specific navlinks item
    //else show a whoops thats not a correct graph type
    const graphTypeInfo = navLinks.find(
      (graph) =>
        graph.name.toLocaleLowerCase() === graphType.toLocaleLowerCase()
    );
    if (graphTypeInfo) {
      setHasGraph(true);
      setGraphInfo(graphTypeInfo);
    } else {
      setHasGraph(false);
    }
  }, [navLinks && graphType]);

  console.log(graphInfo);

  if (hasGraph && graphInfo) {
    return (
      <div>
        <Script
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
          strategy="afterInteractive"
        />

        <div>GraphType : {graphType}</div>
        <div id='title'>Title: {graphInfo.title}</div>
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
  } else if (hasGraph === false) {
    return <div>Thats not a graph yo</div>;
  } else {
    return <div>Loading</div>;
  }
};

export default GraphWrapper;
