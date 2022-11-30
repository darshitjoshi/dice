var r1 = Math.random();
r1 = r1 * 6 + 1;
r1 = Math.floor(r1);

var rI1 = "images/dice" + r1 + ".png";
document.querySelector(".di1").setAttribute("src", rI1);

var r2 = Math.random();
r2 = r2 * 6 + 1;
r2 = Math.floor(r2);

var rI2 = "images/dice" + r2 + ".png";
document.querySelector(".di2").setAttribute("src", rI2);

if (r1 > r2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS";
} else if (r1 < r2) {
  document.querySelector("h1").innerHTML = "Player 2 WINS";
} else {
  document.querySelector("h1").innerHTML = "Its a TIE ( Refresh again)";
}
