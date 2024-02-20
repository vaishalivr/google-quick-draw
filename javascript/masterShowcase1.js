const [UNITLEGENDRECTWIDTH, UNITLEGENDRECTHEIGHT] = [30, 30];
const LEGENDRECTCOUNT = 40;
const RECTCOUNTDATA = d3.range(LEGENDRECTCOUNT);
const RECTSPERROW = LEGENDRECTCOUNT;
const SVGWIDTH = 1200;

const categoryLabels = [
  { text: "Dishwasher" },
  { text: "Blackberry" },
  { text: "Cookies" },
  { text: "Fan" },
  { text: "Mona Lisa" },
  { text: "Great Wall of China" },
  { text: "Nail" },
  { text: "Beach" },
  { text: "Coffee Cup" },
  { text: "Dresser" },
  { text: "Mail Box" },
  { text: "House" },
  { text: "Ice Cream" },
  { text: "Hand" },
  { text: "Fence" },
  { text: "Dumb Bell" },
  { text: "Suitcase" },
  { text: "Smiley Face" },
  { text: "Sink" },
  { text: "Camera" },
  { text: "Diving Board" },
  { text: "Motorbike" },
  { text: "Marker" },
  { text: "Police Car" },
  { text: "Paint Brush" },
  { text: "Necklace" },
  { text: "Passport" },
  { text: "River" },
  { text: "Shoe" },
  { text: "Whale" },
  { text: "Tree" },
  { text: "Teddy Bear" },
  { text: "Vase" },
  { text: "Telephone" },
  { text: "Washing Machine" },
  { text: "Wristwatch" },
  { text: "Umbrella" },
  { text: "Swing Set" },
  { text: "Sweater" },
  { text: "T-shirt" },
];

const svgMaster = d3
  .select("#master-showcase")
  .append("svg")
  .attr("width", SVGWIDTH + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const showcaseDrawStrokes = (data, group, index) => {
  if (index < data.length) {
    const stroke = data[index];

    group
      .append("path")
      .attr("d", createPath(stroke))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "2");

    if (index + 1 < data.length) {
      showcaseDrawStrokes(data, group, index + 1);
    }
  }
};

const scaleGroup = (group) => {
  const bbox = group.node().getBBox();
  console.log(bbox);
  const originalSize = bbox.width * bbox.height;
  console.log(originalSize);
  const requiredSize = 100 * 100;
  return requiredSize / originalSize;
};

const group1 = svgMaster.append("g");
const group2 = svgMaster.append("g");
const group3 = svgMaster.append("g");
const group4 = svgMaster.append("g");
const group5 = svgMaster.append("g");

showcaseDrawStrokes(
  mastershowcase_data["dishwasher"]["United States"][0]["drawing"],
  group1,
  0
);
showcaseDrawStrokes(
  mastershowcase_data["dishwasher"]["United States"][1]["drawing"],
  group2,
  0
);
showcaseDrawStrokes(
  mastershowcase_data["dishwasher"]["United States"][2]["drawing"],
  group3,
  0
);

setTimeout(() => {
  group1.attr("transform", `translate(0,0) scale(${scaleGroup(group1)})`);
  group2.attr("transform", `translate(60,0) scale(${scaleGroup(group2)})`);
  group3.attr("transform", `translate(120,0) scale(${scaleGroup(group3)})`);
}, 0);
