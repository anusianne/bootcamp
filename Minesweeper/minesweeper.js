document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10;
  let squares = [];
  bombAmount = 20;
  //create a board
  function createBoard() {
    //random bombs
    const bombsArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    console.log(bombsArray);
    console.log(emptyArray);
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);
    console.log(shuffledArray);
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      square.classList.add(shuffledArray[i]);
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();
});
