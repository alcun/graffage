import * as d3 from "d3";

export function drawBar(svgRef, graphData) {
  const data = graphData[0];
  // const height = 600;
  // const width = 800;
  // let padding = 80;

  const datesArray = graphData[0].data.map((entry) => {
    return new Date(entry[0]);
  });
  const valuesArray = graphData[0].data.map((entry) => {
    return (entry[1]);
  });

  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select(svgRef.current)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X axis
  var x = d3
    .scaleTime()
    .range([0, width])
    .domain([d3.min(datesArray), d3.max(datesArray)]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([d3.min(valuesArray), d3.max(valuesArray)])
    .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));


  // // Bars
  // svg.selectAll('rect')
  // .data(data)
  // .enter()
  // .append('rect')
  // .attr('class', 'bar')
  // .attr('width', (width - (2*(margin.left + margin.right))) / data.length)
  // .attr('data-date', (item) => {
  //     return item[0]
  // })
  // .attr('data-gdp', (item) => {
  //     return item[1]
  // })
  // .attr('height', (item) => {
  //     return heightScale(item[1])
  // })
  // .attr('x', (item, index) => {
  //     return xScale(index)
  // })
  // .attr('y', (item) =>{
  //     return (height - (margin.top + margin.bottom)) - heightScale(item[1])

  // })

}


  // //appendsvg
  // svg
  //   .attr("width", width)
  //   .attr("height", height)
  //   .style("padding", padding)

  // // create scale
  // const scaleX = d3
  //   .scaleTime()
  // .domain([d3.min(datesArray), d3.max(datesArray)])
  //   .range([padding, width + padding]);

  // const scaleY = d3
  //   .scaleLinear()
  //   .domain([d3.min(valuesArray), d3.max(valuesArray)])
  //   .range([[height - padding, padding]]);

  // // Add scales to axis
  // var xAxis = d3.axisBottom().scale(scaleX);
  // var yAxis = d3.axisLeft().scale(scaleY);

  // svg.append("g").call(xAxis).attr("id", "x-axis");

  // svg.append("g").call(yAxis).attr("id", "y-axis");

  // svg
  //   .selectAll("rect")
  //   .data(data)
  //   .enter()
  //   .append("rect")
  //   .attr("x", (d, i) => i * 40)
  //   .attr("y", (d, i) => h - 10 * d)
  //   .attr("width", 20)
  //   .attr("height", (d, i) => d * 10)
  //   .attr("fill", "steelblue");
