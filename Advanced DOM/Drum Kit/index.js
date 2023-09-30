function handleClick() {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
}
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}
