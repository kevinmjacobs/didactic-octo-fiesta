const readline = require('readline')
const { isDiagonalWin, isHorizontalWin, isVerticalWin } = require('./helpers.js')

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Tic-Tac-Toe!');

const ticTacToeGame = (board, player) => {
  console.log(`${board.A1} | ${board.A2} | ${board.A3} \n${board.B1} | ${board.B2} | ${board.B3} \n${board.C1} | ${board.C2} | ${board.C3}`);
  if ((!isDiagonalWin(board)) && (!isHorizontalWin(board)) && (!isVerticalWin(board))) {
    if (player === 1) {
      rl.question('Player 1 please fill in a square (X):', (answer) => {
        if (board[answer] === undefined) {
          console.log('Not a valid square');
          ticTacToeGame(board, player)
        }
        else {
          board[answer]='X';
          ticTacToeGame(board, 2);
        }
      })
    }
    if (player === 2) {
      rl.question('Player 2 please fill in a square (O):', (answer) => {
        if (board[answer] === undefined) {
          console.log('Not a valid square');
          ticTacToeGame(board, player)
        }
        else {
          board[answer]='O';
          ticTacToeGame(board, 1);
        }
      })
    }
  }
  if (isDiagonalWin(board) || isHorizontalWin(board) || isVerticalWin(board)) {
    rl.question(`Player ${player} Wins! Play again? (y/n)`, (answer) => {
      (answer === 'y') && ticTacToeGame({A1: ' ', A2: ' ', A3: ' ', B1: ' ', B2: ' ', B3: ' ', C1: ' ', C2: ' ', C3: ' '}, 1);
      console.log('Thanks for playing!');
    })
    console.log(`Player ${player} Wins!`)
  }
}

ticTacToeGame(board, 1);

