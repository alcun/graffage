import React from "react";
import * as d3 from "d3";
import { drawBar } from "./drawBar";

const Bar = ({ svgRef, graphInfo, graphData }) => {
  const svg = React.useRef(svgRef);

  React.useEffect(() => {
    drawBar(svg, graphData);
  }, [svg]);

  return (
    <div className="svg-wrapper">
      <svg id="chart" ref={svg} />
    </div>
  );
};

export default Bar;
