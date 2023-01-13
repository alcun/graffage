import React from 'react'
import { drawScatterplot } from './drawScatterplot';

const Scatterplot = ({svgRef, graphData}) => {
  const svg = React.useRef(svgRef);

 
  React.useEffect(() => {
    drawScatterplot(svg, graphData);
  }, [svg]);

  return (
    <div className='svg-wrapper' id="chart">
      <svg ref={svg} />
    </div>
  );
}

export default Scatterplot