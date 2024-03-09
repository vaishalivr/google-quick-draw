const [UNITLEGENDRECTWIDTH, UNITLEGENDRECTHEIGHT] = [30, 30];
const [UNITLEGENDRECTWIDTHGRID, UNITLEGENDRECTHEIGHTGRID] = [40, 40];
const LEGENDRECTCOUNT = 40;
const RECTCOUNTDATA = d3.range(LEGENDRECTCOUNT);
const RECTSPERROW = LEGENDRECTCOUNT;
const SVGWIDTH = 1500; //1200 original

const totalWidthTopRow = RECTSPERROW * UNITLEGENDRECTWIDTH;
const totalWidthBottomRow = 20 * UNITLEGENDRECTWIDTH;
const totalRectsWidth = LEGENDRECTCOUNT * UNITLEGENDRECTWIDTH;
const xOffset = (SVGWIDTH - totalRectsWidth) / 2;

const categoryRectBottomY = 45;
let lastClickedCountryRect = null;
let lastClickedCategoryRect = null;

function updateCountryRects(countries) {
  svgMaster.selectAll(".country-rect").remove();
  svgMaster.selectAll(".country-text").remove();

  const countryRectY = categoryRectBottomY + UNITLEGENDRECTHEIGHT + 600;

  svgMaster
    .selectAll(".country-rect")
    .data(countries)
    .enter()
    .append("rect")
    .attr("class", "country-rect")
    .attr("width", UNITLEGENDRECTWIDTH)
    .attr("height", UNITLEGENDRECTHEIGHT)
    .attr("x", (d, i) => i * UNITLEGENDRECTWIDTH)
    .attr("y", countryRectY)
    .attr("fill", "white")
    .attr("stroke", "black")
    .on("click", function (event, d) {
      if (lastClickedCountryRect) {
        lastClickedCountryRect.attr("fill", "white");
      }
      d3.select(this).attr("fill", "#808080");
      lastClickedCountryRect = d3.select(this);
    });

  svgMaster
    .selectAll(".country-text")
    .data(countries)
    .enter()
    .append("text")
    .attr("class", "country-text")
    .attr("x", (d, i) => (i + 0.5) * UNITLEGENDRECTWIDTH)
    .attr("y", countryRectY + UNITLEGENDRECTHEIGHT + 5)
    .attr("text-anchor", "end")
    .attr(
      "transform",
      (d, i) =>
        `rotate(-90, ${(i + 0.5) * UNITLEGENDRECTWIDTH}, ${
          countryRectY + UNITLEGENDRECTHEIGHT + 5
        })`
    )
    .attr("font-size", "10px")
    .text((d) => d);
}

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

svgMaster
  .selectAll("rect")
  .data(categoryLabels)
  .enter()
  .append("rect")
  .attr("id", (d) => `rect-${d.text.replace(/\s+/g, "-").toLowerCase()}`)
  .attr("width", UNITLEGENDRECTWIDTH)
  .attr("height", UNITLEGENDRECTHEIGHT)
  .attr("x", (d, i) => xOffset + i * UNITLEGENDRECTWIDTH)
  .attr("y", categoryRectBottomY)
  .attr("fill", "white")
  .attr("stroke", "black")
  .on("click", function (event, d) {
    console.log(this.id);
    if (lastClickedCategoryRect) {
      lastClickedCategoryRect.attr("fill", "white");
    }
    d3.select(this).attr("fill", "#808080");
    lastClickedCategoryRect = d3.select(this);

    const category = this.id.substring(5); // Remove 'rect-' prefix
    const countryData = mastershowcase_data[category]
      ? Object.keys(mastershowcase_data[category])
      : [];
    updateCountryRects(countryData);
  });
// This offset is used to center the rectangles, use it to center the labels as well.
const xOffsetLabels =
  (SVGWIDTH - categoryLabels.length * UNITLEGENDRECTWIDTH) / 2;
svgMaster
  .selectAll("text")
  .data(categoryLabels)
  .enter()
  .append("text")
  .attr(
    "x",
    (d, i) => xOffsetLabels + i * UNITLEGENDRECTWIDTH + UNITLEGENDRECTWIDTH / 2
  )
  .attr("y", categoryRectBottomY + UNITLEGENDRECTHEIGHT + 15) // Adjust the Y position if necessary
  .attr("text-anchor", "end")
  .attr(
    "transform",
    (d, i) =>
      `rotate(-90, ${
        xOffsetLabels + i * UNITLEGENDRECTWIDTH + UNITLEGENDRECTWIDTH / 2
      }, ${categoryRectBottomY + UNITLEGENDRECTHEIGHT + 15})`
  )
  .text((d) => d.text)
  .attr("font-size", "10px")
  .attr("fill", "black");

function createGrid() {
  const gridData = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < RECTSPERROW; col++) {
      gridData.push({
        id: `rect-${row * RECTSPERROW + col}`,
        x: col * UNITLEGENDRECTWIDTHGRID,
        y: row * UNITLEGENDRECTHEIGHTGRID + 150,
      });
    }
  }

  svgMaster
    .selectAll(".unit-legend-rect")
    .data(gridData, (d) => d.id)
    .join((enter) =>
      enter
        .append("rect")
        .attr("class", "unit-legend-rect")
        .attr("id", (d) => d.id)
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .attr("width", UNITLEGENDRECTWIDTHGRID)
        .attr("height", UNITLEGENDRECTHEIGHTGRID)
        .attr("fill", "white")
        .attr("stroke", "black")
    );
}

createGrid();
