let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");
let pl1Display = document.getElementById("pl1Display");
let pl2Display = document.getElementById("pl2Display");
let resetBtn = document.getElementById("reset");

let pl1Score = 0;
let pl2Score = 0;
let winningScore = 5;
let isGameOver = false;

pl1.addEventListener("click", () => {
  if (!isGameOver) {
    pl1Score += 1;
    if (pl1Score === winningScore) {
      isGameOver = true;
    }
    pl1Display.textContent = pl1Score;
  }
});

pl2.addEventListener("click", () => {
  if (!isGameOver) {
    pl2Score += 1;
    if (pl2Score === winningScore) {
      isGameOver = true;
    }
    pl2Display.textContent = pl2Score;
  }
});

function resetButton() {
  resetBtn.reset();
}
