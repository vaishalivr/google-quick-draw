const [UNITLEGENDRECTWIDTH, UNITLEGENDRECTHEIGHT] = [30, 30];
const LEGENDRECTCOUNT = 40;
const RECTCOUNTDATA = d3.range(LEGENDRECTCOUNT);
const RECTSPERROW = LEGENDRECTCOUNT;
const SVGWIDTH = 1200;
const imagePaths = {
  "rect-1": "media/prelim_mastershowcase_tooltips/dishwasher_drawings.png",
  "rect-2": "media/prelim_mastershowcase_tooltips/blackberry_drawings.png",
  "rect-3": "media/prelim_mastershowcase_tooltips/cookie_drawings.png",
  "rect-4": "media/prelim_mastershowcase_tooltips/fan_drawings.png",
  "rect-5": "media/prelim_mastershowcase_tooltips/mona_drawings.png",
  "rect-6": "media/prelim_mastershowcase_tooltips/greatWall_drawings.png",
};

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

const countryLabels = [
  { text: "United States" },
  { text: "Germany" },
  { text: "Russia" },
  { text: "Malta" },
  { text: "Luxembourg" },
  { text: "Norway" },
  { text: "Peru" },
  { text: "Brazil" },
  { text: "Egypt" },
  { text: "Madagascar" },
  { text: "Kenya" },
  { text: "Senegal" },
  { text: "Fiji" },
  { text: "New Zealand" },
  { text: "Australia" },
  { text: "India" },
  { text: "Qatar" },
  { text: "Vietnam" },
  { text: "Thailand" },
  { text: "Saudi Arabia" },
  { text: "Korea" },
];

const svgMaster = d3
  .select("#master-showcase")
  .append("svg")
  .attr("width", SVGWIDTH + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const imageDisplay = svgMaster
  .append("image")
  .attr("width", 1000)
  .attr("height", 1000)
  .attr("x", 0)
  .attr("y", 0)
  .style("visibility", "hidden");

let selectedRectCategories = null;
let selectedRectCountries = null;

svgMaster
  .selectAll("g.categoryGroup")
  .data(RECTCOUNTDATA)
  .enter()
  .append("g")
  .attr(
    "transform",
    (d, i) =>
      `translate(${(i % RECTSPERROW) * UNITLEGENDRECTWIDTH}, ${
        Math.floor(i / RECTSPERROW) * UNITLEGENDRECTHEIGHT + 60
      })`
  )
  .each(function (d, i) {
    d3.select(this)
      .append("rect")
      .attr("width", UNITLEGENDRECTWIDTH)
      .attr("height", UNITLEGENDRECTHEIGHT)
      .attr("fill", "white")
      .attr("stroke", "#808080")
      .attr("id", (d) => "rect-" + (d + 1))
      .on("click", function () {
        if (selectedRectCategories) {
          selectedRectCategories.attr("fill", "white");
        }

        d3.select(this).attr("fill", "#808080");
        selectedRectCategories = d3.select(this);

        if (imagePaths[this.id]) {
          imageDisplay.attr("href", null);
          imageDisplay
            .attr("href", imagePaths[this.id])
            .attr("x", 200)
            .attr("y", 240)
            .style("visibility", "visible");
        }
      });

    d3.select(this)
      .append("text")
      .attr("x", UNITLEGENDRECTWIDTH / 2)
      .attr("y", 15)
      .text(categoryLabels[i].text)
      .attr("text-anchor", "start")
      .attr("transform", "rotate(-90)");
  });

// appending rect for Countries
const totalWidthTopRow = RECTSPERROW * UNITLEGENDRECTWIDTH;
const totalWidthBottomRow = 20 * UNITLEGENDRECTWIDTH;
const xOffset = (totalWidthTopRow - totalWidthBottomRow) / 2;

svgMaster
  .selectAll("g.countryGroup")
  .data(d3.range(20))
  .enter()
  .append("g")
  .attr(
    "transform",
    (d, i) =>
      `translate(${xOffset + i * UNITLEGENDRECTWIDTH}, ${
        Math.floor(i / 20) * UNITLEGENDRECTHEIGHT + 660
      })`
  )
  .each(function (d, i) {
    d3.select(this)
      .append("rect")
      .attr("width", UNITLEGENDRECTWIDTH)
      .attr("height", UNITLEGENDRECTHEIGHT)
      .attr("fill", "white")
      .attr("stroke", "#808080")
      .on("click", function () {
        if (selectedRectCountries) {
          selectedRectCountries.attr("fill", "white");
        }
        selectedRectCountries = d3.select(this);
        selectedRectCountries.attr("fill", "#808080");
      });

    d3.select(this)
      .append("text")
      .attr("x", UNITLEGENDRECTWIDTH / 2)
      .attr("y", 40)
      .text(countryLabels[i].text)
      .attr("text-anchor", "end")
      .attr("transform", `rotate(-90, ${UNITLEGENDRECTWIDTH / 2}, 40)`);
  });
