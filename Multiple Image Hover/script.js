let elem = document.querySelectorAll(".elem");
let elemImg = document.querySelector(".elem img");

elem.forEach(function (val) {
  val.addEventListener("mouseenter", function (dets) {
    elemImg.style.left = dets.x + "px";
    elemImg.style.top = dets.y + "px";
  });
  val.addEventListener("mouseleave", function () {
    // console.log("Leave");
  });
});
