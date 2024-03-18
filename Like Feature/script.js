let container = document.querySelector(".container");
let like = document.querySelector(".like");
let likeBtn = document.querySelector(".like-btn");

function likeFeature() {
  container.addEventListener("dblclick", function () {
    like.style.transform = "translate(-50%, -50%) scale(1)";
    likeBtn.style.color = "red";

    setTimeout(function () {
      like.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1500);
  });
}
likeFeature();

function singleLike() {
  likeBtn.addEventListener("click", function () {
    like.style.transform = "translate(-50%, -50%) scale(1)";
    likeBtn.style.color = "red";

    setTimeout(function () {
      like.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1500);
  });
}
singleLike();
