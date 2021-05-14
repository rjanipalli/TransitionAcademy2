
//export {}
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll<Element>("[data-cell]");
let cellArray = Array.from(cellElements);
//const el: HTMLElement | null = document.getElementById('board');

//if (el) {
  //const board: HTMLElement = el;
//}
const board = <HTMLTableElement>document.getElementById('board');
const winningMessageElement = <HTMLTableElement>document.getElementById('winningMessage');
const restartButton = <HTMLTableElement>document.getElementById('restartButton');
const winningMessageTextElement = <HTMLElement>document.querySelector('[data-winning-message-text]');
let circleTurn: boolean;

startGame();


//const button = document.querySelector("restartButton");
// optional chaining
//button?.addEventListener("click", startGame);

//function handleClick() {
//    console.log("Clicked!");
//    this.removeEventListener("click", handleClick);
//}

restartButton.addEventListener('click', startGame);

function startGame() {
    
  circleTurn = false
  //document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  })
  setBoardHoverClass();
  if (winningMessageElement)
  winningMessageElement.classList.remove('show');
  
}

function handleClick(e:any) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw:any) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!';
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellArray].every(cell => {
    //return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
  })
}

function placeMark(cell: any, currentClass: any) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    newFunction();

    function newFunction() {
        if (board) {
            board.classList.remove(X_CLASS);
            board.classList.remove(CIRCLE_CLASS);
            if (circleTurn) {
                board.classList.add(CIRCLE_CLASS);
            } else {
                board.classList.add(X_CLASS);
            }
        }
    }
}

function checkWin(currentClass:string) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}