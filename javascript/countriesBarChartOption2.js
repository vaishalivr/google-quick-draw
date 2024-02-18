// option created to make US as a path and add add nations that do not have a substantial length at the bottom

// const svgCountriesOPtion2 = d3
//   .select("#countriesChartOption2")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Function to create a custom path for each bar and its connector
// function createBarPath(d, index) {
//   const x = xScale(d.Country);
//   const y = yScale(d.Total);
//   const height = height - y;
//   const width = xScale.bandwidth();
//   const radius = 10; // Radius for the semi-circular turns

//   // If it's the first bar, no need for the left semi-circle
//   if (index === 0) {
//     return `M${x},${y} h${width} a${radius},${radius} 0 0 1 ${radius},${radius} v${
//       height - 2 * radius
//     } a${radius},${radius} 0 0 1 -${radius},${radius} h-${
//       width - 2 * radius
//     } z`;
//   }

//   // For other bars, include the left semi-circle
//   return `M${x - radius},${
//     y + radius
//   } a${radius},${radius} 0 0 1 ${radius},${-radius} h${width} a${radius},${radius} 0 0 1 ${radius},${radius} v${
//     height - 2 * radius
//   } a${radius},${radius} 0 0 1 -${radius},${radius} h-${
//     width - 2 * radius
//   } a${radius},${radius} 0 0 1 -${radius},${-radius} z`;
// }

// // Drawing paths for each bar
// svgCountriesOPtion2
//   .selectAll(".bar-path")
//   .data(countriesBarChartData)
//   .enter()
//   .append("path")
//   .attr("class", "bar-path")
//   .attr("d", (d, i) => createBarPath(d, i))
//   .attr("fill", "steelblue");
