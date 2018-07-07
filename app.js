let board = {
  1: 'X',
  2: '',
  3: '',
  4: 'X',
  5: '',
  6: '',
  7: 'X', 
  8: '',
  9: ''
}

const isVerticalWin = (board) => {
  return (((board[1] === board[4] && board[1] === board[7] && board[1] !== '') || (board[2] === board[5] && board[2] === board[8] && board[2] !== '') || (board[3] === board[6] && board[3] === board[9] && board[3] !== '')) ? true : false)
}

console.log(isVerticalWin(board));

const isHorizontalWin = (board) => {

}