const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showBoard = (board) => {
  console.log(`    (1) (2) (3)  \n(A)  ${board.A1} | ${board.A2} | ${board.A3} \n(B)  ${board.B1} | ${board.B2} | ${board.B3} \n(C)  ${board.C1} | ${board.C2} | ${board.C3}`);
}

const isVerticalWin = (board) => {
  return (((board.A1 === board.B1 && board.A1 === board.C1 && board.A1 !== ' ') || (board.A2 === board.B2 && board.A2 === board.C2 && board.A2 !== ' ') || (board.A3 === board.B3 && board.A3 === board.C3 && board.A3 !== ' ')) ? true : false);
}

const isHorizontalWin = (board) => {
  return (((board.A1 === board.A2 && board.A1 === board.A3 && board.A1 !== ' ') || (board.B1 === board.B2 && board.B1 === board.B3 && board.B1 !== ' ') || (board.C1 === board.C2 && board.C1 === board.C3 && board.C1 !== ' ')) ? true : false);
}

const isDiagonalWin = (board) => {
  return (((board.A1 === board.B2 && board.A1 === board.C3 && board.A1 !== ' ') || (board.A3 === board.B2 && board.A3 === board.C1 && board.A3 !== ' ')) ? true : false);
}

const isBoardFull = (board) => {
  return (board.A1 !== ' ' && board.A2 !== ' ' && board.A3 !== ' ' && board.B1 !== ' ' && board.B2 !== ' ' && board.B3 !== ' ' && board.C1 !== ' ' && board.C2 !== ' ' && board.C3 !== ' ');
}

const startNewGame = (answer, callback) => {
  if (answer === 'y') {
    callback({A1: ' ', A2: ' ', A3: ' ', B1: ' ', B2: ' ', B3: ' ', C1: ' ', C2: ' ', C3: ' '}, 1)
  } else {
    console.log('Thanks for playing!');
    process.exit();
  }
}

const checkBoard = (board, player, callback) => {
  if (isBoardFull(board)) {
    showBoard(board);
    rl.question('Stalemate. Play again? (y/n)', (answer) => {
      startNewGame(answer, callback);
    })
  } else if (isDiagonalWin(board) || isHorizontalWin(board) || isVerticalWin(board)) {
    showBoard(board);
    rl.question(`Player ${player} Wins! Play again? (y/n)`, (answer) => {
      startNewGame(answer, callback);
    })
  } else {
    callback(board, (player === 1 ? 2 : 1));
  } 
}

module.exports = {
  isDiagonalWin,
  isHorizontalWin,
  isVerticalWin,
  checkBoard,
  rl,
  showBoard
}