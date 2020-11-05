"use strict";

let SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(SecretNumber);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === SecretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess != SecretNumber) {
    if (score > 1) {
      if (guess > 20) {
        document.querySelector(".message").textContent =
          "Enter number between 1 and 20";
      } else {
        if (score > 1) {
          document.querySelector(".message").textContent =
            guess > SecretNumber ? "Too High" : "Too Low";
          score--;
          document.querySelector(".score").textContent = score;
        }
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
    score=20;
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(SecretNumber);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
