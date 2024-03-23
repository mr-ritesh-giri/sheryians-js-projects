let elem = document.querySelectorAll(".elem");
let elemImg = document.querySelectorAll(".elem img");

elem.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x - 100 + "px";
    val.childNodes[3].style.top = dets.y - 100 + "px";
  });
});
