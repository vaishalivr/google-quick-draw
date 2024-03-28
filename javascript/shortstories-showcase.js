const NUMRECTSDOWN = 9; //9
const NUMRECTSACROSS = 27; //18
const UNITRECTWIDTH = 60; //90
const UNITRECTHEIGHT = 60; //90
const SHOWCASEMARGIN = 10;

const svgShortStories = d3
  .select("#shortstories-showcase")
  .append("svg")
  .attr("width", 1800)
  .attr("height", 850)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

for (let y = 0; y < NUMRECTSDOWN; y++) {
  for (let x = 0; x < NUMRECTSACROSS; x++) {
    //let additionalXMargin = Math.floor(x / 3) * SHOWCASEMARGIN;
    //let additionalYMargin = Math.floor(y / 3) * SHOWCASEMARGIN;

    svgShortStories
      .append("rect")
      .attr("width", UNITRECTWIDTH)
      .attr("height", UNITRECTHEIGHT)
      // .attr("x", x * UNITRECTWIDTH + additionalXMargin)
      // .attr("y", y * UNITRECTHEIGHT + additionalYMargin)
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
      .attr("stroke-width", "1");
  });
};

drawQuickDrawImage("rect-0-24", necklace_data_1);
drawQuickDrawImage("rect-0-25", necklace_data_2);
drawQuickDrawImage("rect-0-26", necklace_data_3);
drawQuickDrawImage("rect-1-24", necklace_data_4);
drawQuickDrawImage("rect-1-25", necklace_data_5);
drawQuickDrawImage("rect-1-26", necklace_data_6);
drawQuickDrawImage("rect-2-24", necklace_data_7);
drawQuickDrawImage("rect-2-25", necklace_data_8);
drawQuickDrawImage("rect-2-26", necklace_data_9);

drawQuickDrawImage("rect-0-21", bracelet_data_1);
drawQuickDrawImage("rect-0-22", bracelet_data_2);
drawQuickDrawImage("rect-0-23", bracelet_data_3);
drawQuickDrawImage("rect-1-21", bracelet_data_4);
drawQuickDrawImage("rect-1-22", bracelet_data_5);
drawQuickDrawImage("rect-1-23", bracelet_data_6);
drawQuickDrawImage("rect-2-21", bracelet_data_7);
drawQuickDrawImage("rect-2-22", bracelet_data_8);
drawQuickDrawImage("rect-2-23", bracelet_data_9);

drawQuickDrawImage("rect-6-0", coffeecup_data_1);
drawQuickDrawImage("rect-6-1", coffeecup_data_2);
drawQuickDrawImage("rect-6-2", coffeecup_data_3);
drawQuickDrawImage("rect-7-0", coffeecup_data_4);
drawQuickDrawImage("rect-7-1", coffeecup_data_5);
drawQuickDrawImage("rect-7-2", coffeecup_data_6);
drawQuickDrawImage("rect-8-0", coffeecup_data_7);
drawQuickDrawImage("rect-8-1", coffeecup_data_8);
drawQuickDrawImage("rect-8-2", coffeecup_data_9);

drawQuickDrawImage("rect-3-0", cup_data_1);
drawQuickDrawImage("rect-3-1", cup_data_2);
drawQuickDrawImage("rect-3-2", cup_data_3);
drawQuickDrawImage("rect-4-0", cup_data_4);
drawQuickDrawImage("rect-4-1", cup_data_5);
drawQuickDrawImage("rect-4-2", cup_data_6);
drawQuickDrawImage("rect-5-0", cup_data_7);
drawQuickDrawImage("rect-5-1", cup_data_8);
drawQuickDrawImage("rect-5-2", cup_data_9);

drawQuickDrawImage("rect-0-0", mug_data_1);
drawQuickDrawImage("rect-0-1", mug_data_2);
drawQuickDrawImage("rect-0-2", mug_data_3);
drawQuickDrawImage("rect-1-0", mug_data_4);
drawQuickDrawImage("rect-1-1", mug_data_5);
drawQuickDrawImage("rect-1-2", mug_data_6);
drawQuickDrawImage("rect-2-0", mug_data_7);
drawQuickDrawImage("rect-2-1", mug_data_8);
drawQuickDrawImage("rect-2-2", mug_data_9);

drawQuickDrawImage("rect-3-24", flower_data_1);
drawQuickDrawImage("rect-3-25", flower_data_2);
drawQuickDrawImage("rect-3-26", flower_data_3);
drawQuickDrawImage("rect-4-24", flower_data_4);
drawQuickDrawImage("rect-4-25", flower_data_5);
drawQuickDrawImage("rect-4-26", flower_data_6);
drawQuickDrawImage("rect-5-24", flower_data_7);
drawQuickDrawImage("rect-5-25", flower_data_8);
drawQuickDrawImage("rect-5-26", flower_data_9);

drawQuickDrawImage("rect-0-3", donut_data_1);
drawQuickDrawImage("rect-0-4", donut_data_2);
drawQuickDrawImage("rect-0-5", donut_data_3);
drawQuickDrawImage("rect-1-3", donut_data_4);
drawQuickDrawImage("rect-1-4", donut_data_5);
drawQuickDrawImage("rect-1-5", donut_data_6);
drawQuickDrawImage("rect-2-3", donut_data_7);
drawQuickDrawImage("rect-2-4", donut_data_8);
drawQuickDrawImage("rect-2-5", donut_data_9);

drawQuickDrawImage("rect-0-12", smiley_data_1);
drawQuickDrawImage("rect-0-13", smiley_data_2);
drawQuickDrawImage("rect-0-14", smiley_data_3);
drawQuickDrawImage("rect-1-12", smiley_data_4);
drawQuickDrawImage("rect-1-13", smiley_data_5);
drawQuickDrawImage("rect-1-14", smiley_data_6);
drawQuickDrawImage("rect-2-12", smiley_data_7);
drawQuickDrawImage("rect-2-13", smiley_data_8);
drawQuickDrawImage("rect-2-14", smiley_data_9);

drawQuickDrawImage("rect-0-6", pond_data_1);
drawQuickDrawImage("rect-0-7", pond_data_2);
drawQuickDrawImage("rect-0-8", pond_data_3);
drawQuickDrawImage("rect-1-6", pond_data_4);
drawQuickDrawImage("rect-1-7", pond_data_5);
drawQuickDrawImage("rect-1-8", pond_data_6);
drawQuickDrawImage("rect-2-6", pond_data_7);
drawQuickDrawImage("rect-2-7", pond_data_8);
drawQuickDrawImage("rect-2-8", pond_data_9);

drawQuickDrawImage("rect-3-3", flyingSaucer_data_1);
drawQuickDrawImage("rect-3-4", flyingSaucer_data_2);
drawQuickDrawImage("rect-3-5", flyingSaucer_data_3);
drawQuickDrawImage("rect-4-3", flyingSaucer_data_4);
drawQuickDrawImage("rect-4-4", flyingSaucer_data_5);
drawQuickDrawImage("rect-4-5", flyingSaucer_data_6);
drawQuickDrawImage("rect-5-3", flyingSaucer_data_7);
drawQuickDrawImage("rect-5-4", flyingSaucer_data_8);
drawQuickDrawImage("rect-5-5", flyingSaucer_data_9);

drawQuickDrawImage("rect-3-6", river_data_1);
drawQuickDrawImage("rect-3-7", river_data_2);
drawQuickDrawImage("rect-3-8", river_data_3);
drawQuickDrawImage("rect-4-6", river_data_4);
drawQuickDrawImage("rect-4-7", river_data_5);
drawQuickDrawImage("rect-4-8", river_data_6);
drawQuickDrawImage("rect-5-6", river_data_7);
drawQuickDrawImage("rect-5-7", river_data_8);
drawQuickDrawImage("rect-5-8", river_data_9);

drawQuickDrawImage("rect-3-9", marker_data_1);
drawQuickDrawImage("rect-3-10", marker_data_2);
drawQuickDrawImage("rect-3-11", marker_data_3);
drawQuickDrawImage("rect-4-9", marker_data_4);
drawQuickDrawImage("rect-4-10", marker_data_5);
drawQuickDrawImage("rect-4-11", marker_data_6);
drawQuickDrawImage("rect-5-9", marker_data_7);
drawQuickDrawImage("rect-5-10", marker_data_8);
drawQuickDrawImage("rect-5-11", marker_data_9);

drawQuickDrawImage("rect-3-12", face_data_1);
drawQuickDrawImage("rect-3-13", face_data_2);
drawQuickDrawImage("rect-3-14", face_data_3);
drawQuickDrawImage("rect-4-12", face_data_4);
drawQuickDrawImage("rect-4-13", face_data_5);
drawQuickDrawImage("rect-4-14", face_data_6);
drawQuickDrawImage("rect-5-12", face_data_7);
drawQuickDrawImage("rect-5-13", face_data_8);
drawQuickDrawImage("rect-5-14", face_data_9);

drawQuickDrawImage("rect-6-12", mona_data_1);
drawQuickDrawImage("rect-6-13", mona_data_2);
drawQuickDrawImage("rect-6-14", mona_data_3);
drawQuickDrawImage("rect-7-12", mona_data_4);
drawQuickDrawImage("rect-7-13", mona_data_5);
drawQuickDrawImage("rect-7-14", mona_data_6);
drawQuickDrawImage("rect-8-12", mona_data_7);
drawQuickDrawImage("rect-8-13", mona_data_8);
drawQuickDrawImage("rect-8-14", mona_data_9);

drawQuickDrawImage("rect-6-3", hat_data_1);
drawQuickDrawImage("rect-6-4", hat_data_2);
drawQuickDrawImage("rect-6-5", hat_data_3);
drawQuickDrawImage("rect-7-3", hat_data_4);
drawQuickDrawImage("rect-7-4", hat_data_5);
drawQuickDrawImage("rect-7-5", hat_data_6);
drawQuickDrawImage("rect-8-3", hat_data_7);
drawQuickDrawImage("rect-8-4", hat_data_8);
drawQuickDrawImage("rect-8-5", hat_data_9);

drawQuickDrawImage("rect-6-9", pencil_data_1);
drawQuickDrawImage("rect-6-10", pencil_data_2);
drawQuickDrawImage("rect-6-11", pencil_data_3);
drawQuickDrawImage("rect-7-9", pencil_data_4);
drawQuickDrawImage("rect-7-10", pencil_data_5);
drawQuickDrawImage("rect-7-11", pencil_data_6);
drawQuickDrawImage("rect-8-9", pencil_data_7);
drawQuickDrawImage("rect-8-10", pencil_data_8);
drawQuickDrawImage("rect-8-11", pencil_data_9);

drawQuickDrawImage("rect-6-6", ocean_data_1);
drawQuickDrawImage("rect-6-7", ocean_data_2);
drawQuickDrawImage("rect-6-8", ocean_data_3);
drawQuickDrawImage("rect-7-6", ocean_data_4);
drawQuickDrawImage("rect-7-7", ocean_data_5);
drawQuickDrawImage("rect-7-8", ocean_data_6);
drawQuickDrawImage("rect-8-6", ocean_data_7);
drawQuickDrawImage("rect-8-7", ocean_data_8);
drawQuickDrawImage("rect-8-8", ocean_data_9);

drawQuickDrawImage("rect-6-21", leaf_data_1);
drawQuickDrawImage("rect-6-22", leaf_data_2);
drawQuickDrawImage("rect-6-23", leaf_data_3);
drawQuickDrawImage("rect-7-21", leaf_data_4);
drawQuickDrawImage("rect-7-22", leaf_data_5);
drawQuickDrawImage("rect-7-23", leaf_data_6);
drawQuickDrawImage("rect-8-21", leaf_data_7);
drawQuickDrawImage("rect-8-22", leaf_data_8);
drawQuickDrawImage("rect-8-23", leaf_data_9);

drawQuickDrawImage("rect-3-21", housePlant_data_1);
drawQuickDrawImage("rect-3-22", housePlant_data_2);
drawQuickDrawImage("rect-3-23", housePlant_data_3);
drawQuickDrawImage("rect-4-21", housePlant_data_4);
drawQuickDrawImage("rect-4-22", housePlant_data_5);
drawQuickDrawImage("rect-4-23", housePlant_data_6);
drawQuickDrawImage("rect-5-21", housePlant_data_7);
drawQuickDrawImage("rect-5-22", housePlant_data_8);
drawQuickDrawImage("rect-5-23", housePlant_data_9);

drawQuickDrawImage("rect-6-24", feather_data_1);
drawQuickDrawImage("rect-6-25", feather_data_2);
drawQuickDrawImage("rect-6-26", feather_data_3);
drawQuickDrawImage("rect-7-24", feather_data_4);
drawQuickDrawImage("rect-7-25", feather_data_5);
drawQuickDrawImage("rect-7-26", feather_data_6);
drawQuickDrawImage("rect-8-24", feather_data_7);
drawQuickDrawImage("rect-8-25", feather_data_8);
drawQuickDrawImage("rect-8-26", feather_data_9);

drawQuickDrawImage("rect-0-9", crayon_data_1);
drawQuickDrawImage("rect-0-10", crayon_data_2);
drawQuickDrawImage("rect-0-11", crayon_data_3);
drawQuickDrawImage("rect-1-9", crayon_data_4);
drawQuickDrawImage("rect-1-10", crayon_data_5);
drawQuickDrawImage("rect-1-11", crayon_data_6);
drawQuickDrawImage("rect-2-9", crayon_data_7);
drawQuickDrawImage("rect-2-10", crayon_data_8);
drawQuickDrawImage("rect-2-11", crayon_data_9);

drawQuickDrawImage("rect-0-18", matches_data_1);
drawQuickDrawImage("rect-0-19", matches_data_2);
drawQuickDrawImage("rect-0-20", matches_data_3);
drawQuickDrawImage("rect-1-18", matches_data_4);
drawQuickDrawImage("rect-1-19", matches_data_5);
drawQuickDrawImage("rect-1-20", matches_data_6);
drawQuickDrawImage("rect-2-18", matches_data_7);
drawQuickDrawImage("rect-2-19", matches_data_8);
drawQuickDrawImage("rect-2-20", matches_data_9);

drawQuickDrawImage("rect-0-15", nail_data_1);
drawQuickDrawImage("rect-0-16", nail_data_2);
drawQuickDrawImage("rect-0-17", nail_data_3);
drawQuickDrawImage("rect-1-15", nail_data_4);
drawQuickDrawImage("rect-1-16", nail_data_5);
drawQuickDrawImage("rect-1-17", nail_data_6);
drawQuickDrawImage("rect-2-15", nail_data_7);
drawQuickDrawImage("rect-2-16", nail_data_8);
drawQuickDrawImage("rect-2-17", nail_data_9);

drawQuickDrawImage("rect-3-18", cellphone_data_1);
drawQuickDrawImage("rect-3-19", cellphone_data_2);
drawQuickDrawImage("rect-3-20", cellphone_data_3);
drawQuickDrawImage("rect-4-18", cellphone_data_4);
drawQuickDrawImage("rect-4-19", cellphone_data_5);
drawQuickDrawImage("rect-4-20", cellphone_data_6);
drawQuickDrawImage("rect-5-18", cellphone_data_7);
drawQuickDrawImage("rect-5-19", cellphone_data_8);
drawQuickDrawImage("rect-5-20", cellphone_data_9);

drawQuickDrawImage("rect-3-15", calculator_data_1);
drawQuickDrawImage("rect-3-16", calculator_data_2);
drawQuickDrawImage("rect-3-17", calculator_data_3);
drawQuickDrawImage("rect-4-15", calculator_data_4);
drawQuickDrawImage("rect-4-16", calculator_data_5);
drawQuickDrawImage("rect-4-17", calculator_data_6);
drawQuickDrawImage("rect-5-15", calculator_data_7);
drawQuickDrawImage("rect-5-16", calculator_data_8);
drawQuickDrawImage("rect-5-17", calculator_data_9);

drawQuickDrawImage("rect-6-15", calendar_data_1);
drawQuickDrawImage("rect-6-16", calendar_data_2);
drawQuickDrawImage("rect-6-17", calendar_data_3);
drawQuickDrawImage("rect-7-15", calendar_data_4);
drawQuickDrawImage("rect-7-16", calendar_data_5);
drawQuickDrawImage("rect-7-17", calendar_data_6);
drawQuickDrawImage("rect-8-15", calendar_data_7);
drawQuickDrawImage("rect-8-16", calendar_data_8);
drawQuickDrawImage("rect-8-17", calendar_data_9);

drawQuickDrawImage("rect-6-18", spreadsheet_data_1);
drawQuickDrawImage("rect-6-19", spreadsheet_data_2);
drawQuickDrawImage("rect-6-20", spreadsheet_data_3);
drawQuickDrawImage("rect-7-18", spreadsheet_data_4);
drawQuickDrawImage("rect-7-19", spreadsheet_data_5);
drawQuickDrawImage("rect-7-20", spreadsheet_data_6);
drawQuickDrawImage("rect-8-18", spreadsheet_data_7);
drawQuickDrawImage("rect-8-19", spreadsheet_data_8);
drawQuickDrawImage("rect-8-20", spreadsheet_data_9);

function createGroupArray(startRow, startCol, numRows, numCols) {
  const groupArray = [];
  for (let i = startRow; i < startRow + numRows; i++) {
    for (let j = startCol; j < startCol + numCols; j++) {
      groupArray.push(`rect-${i}-${j}`);
    }
  }
  return groupArray;
}

const mugGroup = createGroupArray(0, 0, 3, 3);
const cupGroup = createGroupArray(3, 0, 3, 3);
const coffeecupGroup = createGroupArray(6, 0, 3, 3);

const donutGroup = createGroupArray(0, 3, 3, 3);
const flyingSaucerGroup = createGroupArray(3, 3, 3, 3);
const hatGroup = createGroupArray(6, 3, 3, 3);

const pondGroup = createGroupArray(0, 6, 3, 3);
const riverGroup = createGroupArray(3, 6, 3, 3);
const oceanGroup = createGroupArray(6, 6, 3, 3);

const crayonGroup = createGroupArray(0, 9, 3, 3);
const markerGroup = createGroupArray(3, 9, 3, 3);
const pencilGroup = createGroupArray(6, 9, 3, 3);

const smileyGroup = createGroupArray(0, 12, 3, 3);
const faceGroup = createGroupArray(3, 12, 3, 3);
const monaGroup = createGroupArray(6, 12, 3, 3);

const nailGroup = createGroupArray(0, 15, 3, 3);
const matchesGroup = createGroupArray(0, 18, 3, 3);

const calculatorGroup = createGroupArray(3, 15, 3, 3);
const cellphoneGroup = createGroupArray(3, 18, 3, 3);

const groups = {};
mugGroup.forEach(
  (id) => (groups[id] = mugGroup.concat(cupGroup, coffeecupGroup))
);
cupGroup.forEach(
  (id) => (groups[id] = mugGroup.concat(cupGroup, coffeecupGroup))
);
coffeecupGroup.forEach(
  (id) => (groups[id] = mugGroup.concat(cupGroup, coffeecupGroup))
);

donutGroup.forEach(
  (id) => (groups[id] = donutGroup.concat(flyingSaucerGroup, hatGroup))
);
flyingSaucerGroup.forEach(
  (id) => (groups[id] = donutGroup.concat(flyingSaucerGroup, hatGroup))
);
hatGroup.forEach(
  (id) => (groups[id] = donutGroup.concat(flyingSaucerGroup, hatGroup))
);

pondGroup.forEach(
  (id) => (groups[id] = pondGroup.concat(riverGroup, oceanGroup))
);
riverGroup.forEach(
  (id) => (groups[id] = pondGroup.concat(riverGroup, oceanGroup))
);
oceanGroup.forEach(
  (id) => (groups[id] = pondGroup.concat(riverGroup, oceanGroup))
);

crayonGroup.forEach(
  (id) => (groups[id] = crayonGroup.concat(markerGroup, pencilGroup))
);
markerGroup.forEach(
  (id) => (groups[id] = crayonGroup.concat(markerGroup, pencilGroup))
);
pencilGroup.forEach(
  (id) => (groups[id] = crayonGroup.concat(markerGroup, pencilGroup))
);

smileyGroup.forEach(
  (id) => (groups[id] = smileyGroup.concat(faceGroup, monaGroup))
);
faceGroup.forEach(
  (id) => (groups[id] = smileyGroup.concat(faceGroup, monaGroup))
);
monaGroup.forEach(
  (id) => (groups[id] = smileyGroup.concat(faceGroup, monaGroup))
);

nailGroup.forEach((id) => (groups[id] = smileyGroup.concat(matchesGroup)));
matchesGroup.forEach((id) => (groups[id] = smileyGroup.concat(matchesGroup)));

calculatorGroup.forEach(
  (id) => (groups[id] = calculatorGroup.concat(cellphoneGroup))
);
cellphoneGroup.forEach(
  (id) => (groups[id] = calculatorGroup.concat(cellphoneGroup))
);

let lastHighlightedRectIds = [];

function highlightRectangles(rectIds) {
  d3.selectAll(".highlight-group, .separator-line").remove();
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

  svgShortStories
    .append("rect")
    .attr("x", firstRect.x)
    .attr("y", firstRect.y)
    .attr("width", lastRect.x - firstRect.x + UNITRECTWIDTH)
    .attr("height", lastRect.y - firstRect.y + UNITRECTHEIGHT)
    .attr("class", "highlight-group")
    .attr("stroke", "#ffd43c")
    .attr("stroke-width", 6)
    .attr("fill", "none");

  [3, 6].forEach((row) => {
    svgShortStories
      .append("line")
      .attr("x1", firstRect.x)
      .attr("y1", row * UNITRECTHEIGHT)
      .attr("x2", lastRect.x + UNITRECTWIDTH)
      .attr("y2", row * UNITRECTHEIGHT)
      .attr("stroke", "#ffd43c")
      .attr("stroke-width", 6)
      .attr("class", "separator-line");
  });

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

function highlightTwoGroupRectangles(rectIdsGroup1, rectIdsGroup2) {
  d3.selectAll(".highlight-group, .highlight-line").remove();
  lastHighlightedRectIds.forEach((id) => {
    d3.select(`#${id}`)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "2");
  });

  highlightGroup(rectIdsGroup1, "#ffd43c");
  highlightGroup(rectIdsGroup2, "#ffd43c");

  lastHighlightedRectIds = rectIdsGroup1.concat(rectIdsGroup2);
}

function highlightGroup(rectIds, highlightColor) {
  const firstRect = d3.select(`#${rectIds[0]}`).node().getBBox();
  const lastRect = d3
    .select(`#${rectIds[rectIds.length - 1]}`)
    .node()
    .getBBox();

  svgShortStories
    .append("rect")
    .attr("x", firstRect.x)
    .attr("y", firstRect.y)
    .attr("width", lastRect.x - firstRect.x + UNITRECTWIDTH)
    .attr("height", lastRect.y - firstRect.y + UNITRECTHEIGHT)
    .attr("class", "highlight-group")
    .attr("stroke", highlightColor)
    .attr("stroke-width", 6)
    .attr("fill", "none");
}

function setupRectClickListenersForTwoGroups(group1, group2) {
  const allGroupIds = group1.concat(group2);
  allGroupIds.forEach((id) => {
    d3.select(`#${id}`).on("click", function () {
      highlightTwoGroupRectangles(group1, group2);
    });
  });
}

setupRectClickListenersForTwoGroups(nailGroup, matchesGroup);
setupRectClickListenersForTwoGroups(calculatorGroup, cellphoneGroup);
