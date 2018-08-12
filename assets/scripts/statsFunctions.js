const row = function (board) {
  // check to see if there's a row winning combination
  if (board[0] !== '' &&
      (board[0] === board[1] &&
      board[0] === board[2])) {
    return board[0]
  } else if (board[3] !== '' &&
          (board[3] === board[4] &&
          board[3] === board[5])) {
    return board[3]
  } else if (board[6] !== '' &&
              (board[6] === board[7] &&
               board[6] === board[8])) {
    return board[6]
  }
  return false
}
const col = function (board) {
  if (board[0] !== '' &&
      (board[0] === board[3] &&
      board[0] === board[6])) {
    return board[0]
  } else if (board[1] !== '' &&
          (board[1] === board[4] &&
          board[1] === board[7])) {
    return board[1]
  } else if (board[2] !== '' &&
              (board[2] === board[5] &&
               board[2] === board[8])) {
    return board[2]
  }
  return false
}
const dia = function (board) {
  // check to see if there's a diagonal winning combination
  if (board[0] !== '' &&
      (board[0] === board[4] &&
      board[0] === board[8])) {
    return board[0]
  } else if (board[2] !== '' &&
              (board[2] === board[4] &&
               board[2] === board[6])) {
    return board[2]
  }
  return false
}

const draw = function (board) {
  let count = 0
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      count++
    }
  }
  if (count === 0) {
    return true
  }
  return false
}

const giveWinner = function (board) {
  if (row(board)) {
    return row(board)
  } else if (col(board)) {
    return col(board)
  } else if (dia(board)) {
    return dia(board)
  } else if (draw(board)) {
    return 'Draw'
  }
  return false
}

module.exports = {
  giveWinner
}
