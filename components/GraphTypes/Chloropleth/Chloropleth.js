import React from 'react'
import { drawChloropleth } from './drawChloropleth';

const Chloropleth = ({svgRef, graphData}) => {
  const svg = React.useRef(svgRef);

 
  React.useEffect(() => {
    drawChloropleth(svg, graphData);
  }, [svg]);

  return (
    <div className='svg-wrapper' id="chart">
      <svg ref={svg} />
    </div>
  );
}

export default Chloropleth