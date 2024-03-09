const NUMRECTSDOWN = 9;
const NUMRECTSACROSS = 18;
const UNITRECTWIDTH = 90;
const UNITRECTHEIGHT = 90;

let lastHighlightedRectIds = [];

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

function highlightRectangles(rectIds) {
  lastHighlightedRectIds.forEach((id) => {
    d3.select(`#${id}`).attr("stroke", "black").attr("stroke-width", 1);
  });
  rectIds.forEach((id) => {
    d3.select(`#${id}`).attr("stroke", "#ffd43c").attr("stroke-width", 6);
  });
  lastHighlightedRectIds = rectIds;
}

function addTextWithManualBreaks(rectId, text, targetRectIds) {
  const lines = text.split("-");
  const idParts = rectId.split("-");
  const row = parseInt(idParts[1], 10);
  const column = parseInt(idParts[2], 10);

  const textX = column * UNITRECTWIDTH + UNITRECTWIDTH / 2;
  const blockHeight = lines.length * 12;
  let textYStart =
    row * UNITRECTHEIGHT + (UNITRECTHEIGHT - blockHeight) / 2 + 6;

  lines.forEach((line, index) => {
    const textElement = svgShortStories.append("text");
    textElement
      .attr("x", textX)
      .attr("y", textYStart + index * 12)
      .text(line.trim())
      .attr("font-size", "15px")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "hanging")
      .attr("id", `text-line-${index}-for-${rectId}`);

    textElement.on("click", function () {
      highlightRectangles(targetRectIds);
    });
  });

  d3.select(`#${rectId}`).on("click", function () {
    highlightRectangles(targetRectIds);
  });
}

addTextWithManualBreaks("rect-1-16", "Different - kinds of - Snowflakes", [
  "rect-0-16",
  "rect-0-17",
  "rect-1-17",
  "rect-2-17",
]);

addTextWithManualBreaks(
  "rect-3-15",
  "Pendent vs. - Pearls kind of - Necklaces",
  ["rect-2-14", "rect-2-15", "rect-2-16", "rect-3-16", "rect-3-17"]
);

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

drawQuickDrawImage("rect-0-16", snowflake_data_1);
drawQuickDrawImage("rect-0-17", snowflake_data_2);
drawQuickDrawImage("rect-1-17", snowflake_data_3);
drawQuickDrawImage("rect-2-17", snowflake_data_4);

drawQuickDrawImage("rect-2-14", necklace_data_1);
drawQuickDrawImage("rect-2-15", necklace_data_2);
drawQuickDrawImage("rect-2-16", necklace_data_3);
drawQuickDrawImage("rect-3-16", necklace_data_4);
drawQuickDrawImage("rect-3-17", necklace_data_5);
