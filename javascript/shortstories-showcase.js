const NUMRECTSDOWN = 9; //9
const NUMRECTSACROSS = 27; //18
const UNITRECTWIDTH = 60; //90
const UNITRECTHEIGHT = 60; //90

const svgShortStories = d3
  .select("#shortstories-showcase")
  .append("svg")
  .attr("width", 1800)
  .attr("height", 850)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

for (let y = 0; y < NUMRECTSDOWN; y++) {
  for (let x = 0; x < NUMRECTSACROSS; x++) {
    svgShortStories
      .append("rect")
      .attr("width", UNITRECTWIDTH)
      .attr("height", UNITRECTHEIGHT)
      .attr("x", x * UNITRECTWIDTH)
      .attr("y", y * UNITRECTHEIGHT)
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-dasharray", "2")
      .attr("id", `rect-${y}-${x}`)
      .on("click", function (e, d) {
        console.log("clicked on rect");
        console.log(this.id);
      });
  }
}

const drawQuickDrawImage = (rectId, data) => {
  const rect = d3.select(`#${rectId}`);
  const rectX = +rect.attr("x");
  const rectY = +rect.attr("y");
  const rectWidth = UNITRECTWIDTH * 0.6;
  const rectHeight = UNITRECTHEIGHT * 0.6;
  const marginX = (UNITRECTWIDTH - rectWidth) / 2;
  const marginY = (UNITRECTHEIGHT - rectHeight) / 2;

  const group = svgShortStories
    .append("g")
    .attr("transform", `translate(${rectX + marginX}, ${rectY + marginY})`);

  const scaleX = d3.scaleLinear().domain([0, 255]).range([0, rectWidth]);
  const scaleY = d3.scaleLinear().domain([0, 255]).range([0, rectHeight]);

  data.forEach((stroke) => {
    const scaledStroke = [
      stroke[0].map((x) => scaleX(x)),
      stroke[1].map((y) => scaleY(y)),
    ];

    group
      .append("path")
      .attr("d", createPath(scaledStroke))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "2");
  });
};

drawQuickDrawImage("rect-0-0", snowflake_data_1);
drawQuickDrawImage("rect-0-1", snowflake_data_2);
drawQuickDrawImage("rect-0-2", snowflake_data_3);
drawQuickDrawImage("rect-1-0", snowflake_data_4);

drawQuickDrawImage("rect-2-14", necklace_data_1);
drawQuickDrawImage("rect-2-15", necklace_data_2);
drawQuickDrawImage("rect-2-16", necklace_data_3);
drawQuickDrawImage("rect-3-16", necklace_data_4);
drawQuickDrawImage("rect-3-17", necklace_data_5);

// const snowflakeGroup = [
//   "rect-0-0",
//   "rect-0-1",
//   "rect-0-2",
//   "rect-1-0",
//   "rect-1-1",
//   "rect-1-2",
//   "rect-2-0",
//   "rect-2-1",
//   "rect-2-2",
// ];
// const necklaceGroup = [
//   "rect-3-0",
//   "rect-3-1",
//   "rect-3-2",
//   "rect-4-0",
//   "rect-4-1",
//   "rect-4-2",
//   "rect-5-0",
//   "rect-5-1",
//   "rect-5-2",
// ];
// const coffeecupGroup = [
//   "rect-6-0",
//   "rect-6-1",
//   "rect-6-2",
//   "rect-7-0",
//   "rect-7-1",
//   "rect-7-2",
//   "rect-8-0",
//   "rect-8-1",
//   "rect-8-2",
// ];
// const flower1Group = [
//   "rect-0-3",
//   "rect-0-4",
//   "rect-0-5",
//   "rect-1-3",
//   "rect-1-4",
//   "rect-1-5",
//   "rect-2-3",
//   "rect-2-4",
//   "rect-2-5",
// ];

function createGroupArray(startRow, startCol, numRows, numCols) {
  const groupArray = [];
  for (let i = startRow; i < startRow + numRows; i++) {
    for (let j = startCol; j < startCol + numCols; j++) {
      groupArray.push(`rect-${i}-${j}`);
    }
  }
  return groupArray;
}

const snowflakeGroup = createGroupArray(0, 0, 3, 3);
const necklaceGroup = createGroupArray(3, 0, 3, 3);
const coffeecupGroup = createGroupArray(6, 0, 3, 3);
const flower1Group = createGroupArray(0, 3, 3, 3);
const breadGroup = createGroupArray(3, 3, 3, 3);

const groups = {};
snowflakeGroup.forEach((id) => (groups[id] = snowflakeGroup));
necklaceGroup.forEach((id) => (groups[id] = necklaceGroup));
coffeecupGroup.forEach((id) => (groups[id] = coffeecupGroup));
flower1Group.forEach((id) => (groups[id] = flower1Group));
breadGroup.forEach((id) => (groups[id] = breadGroup));

let lastHighlightedRectIds = [];

function highlightRectangles(rectIds) {
  d3.selectAll(".highlight-group").remove();
  lastHighlightedRectIds.forEach((id) => {
    d3.select(`#${id}`)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "2");
  });

  const firstRect = d3.select(`#${rectIds[0]}`).node().getBBox();
  const lastRect = d3
    .select(`#${rectIds[rectIds.length - 1]}`)
    .node()
    .getBBox();

  const groupHighlight = svgShortStories
    .append("rect")
    .attr("x", firstRect.x)
    .attr("y", firstRect.y)
    .attr("width", lastRect.x - firstRect.x + UNITRECTWIDTH)
    .attr("height", lastRect.y - firstRect.y + UNITRECTHEIGHT)
    .attr("class", "highlight-group")
    .attr("stroke", "#ffd43c")
    .attr("stroke-width", 6)
    .attr("fill", "none");

  lastHighlightedRectIds = rectIds;
}

function setupRectClickListeners() {
  Object.keys(groups).forEach((id) => {
    d3.select(`#${id}`).on("click", function () {
      highlightRectangles(groups[id]);
    });
  });
}
setupRectClickListeners();
