import React from 'react'
import { drawHeat } from './drawHeat';

const Heat = ({svgRef, graphData}) => {
  const svg = React.useRef(svgRef);

 
  React.useEffect(() => {
    drawHeat(svg, graphData);
  }, [svg]);

  return (
    <div className='svg-wrapper' id="chart">
      <svg ref={svg} />
    </div>
  );
}

export default Heat