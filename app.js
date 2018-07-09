const readline = require('readline')
const { isDiagonalWin, isHorizontalWin, isVerticalWin, checkBoard, rl, showBoard } = require('./helpers.js')

const moves = {
  1: 'X',
  2: 'O'
}

let board = {
  A1: ' ',
  A2: ' ',
  A3: ' ',
  B1: ' ',
  B2: ' ',
  B3: ' ',
  C1: ' ', 
  C2: ' ',
  C3: ' '
}

console.log('Welcome to Tic-Tac-Toe!');

const ticTacToeGame = (board, player) => {
  showBoard(board);
  if ((!isDiagonalWin(board)) && (!isHorizontalWin(board)) && (!isVerticalWin(board))) {
    rl.question(`Player ${player} please enter a column & row to fill in a square (${moves[player]}):`, (answer) => {
      if (board[answer] === undefined || board[answer] === 'O' || board[answer] === 'X') {
        console.log('Not a valid square');
        ticTacToeGame(board, player);
      }
      else {
        board[answer] = moves[player];
        checkBoard(board, player, ticTacToeGame);
      }
    })
  }
}

ticTacToeGame(board, 1);

module.exports = {
  ticTacToeGame
}