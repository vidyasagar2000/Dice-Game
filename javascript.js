var player1 = Math.random() * 6;
player1 = Math.floor(player1) + 1;

var player2 = Math.random() * 6;
player2 = Math.floor(player2) + 1;

if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 Wins !";
} else if (player1 < player2) {
  document.querySelector("h1").textContent = "Player 2 Wins !";
} else {
  document.querySelector("h1").textContent = "Draw";
}

var num1 = "images/dice" + player1 + ".png";
var num2 = "images/dice" + player2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , num1);
document.querySelectorAll("img")[1].setAttribute("src" , num2);




