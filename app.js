const { isDiagonalWin, isHorizontalWin, isVerticalWin } = require('./helpers.js')

let board = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '', 
  8: '',
  9: ''
}

console.log('Welcome to Tic-Tac-Toe!');

const ticTacToeGame = (board, player) => {
  console.log(`${board[1]} | ${board[2]} | ${board[3]} \n${board[4]} | ${board[5]} | ${board[6]} \n${board[7]} | ${board[8]} | ${board[9]}`);
  if ((!isDiagonalWin(board)) && (!isHorizontalWin(board)) && (!isVerticalWin(board))) {

  }
}


ticTacToeGame(board, 1);

