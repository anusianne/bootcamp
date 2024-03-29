let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");
let pl1Display = document.getElementById("pl1Display");
let pl2Display = document.getElementById("pl2Display");
let resetBtn = document.getElementById("reset");
let scoreSelect = document.getElementById("scoreSelect");

let pl1Score = 0;
let pl2Score = 0;
let winningScore = 5;
let isGameOver = false;

pl1.addEventListener("click", () => {
  if (!isGameOver) {
    pl1Score += 1;
    if (pl1Score === winningScore) {
      isGameOver = true;
      pl1Display.classList.add("winner");
      pl2Display.classList.add("loser");
      pl1.disabled = true;
      pl2.disabled = true;
    }
    pl1Display.textContent = pl1Score;
  }
});
pl2.addEventListener("click", () => {
  if (!isGameOver) {
    pl2Score += 1;
    if (pl2Score === winningScore) {
      isGameOver = true;
      pl2Display.classList.add("winner");
      pl1Display.classList.add("loser");
      pl1.disabled = true;
      pl2.disabled = true;
    }
    pl2Display.textContent = pl2Score;
  }
});
scoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);

  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  pl1Score = 0;
  pl2Score = 0;
  pl1Display.textContent = 0;
  pl2Display.textContent = 0;
  pl1Display.classList.remove("winner", "loser");
  pl2Display.classList.remove("loser", "winner");
  pl1.disabled = false;
  pl2.disabled = false;
}
