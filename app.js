const readline = require('readline')
const { isDiagonalWin, isHorizontalWin, isVerticalWin, checkBoard, rl } = require('./helpers.js')

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
  console.log(`${board.A1} | ${board.A2} | ${board.A3} \n${board.B1} | ${board.B2} | ${board.B3} \n${board.C1} | ${board.C2} | ${board.C3}`);
  if ((!isDiagonalWin(board)) && (!isHorizontalWin(board)) && (!isVerticalWin(board))) {
    if (player === 1) {
      rl.question('Player 1 please fill in a square (X):', (answer) => {
        if (board[answer] === undefined || board[answer] === 'O' || board[answer] === 'X') {
          console.log('Not a valid square');
          ticTacToeGame(board, player)
        }
        else {
          board[answer]='X';
          checkBoard(board, player, ticTacToeGame);
        }
      })
    }
    if (player === 2) {
      rl.question('Player 2 please fill in a square (O):', (answer) => {
        if (board[answer] === undefined || board[answer] === 'O' || board[answer] === 'X') {
          console.log('Not a valid square');
          ticTacToeGame(board, player)
        }
        else {
          board[answer]='O';
          checkBoard(board, player, ticTacToeGame);
        }
      })
    }
  }
}

ticTacToeGame(board, 1);

