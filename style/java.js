"use strict";
document.querySelector("#guess").textContent;
document.querySelector("#score").textContent;
document.querySelector("#highscore").textContent;
document.querySelector(".question-mark").textContent;
document.querySelector(".form-number").value;
document.querySelector("#check-btn").addEventListener("click", function () {
  let numberValue = Number(document.querySelector(".form-number").value);
  if (numberValue < 20 && numberValue !== 0 && numberValue !== null) {
    console.log(numberValue);
  } else {
    document.querySelector("#guess").textContent =
      "Please insert a valid number!";
  }
});
