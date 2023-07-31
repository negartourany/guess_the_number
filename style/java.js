"use strict";
let numb = Math.trunc(Math.random() * 20) + 1;
document.querySelector("#guess").textContent;
document.querySelector("#score").textContent;
document.querySelector("#highscore").textContent;
document.querySelector(".question-mark").textContent;
document.querySelector(".form-number").value;
document.querySelector("#again-btn").addEventListener("click", function () {
  score = 20;
  document.querySelector("#score").textContent = 20;
  numb = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".question-mark").textContent = "?";
  document.querySelector(".form-number").value = null;
  document.querySelector("#guess").textContent = "Start guessing...";
  document.querySelector("#body").style.backgroundColor = "#d9c5b2";
  document.querySelector("#square").style.width = "100px";
});
let score = 20;
let highscore = 0;
document.querySelector("#check-btn").addEventListener("click", function () {
  let numberValue = Number(document.querySelector(".form-number").value);
  if (numberValue <= 20 && numberValue !== 0 && numberValue !== null) {
    if (numberValue === numb) {
      document.querySelector("#guess").textContent = "Your guess is correct!🏆";
      document.querySelector("#body").style.backgroundColor = "#adff2f";
      document.querySelector("#square").style.width = "13rem";
      document.querySelector(".question-mark").textContent = numb;
      if (highscore < score) {
        highscore = score;
        document.querySelector("#highscore").textContent = highscore;
      }
    } else if (numberValue > numb) {
      if (score > 0) {
        document.querySelector("#guess").textContent = "It's too high...";
        score = score - 1;
        document.querySelector("#score").textContent = score;
      } else {
        document.querySelector("#guess").textContent = "You're a loser!";
      }
    } else if (numberValue < numb) {
      if (score > 0) {
        document.querySelector("#guess").textContent = "It's too low...";
        score = score - 1;
        document.querySelector("#score").textContent = score;
      } else {
        document.querySelector("#guess").textContent = "You're a loser!";
      }
    }
  } else {
    document.querySelector("#guess").textContent =
      "Please insert a valid number!";
  }
});
