document.addEventListener("DOMContentLoaded", () => {
  const levelChooser = document.getElementById("levelChooser");
  let width = 10;
  let squares = [];
  let isGameOver = false;
  const bombAmount = 20;
  //create a board

  function createBoard(levelOption) {
    let xSize = 0;
    let ySize = 0;
    let bombAmount = 0;
    switch (levelOption) {
      case "easy":
        xSize = 8;
        ySize = 8;
        bombAmount = 10;
        break;
      case "medium":
        xSize = 16;
        ySize = 16;
        bombAmount = 40;
        break;
      case "hard":
        xSize = 30;
        ySize = 16;
        bombAmount = 99;
        break;
    }
  }
  function createBoard() {
    //random bomb positions
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
      // normal click
      square.addEventListener("click", function () {
        click(square);
      });
      //flag click
      square.oncontextmenu = function (e) {
        e.preventDefault();
        addFlag(square);
      };
    }
    // add numbers
    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = i % width === 0;
      const isRigthEdge = i % width === width - 1;
      if (squares[i].classList.contains("valid")) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb"))
          total++;
        if (
          i > 9 &&
          !isRigthEdge &&
          squares[i + 1 - width].classList.contains("bomb")
        )
          total++;
        if (i > 10 && squares[i - width].classList.contains("bomb")) total++;
        if (
          i > 11 &&
          !isLeftEdge &&
          squares[i - 1 - width].classList.contains("bomb")
        )
          total++;
        if (i < 98 && !isRigthEdge && squares[i + 1].classList.contains("bomb"))
          total++;
        if (
          i < 90 &&
          !isLeftEdge &&
          squares[i - 1 + width].classList.contains("bomb")
        )
          total++;
        if (
          i < 88 &&
          !isRigthEdge &&
          squares[i + 1 + width].classList.contains("bomb")
        )
          total++;
        if (i < 89 && squares[i + width].classList.contains("bomb")) total++;
        squares[i].setAttribute("data", total);
      }
    }
  }
  createBoard();
  // add a flag with right click
  function addFlag(square) {
    if (isGameOver) return;
    if (!square.classList.contains("checked") && flags < bombAmount) {
      if (!square.classList.contains("flag")) {
        square.classList.add("flag");
        square.innerHTML = "🚩";
        flags++;
        checkForWin();
      } else {
        square.classList.remove("flag");
        square.innerHTML = "";
        flags--;
      }
    }
  }
  //click on square actions
  function click(square) {
    let currentId = square.id;
    if (isGameOver) {
      return;
    }
    if (
      square.classList.contains("checked") ||
      square.classList.contains("flag")
    ) {
      return;
    }
    if (square.classList.contains("bomb")) {
      console.log("Game over");
      gameOver(square);
    } else {
      let total = square.getAttribute("data");
      if (total != 0) {
        square.classList.add("checked");
        square.innerHTML = total;
        return;
      }
      checkSquare(square, currentId);
    }
    square.classList.add("checked");
  }
  // check neighboring squares ine square is checked
  function checkSquare(square, currentId) {
    const isLeftEdge = currentId % width === 0;
    const isRigthEdge = currentId % width === width - 1;
    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1].id;
        const newSquare = document.getElementById(newId);
        click(newSquare, newId);
      }
      if (currentId > 9 && !isRigthEdge) {
        const newId = squares[parseInt(currentId) + 1 - width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId - width)].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1 - width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 98 && !isRigthEdge) {
        const newId = squares[parseInt(currentId) + 1].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1 + width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 88 && !isRigthEdge) {
        const newId = squares[parseInt(currentId) + 1 + width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) + width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
    }, 10);
  }
  function gameOver(square) {
    isGameOver = true;
    // show all bombs
    squares.forEach((square) => {
      if (square.classList.contains("bomb")) {
        square.style.backgroundColor = "red";
        square.innerHTML = "💀";
      }
    });
    setTimeout(window.location.reload(), 10000);
  }
  //check for win
  function checkForWin() {
    let matches = 0;
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains("flag") &&
        squares[i].classList.contains("bomb")
      ) {
        matches++;
      }
      if (matches === bombAmount) {
        console.log("win");
        isGameOver = true;
      }
    }
  }
});
