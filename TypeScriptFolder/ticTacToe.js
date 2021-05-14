var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//export {}
var X_CLASS = 'x';
var CIRCLE_CLASS = 'circle';
var WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var cellElements = document.querySelectorAll("[data-cell]");
var cellArray = Array.from(cellElements);
//const el: HTMLElement | null = document.getElementById('board');
//if (el) {
//const board: HTMLElement = el;
//}
var board = document.getElementById('board');
var winningMessageElement = document.getElementById('winningMessage');
var restartButton = document.getElementById('restartButton');
var winningMessageTextElement = document.querySelector('[data-winning-message-text]');
var circleTurn;
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
    circleTurn = false;
    //document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    cellElements.forEach(function (cell) {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    if (winningMessageElement)
        winningMessageElement.classList.remove('show');
}
function handleClick(e) {
    var cell = e.target;
    var currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    }
    else if (isDraw()) {
        endGame(true);
    }
    else {
        swapTurns();
        setBoardHoverClass();
    }
}
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    }
    else {
        winningMessageTextElement.innerText = (circleTurn ? "O's" : "X's") + " Wins!";
    }
    winningMessageElement.classList.add('show');
}
function isDraw() {
    return __spreadArray([], cellArray).every(function (cell) {
        //return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    });
}
function placeMark(cell, currentClass) {
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
            }
            else {
                board.classList.add(X_CLASS);
            }
        }
    }
}
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(function (combination) {
        return combination.every(function (index) {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}
