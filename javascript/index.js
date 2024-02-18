const svgSide = d3.select("#svg-side");
svgSide.attr("width", "50%").attr("height", "100%");

const createPath = (stroke) => {
  let d = `M ${stroke[0][0]} ${stroke[1][0]}`;
  for (let i = 1; i < stroke[0].length; i++) {
    d += ` L ${stroke[0][i]} ${stroke[1][i]}`;
  }
  return d;
};

const houseGroup = svgSide
  .append("g")
  .attr("transform", "translate(10, 12) scale(0.5)");

const monalisaGroup = svgSide
  .append("g")
  .attr("transform", "translate(100, 12) scale(0.5)");

const tornadoGroup = svgSide
  .append("g")
  .attr("transform", "translate(190, 12) scale(0.5)");

const beardGroup = svgSide
  .append("g")
  .attr("transform", "translate(10, 180) scale(0.5)");

const cookieGroup = svgSide
  .append("g")
  .attr("transform", "translate(130, 180) scale(0.5)");

const flowerGroup = svgSide
  .append("g")
  .attr("transform", "translate(240, 180) scale(0.5)");

const blackberryGroup = svgSide
  .append("g")
  .attr("transform", "translate(10, 340) scale(0.5)");

const greatWallGroup = svgSide
  .append("g")
  .attr("transform", "translate(150, 340) scale(0.5)");

const seesawGroup = svgSide
  .append("g")
  .attr("transform", "translate(150, 400) scale(0.5)");

const soccerBallGroup = svgSide
  .append("g")
  .attr("transform", "translate(10, 450) scale(0.5)");

const skyscraperGroup = svgSide
  .append("g")
  .attr("transform", "translate(320, 340) scale(0.5)");

const stitchesGroup = svgSide
  .append("g")
  .attr("transform", "translate(150, 500) scale(0.5)");

const teapotGroup = svgSide
  .append("g")
  .attr("transform", "translate(10, 570) scale(0.5)");

const toothGroup = svgSide
  .append("g")
  .attr("transform", "translate(150, 570) scale(0.5)");

const squareGroup = svgSide
  .append("g")
  .attr("transform", "translate(300, 570) scale(0.5)");

const seaTurtleGroup = svgSide
  .append("g")
  .attr("transform", "translate(10, 700) scale(0.5)");

const snowmanGroup = svgSide
  .append("g")
  .attr("transform", "translate(140, 720) scale(0.5)");

const eiffelTowerGroup = svgSide
  .append("g")
  .attr("transform", "translate(240, 720) scale(0.5)");

const stethoscopeGroup = svgSide
  .append("g")
  .attr("transform", "translate(350, 720) scale(0.5)");

const rifleGroup = svgSide
  .append("g")
  .attr("transform", "translate(350, 800) scale(0.5)");

const fanGroup = svgSide
  .append("g")
  .attr("transform", "translate(490, 720) scale(0.5)");

const totalDuration = 750;

const drawStroke = (data, group, index) => {
  if (index < data.length) {
    const stroke = data[index];

    const path = group
      .append("path")
      .attr("d", createPath(stroke))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "2");

    const totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(totalDuration / data.length)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .on("end", () => {
        setTimeout(() => {
          drawStroke(data, group, index + 1, totalDuration);
        }, (totalDuration * 3) / data.length);
      });
  }
};

setTimeout(() => drawStroke(0), 500);

const appendRectToGroup = (group, tooltip) => {
  setTimeout(() => {
    const bbox = group.node().getBBox();
    const rect = group
      .append("rect")
      .attr("id", tooltip)
      .attr("x", bbox.x)
      .attr("y", bbox.y)
      .attr("width", bbox.width)
      .attr("height", bbox.height)
      .attr("fill", "#808080")
      .attr("visibility", "hidden")
      .attr("opacity", 0.1);

    const line = group
      .append("line")
      .attr("x1", bbox.x)
      .attr("y1", bbox.y + bbox.height)
      .attr("x2", bbox.x + bbox.width)
      .attr("y2", bbox.y + bbox.height)
      .attr("stroke", "#ffd43c")
      .attr("stroke-width", 6)
      .style("visibility", "hidden");

    const tooltipText = group
      .append("text")
      .attr("x", bbox.x + bbox.width / 2)
      .attr("y", bbox.y + bbox.height + 30)
      .text(tooltip)
      .attr("font-size", "1.5rem")
      .attr("font-family", "'Permanent Marker', cursive")
      .attr("text-anchor", "middle")
      .style("visibility", "hidden");

    group.on("mouseover", (e, d) => {
      line.style("visibility", "visible");
      tooltipText.style("visibility", "visible");
      rect.style("visibility", "visible");
    });

    group.on("mouseout", () => {
      line.style("visibility", "hidden");
      tooltipText.style("visibility", "hidden");
      rect.style("visibility", "hidden");
    });
  }, 3500);
};

drawStroke(houseData, houseGroup, 0);
drawStroke(monaLisaData, monalisaGroup, 0);
drawStroke(tornadoData, tornadoGroup, 0);
drawStroke(beardData, beardGroup, 0);
drawStroke(cookieData, cookieGroup, 0);
drawStroke(flowerData, flowerGroup, 0);
drawStroke(blackberryData, blackberryGroup, 0);
drawStroke(greatWallData, greatWallGroup, 0);
drawStroke(seesawData, seesawGroup, 0);
drawStroke(soccerBallData, soccerBallGroup, 0);
drawStroke(skyscraperData, skyscraperGroup, 0);
drawStroke(stitchesData, stitchesGroup, 0);
drawStroke(teapotData, teapotGroup, 0);
drawStroke(toothData, toothGroup, 0);
drawStroke(squareData, squareGroup, 0);
drawStroke(seaTurtleData, seaTurtleGroup, 0);
drawStroke(snowmanData, snowmanGroup, 0);
drawStroke(eiffelTowerData, eiffelTowerGroup, 0);
drawStroke(stethoscopeData, stethoscopeGroup, 0);
drawStroke(rifleData, rifleGroup, 0);
drawStroke(fanData, fanGroup, 0);

appendRectToGroup(houseGroup, "House");
appendRectToGroup(monalisaGroup, "The Mona Lisa");
appendRectToGroup(tornadoGroup, "Tornado");
appendRectToGroup(beardGroup, "Beard");
appendRectToGroup(cookieGroup, "Cookie");
appendRectToGroup(flowerGroup, "Flower");
appendRectToGroup(blackberryGroup, "Blackberry");
appendRectToGroup(greatWallGroup, "Great Wall");
appendRectToGroup(seesawGroup, "Seesaw");
appendRectToGroup(soccerBallGroup, "Soccer Ball");
appendRectToGroup(skyscraperGroup, "Skyscraper");
appendRectToGroup(stitchesGroup, "Stitches");
appendRectToGroup(teapotGroup, "Teapot");
appendRectToGroup(toothGroup, "Tooth");
appendRectToGroup(squareGroup, "Square");
appendRectToGroup(seaTurtleGroup, "Sea Turtle");
appendRectToGroup(snowmanGroup, "Snowman");
appendRectToGroup(eiffelTowerGroup, "Eiffel Tower");
appendRectToGroup(stethoscopeGroup, "Stethoscope");
appendRectToGroup(rifleGroup, "Rifle");
appendRectToGroup(fanGroup, "Fan");
