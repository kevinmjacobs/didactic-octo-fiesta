const isVerticalWin = (board) => {
  return (((board[1] === board[4] && board[1] === board[7] && board[1] !== '') || (board[2] === board[5] && board[2] === board[8] && board[2] !== '') || (board[3] === board[6] && board[3] === board[9] && board[3] !== '')) ? true : false);
}

const isHorizontalWin = (board) => {
  return (((board[1] === board[2] && board[1] === board[3] && board[1] !== '') || (board[4] === board[5] && board[4] === board[6] && board[4] !== '') || (board[7] === board[8] && board[7] === board[9] && board[7] !== '')) ? true : false);
}

const isDiagonalWin = (board) => {
  return (((board[1] === board[5] && board[1] === board[9] && board[1] !== '') || (board[3] === board[5] && board[3] === board[7] && board[3] !== '')) ? true : false);
}

module.exports = {
  isDiagonalWin,
  isHorizontalWin,
  isVerticalWin
}