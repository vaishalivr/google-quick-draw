const rows = 9;
const columns = 3;

const svg_o2 = d3
  .select("body")
  .append("svg")
  .attr("width", 1800)
  .attr("height", 850)
  .style("border", "1px solid black");

const gridData1 = Array.from({ length: rows * columns }, (_, i) => ({
  x: (i % columns) * UNITRECTWIDTH,
  y: Math.floor(i / columns) * UNITRECTHEIGHT,
}));

const xOffset1 = columns * UNITRECTWIDTH + 30;

const gridData2 = Array.from({ length: rows * columns }, (_, i) => ({
  x: (i % columns) * UNITRECTWIDTH + xOffset1,
  y: Math.floor(i / columns) * UNITRECTHEIGHT,
}));

const xOffset2 = xOffset1 + (columns * UNITRECTWIDTH + 30);

const gridData3 = Array.from({ length: rows * columns }, (_, i) => ({
  x: (i % columns) * UNITRECTWIDTH + xOffset2,
  y: Math.floor(i / columns) * UNITRECTHEIGHT,
}));

const xOffset3 = xOffset2 + (columns * UNITRECTWIDTH + 30);

const gridData4 = Array.from({ length: rows * columns }, (_, i) => ({
  x: (i % columns) * UNITRECTWIDTH + xOffset3,
  y: Math.floor(i / columns) * UNITRECTHEIGHT,
}));

const xOffset4 = xOffset3 + (columns * UNITRECTWIDTH + 30);

const gridData5 = Array.from({ length: rows * columns }, (_, i) => ({
  x: (i % columns) * UNITRECTWIDTH + xOffset4,
  y: Math.floor(i / columns) * UNITRECTHEIGHT,
}));

svg_o2
  .selectAll("rect.first-grid")
  .data(gridData1)
  .enter()
  .append("rect")
  .attr("class", "first-grid")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", UNITRECTWIDTH)
  .attr("height", UNITRECTHEIGHT)
  .style("fill", "none")
  .style("stroke", "black");

// Append the second grid with xOffset1
svg_o2
  .selectAll("rect.second-grid")
  .data(gridData2)
  .enter()
  .append("rect")
  .attr("class", "second-grid")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", UNITRECTWIDTH)
  .attr("height", UNITRECTHEIGHT)
  .style("fill", "none")
  .style("stroke", "black");

// If you want to add a third grid with xOffset2
svg_o2
  .selectAll("rect.third-grid")
  .data(gridData3)
  .enter()
  .append("rect")
  .attr("class", "third-grid")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", UNITRECTWIDTH)
  .attr("height", UNITRECTHEIGHT)
  .style("fill", "none")
  .style("stroke", "black");

svg_o2
  .selectAll("rect.fourth-grid")
  .data(gridData4)
  .enter()
  .append("rect")
  .attr("class", "third-grid")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", UNITRECTWIDTH)
  .attr("height", UNITRECTHEIGHT)
  .style("fill", "none")
  .style("stroke", "black");

svg_o2
  .selectAll("rect.fifth-grid")
  .data(gridData5)
  .enter()
  .append("rect")
  .attr("class", "third-grid")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", UNITRECTWIDTH)
  .attr("height", UNITRECTHEIGHT)
  .style("fill", "none")
  .style("stroke", "black");
