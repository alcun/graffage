import React from 'react'
import { drawTreemap } from './drawTreemap';

const Treemap = ({svgRef, graphData}) => {
  const svg = React.useRef(svgRef);

 
  React.useEffect(() => {
    drawTreemap(svg, graphData);
  }, [svg]);

  return (
    <div className='svg-wrapper' id="chart">
      <svg ref={svg} />
    </div>
  );
}

export default Treemap