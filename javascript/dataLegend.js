var button = document.getElementById("seeDataButton");
var svg = d3.select("#howToReadData");
var g = svg.append("g");

const sampleData = {
  word: "house",
  countrycode: "US",
  timestamp: "2017-03-11 19:09:26.08877 UTC",
  recognized: true,
  key_id: "5054419760578560",
  drawing: [
    [
      [9, 9, 13, 19, 23, 41, 62, 129, 145, 164, 166, 161, 141, 132, 0],
      [
        108, 212, 239, 252, 255, 255, 253, 236, 231, 220, 189, 164, 100, 85,
        108,
      ],
    ],
    [
      [3, 3, 14, 44, 63, 75, 100, 135],
      [107, 92, 68, 22, 1, 0, 16, 72],
    ],
    [
      [27, 22, 25, 37, 60, 65, 63, 22],
      [157, 162, 203, 210, 210, 203, 148, 148],
    ],
    [
      [13, 49, 74],
      [185, 187, 184],
    ],
    [
      [38, 42],
      [156, 212],
    ],
  ],
};

button.addEventListener("click", function () {
  let delay = 0;
  const segmentDuration = 600;
  const pauseDuration = 100;

  sampleData.drawing.forEach((stroke) => {
    stroke[0].forEach((_, index) => {
      if (index < stroke[0].length - 1) {
        var startPoint = [stroke[0][index], stroke[1][index]];
        var endPoint = [stroke[0][index + 1], stroke[1][index + 1]];

        var startText = g
          .append("text")
          .attr("x", startPoint[0] + 5)
          .attr("y", startPoint[1] + 5)
          .text(`(${startPoint[0]}, ${startPoint[1]})`)
          .attr("font-size", "10px")
          .attr("opacity", 0);

        var endText = g
          .append("text")
          .attr("x", endPoint[0] + 5)
          .attr("y", endPoint[1] + 5)
          .text(`(${endPoint[0]}, ${endPoint[1]})`)
          .attr("font-size", "10px")
          .attr("opacity", 0);

        var line = d3
          .line()
          .x(function (d) {
            return d[0];
          })
          .y(function (d) {
            return d[1];
          });

        g.append("path")
          .attr("d", line([startPoint, endPoint]))
          .attr("stroke", "black")
          .attr("stroke-width", 2)
          .attr("fill", "none")
          .attr("stroke-linecap", "round")
          .attr("stroke-dasharray", 1000)
          .attr("stroke-dashoffset", 1000)
          .transition()
          .delay(delay)
          .duration(segmentDuration)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
          .on("start", function () {
            startText.attr("opacity", 1);
            endText.attr("opacity", 1);
          })
          .on("end", function () {
            startText.transition().duration(pauseDuration).attr("opacity", 0);
            endText.transition().duration(pauseDuration).attr("opacity", 0);
          });

        delay += segmentDuration + pauseDuration;
      }
    });
  });
});
