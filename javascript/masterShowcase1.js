const countries = Object.keys(
  mastershowcase_data["dishwasher"]["unrecognized"]
);
console.log(countries);

//////////CODE//////////
const mastershowcaseSvgObj = { width: window.innerWidth - 10, height: 980 };

const categoryObj = {
  count: Object.keys(mastershowcase_data).length,
  unitRectWidth: 30,
  unitRectHeight: 30,
  nameSpace: 100, //from top of svg
  imagesDrawn: false,
  rectBottom: function () {
    return this.nameSpace + this.unitRectHeight;
  },
  rectLeft: function () {
    return (
      mastershowcaseSvgObj.width / 2 - (this.count * this.unitRectWidth) / 2
    );
  },
};

const recognizedDisplayObj = {
  unitWidth: 60,
  unitHeight: 60,
  numDoodles: 24,
  totalWidth: function () {
    return this.unitWidth * this.numDoodles;
  },
};

const gridObj = {
  gridRows: countries.length,
  gridCols: 24,
  unitWidth: 60,
  unitHeight: 60,
  countries: countries,
};
gridObj.xOffset =
  (mastershowcaseSvgObj.width - gridObj.gridCols * gridObj.unitWidth) / 2;
gridObj.yOffset =
  (mastershowcaseSvgObj.height - gridObj.gridRows * gridObj.unitHeight) / 2;

const drawImageInRect = (rectId, data) => {
  //console.log(data["drawing"]);
  //console.log(rectId);
  const rect = d3.select(`#${rectId}`);
  rect.selectAll("*").remove(); //TO DO : check
  const rectX = +rect.attr("x");
  const rectY = +rect.attr("y");
  const rectWidth = gridObj.unitWidth * 0.8;
  const rectHeight = gridObj.unitWidth * 0.8;
  const marginX = (gridObj.unitWidth - rectWidth) / 2;
  const marginY = (gridObj.unitWidth - rectHeight) / 2;

  const group = gridGroup
    .append("g")
    .attr("transform", `translate(${rectX + marginX}, ${rectY + marginY})`);

  const scaleX = d3.scaleLinear().domain([0, 255]).range([0, rectWidth]);
  const scaleY = d3.scaleLinear().domain([0, 255]).range([0, rectHeight]);

  data["drawing"].forEach((stroke) => {
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

let activeLine = null;

//const canadaRects = Array.from({ length: 24 }, (_, i) => `rect0${i}`);
//const polandRects = Array.from({ length: 24 }, (_, i) => `rect1${i}`);

const mastershowcaseSvg = d3
  .select("#master-showcase")
  .append("svg")
  .attr("width", mastershowcaseSvgObj.width)
  .attr("height", mastershowcaseSvgObj.height);

const categoryRectGroup = mastershowcaseSvg
  .append("g")
  .attr("transform", function () {
    return `translate(${categoryObj.rectLeft()}, ${categoryObj.nameSpace})`;
  });

const recognizedDisplayGroup = mastershowcaseSvg
  .append("g")
  .attr("transform", function () {
    return `translate(${
      (mastershowcaseSvgObj.width - recognizedDisplayObj.totalWidth()) / 2
    }, ${categoryObj.nameSpace})`;
  });

const gridGroup = mastershowcaseSvg
  .append("g")
  .attr(
    "transform",
    `translate(${gridObj.xOffset}, ${gridObj.yOffset + 105 + 15})`
  );

for (let row = 0; row < gridObj.gridRows; row++) {
  gridGroup
    .append("text")
    .text(countries[row])
    .attr("text-anchor", "end")
    .attr("x", -30)
    .attr("y", row * gridObj.unitWidth + gridObj.unitHeight / 2);

  for (let col = 0; col < gridObj.gridCols; col++) {
    gridGroup
      .append("rect")
      .attr("x", col * gridObj.unitWidth)
      .attr("y", row * gridObj.unitHeight)
      .attr("width", gridObj.unitWidth)
      .attr("height", gridObj.unitHeight)
      .attr("fill", "white")
      // .attr("stroke", "black")
      .attr("id", `rect${row}-${col}`)
      // .on("click", function () {
      //   console.log(this.id);
      // })
      .on("mouseover", function () {
        console.log("this");
        d3.select(this)
          .attr("stroke", "#ffd43c")
          .attr("rx", 6)
          .attr("ry", 6)
          .attr("stroke-width", "3");
      })
      .on("mouseout", function () {
        d3.select(this)
          // .transition()
          // .duration(2100)
          .attr("stroke", "none")
          .attr("stroke-width", "0");
      });
  }
}

for (let i = 0; i < categoryObj.count; i++) {
  const textX = i * categoryObj.unitRectWidth + categoryObj.unitRectWidth / 2;
  const text = Object.keys(mastershowcase_data)[i];

  categoryRectGroup
    .append("text")
    .attr("x", textX)
    .attr("y", 0)
    .text(text)
    .attr("id", "rect-" + text)
    .attr("dominant-baseline", "hanging")
    .attr("transform", `rotate(-90, ${textX}, 0)`);

  categoryRectGroup
    .append("rect")
    .attr("x", i * categoryObj.unitRectWidth)
    .attr("y", 0)
    .attr("width", categoryObj.unitRectWidth) // -3 if padding needed
    .attr("height", categoryObj.unitRectHeight) // -3 if padding needed
    .attr("stroke", "black")
    .attr("fill", "white")
    .attr("id", "rect-" + text)
    .on("click", function () {
      //console.log("here");
      const category = this.id.substring(5);
      if (!categoryObj.imagesDrawn) {
        console.log(category);
        for (let i = 0; i < countries.length; i++) {
          //console.log(countries[i]);
          for (
            let j = 0;
            j <
            mastershowcase_data[category]["unrecognized"][countries[i]].length;
            j++
          ) {
            drawImageInRect(
              `rect${i}-${j}`,
              mastershowcase_data[category]["unrecognized"][countries[i]][j]
            );
          }
        }
        categoryObj.imagesDrawn = true;
      }

      if (activeLine) {
        activeLine.remove();
      }

      const lineX = i * categoryObj.unitRectWidth;
      activeLine = mastershowcaseSvg
        .append("line")
        .attr("x1", categoryObj.rectLeft() + lineX)
        .attr("y1", categoryObj.rectBottom() + 9) // extra margin
        .attr("x2", categoryObj.rectLeft() + lineX + categoryObj.unitRectWidth)
        .attr("y2", categoryObj.rectBottom() + 9)
        .attr("class", "highlighted-line")
        .style("stroke", "black")
        .style("stroke-width", 2);
    });
}

for (let i = 0; i < recognizedDisplayObj.numDoodles; i++) {
  recognizedDisplayGroup
    .append("rect")
    .attr("x", i * recognizedDisplayObj.unitWidth)
    .attr("y", recognizedDisplayObj.unitWidth) //down by 30
    .attr("width", recognizedDisplayObj.unitWidth)
    .attr("height", recognizedDisplayObj.unitHeight)
    .attr("stroke", "black")
    .attr("fill", "white")
    .attr("id", "recgRect-" + (i + 1)) //adding 1
    .on("click", function () {
      console.log(this.id);
    });
}

// CONSTRUCTION LINE //
// const centerLineX = mastershowcaseSvgObj.width / 2;
// mastershowcaseSvg
//   .append("line")
//   .attr("x1", centerLineX)
//   .attr("y1", 0)
//   .attr("x2", centerLineX)
//   .attr("y2", mastershowcaseSvgObj.height)
//   .style("stroke", "black")
//   .style("stroke-width", 2);
