const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const iStatus = document.querySelector("h2");

function addRemove() {
  add.addEventListener("click", function () {
    console.log("clicked");
    iStatus.textContent = "Friends";
    iStatus.style.color = "green";
  });
  remove.addEventListener("click", function () {
    console.log("clicked");
    iStatus.textContent = "Stranger";
    iStatus.style.color = "red";
  });
}
addRemove();
