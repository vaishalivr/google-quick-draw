window.onscroll = function () {
  const targetElement = document.getElementById("one");
  const targetPosition = targetElement.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 4;

  const tornadoImage = document.getElementById("tornadoImage");
  const houseImage = document.getElementById("houseImage");

  tornadoImage.style.transform = "scale(0.18)";
  houseImage.style.transform = "scale(0.18)";

  const fan = document.getElementById("fan");

  if (targetPosition < screenPosition) {
    document.getElementById("fan").style.display = "block";

    setTimeout(function () {
      fan.style.opacity = 1;
    }, 100);

    document.getElementById("section-one").classList.add("show");
    document.getElementById("section-one").classList.remove("hide");

    document.getElementById("section-two").classList.add("show");
    document.getElementById("section-two").classList.remove("hide");

    tornadoImage.style.display = "inline-block";
    houseImage.style.display = "inline-block";
  } else {
    setTimeout(function () {
      fan.style.opacity = 0;
    }, 100);
    document.getElementById("section-one").classList.remove("show");
    document.getElementById("section-one").classList.add("hide");

    document.getElementById("section-two").classList.remove("show");
    document.getElementById("section-two").classList.add("hide");
    tornadoImage.style.display = "none";
    houseImage.style.display = "none";
  }

  // const targetElement2 = document.getElementById("master-showcase");
  // const targetPosition2 = targetElement2.getBoundingClientRect().bottom;
  // //console.log(targetPosition2);
  // const screenPosition2 = window.innerHeight;
  // //console.log(screenPosition2);
  // if (targetPosition2 <= screenPosition2) {
  //   console.log("we are here");
  //   const brushStroke = document.getElementById("brushStroke");
  //   brushStroke.style.display = "block";
  // }
};
