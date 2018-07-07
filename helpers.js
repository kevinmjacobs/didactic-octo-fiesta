const isVerticalWin = (board) => {
  return (((board.A1 === board.B1 && board.A1 === board.C1 && board.A1 !== '') || (board.A2 === board.B2 && board.A2 === board.C2 && board.A2 !== '') || (board.A3 === board.B3 && board.A3 === board.C3 && board.A3 !== '')) ? true : false);
}

const isHorizontalWin = (board) => {
  return (((board.A1 === board.A2 && board.A1 === board.A3 && board.A1 !== '') || (board.B1 === board.B2 && board.B1 === board.B3 && board.B1 !== '') || (board.C1 === board.C2 && board.C1 === board.C3 && board.C1 !== '')) ? true : false);
}

const isDiagonalWin = (board) => {
  return (((board.A1 === board.B2 && board.A1 === board.C3 && board.A1 !== '') || (board.A3 === board.B2 && board.A3 === board.C1 && board.A3 !== '')) ? true : false);
}

module.exports = {
  isDiagonalWin,
  isHorizontalWin,
  isVerticalWin
}