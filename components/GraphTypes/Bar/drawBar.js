import * as d3 from "d3";

export function drawBar(svgRef, graphData) {
  const data = graphData[0];
  const height = 600;
  const width = 800;
  let padding = 80;

  const svg = d3.select(svgRef.current);

  const datesArray = graphData[0].data.map((entry) => {
    return new Date(entry[0]);
  });
  const valuesArray = graphData[0].data.map((entry) => {
    return new Date(entry[1]);
  });

  //appendsvg
  svg
    .attr("width", width)
    .attr("height", height)
    .style("padding-top", padding)
    .style("padding-left", padding);

  // create scale
  const scaleX = d3
    .scaleTime()
    .domain([d3.min(datesArray), d3.max(datesArray)])
    .range([padding, width - padding]);

  const scaleY = d3
    .scaleLinear()
    .domain([d3.min(datesArray), d3.max(datesArray)])
    .range([[height - padding, padding]]);

  // Add scales to axis
  var xAxis = d3.axisBottom().scale(scaleX);

  var yAxis = d3.axisLeft().scale(scaleY);

  svg.append('g')
  .call(xAxis)
  .attr('id', 'x-axis')
  .attr('transform', 'translate(0, ' + (height - padding) + ')' )

  svg.append('g')
  .call(yAxis)
  .attr('id', 'y-axis')
  .attr('transform', 'translate(' + padding + ', 0)')

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 40)
    .attr("y", (d, i) => h - 10 * d)
    .attr("width", 20)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "steelblue");
}
