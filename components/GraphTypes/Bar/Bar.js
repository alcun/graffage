import React from 'react'
import * as d3 from "d3";
import { drawBar } from './drawBar';




const Bar = (svgRef, graphData) => {
  const svg = React.useRef(svgRef);

  console.log(graphData)
 
    React.useEffect(() => {
      drawBar(svg, graphData);
    }, [svg]);
  
    return (
      <div id="chart">
        <svg ref={svg} />
      </div>
    );
}

export default Bar