var randomNumber1 = Math.random();

randomNumber1 = randomNumber1 * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

var sourceUrl1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", sourceUrl1);

var randomNumber2 = Math.random();

randomNumber2 = randomNumber2 * 6;

randomNumber2 = Math.floor(randomNumber2) + 1;

var sourceUrl2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img2").setAttribute("src", sourceUrl2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins🚩";
} else {
  document.querySelector("h1").textContent = "Draw!🏁";
}
