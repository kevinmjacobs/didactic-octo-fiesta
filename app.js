const { isDiagonalWin, isHorizontalWin, isVerticalWin } = require('./helpers.js')

let board = {
  A1: '',
  A2: '',
  A3: '',
  B1: '',
  B2: '',
  B3: '',
  C1: '', 
  C2: '',
  C3: ''
}

console.log('Welcome to Tic-Tac-Toe!');

const ticTacToeGame = (board, player) => {
  console.log(`${board.A1} | ${board.A2} | ${board.A3} \n${board.B1} | ${board.B2} | ${board.B3} \n${board.C1} | ${board.C2} | ${board.C3}`);
  if ((!isDiagonalWin(board)) && (!isHorizontalWin(board)) && (!isVerticalWin(board))) {

  }
}

ticTacToeGame(board, 1);

