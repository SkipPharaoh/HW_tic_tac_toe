console.log('JS:Linked')

// const tttState = []
const playerO = 'o'
const playerX = 'x'
// let activePlayer = playerO

const boardElement = document.getElementsByClassName('gameBoard')

const boxes = document.querySelectorAll('.box');
console.log(boxes)

const restartBttn = document.getElementsByClassName('restart');
console.log(restartBttn)

let playerOTurn = false


function placeMark(cell, currentClass) {
	box.classList.add(currentClass)
}

function swapTurns() {
	// playerOTurn != playerOTurn
    if(playerOTurn === true){
        playerOTurn = false
    }
    else{
        playerOTurn = true
    }
}


function restart() {
	playerOTurn = false
	boxes.forEach(box => {
		box.classList.remove(playerX)
		box.classList.remove(playerO)
		box.removeEventListener('click', handleCellClick)
		box.addEventListener('click', handleCellClick, { once: true })
	})
    return "string worked"
}

console.log(restartBttn)
restartBttn[0].addEventListener('click', restart)

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(evt) {
	const cell = evt.target
    console.log(cell)
	// const currentClass = playerOTurn ? playerO : playerX
	placeMark(cell, currentClass)
	// if (checkWin(currentClass)) {
	// 	endGame(false)
	// } else if (isDraw()) {
	// 	endGame(true)
	// } else {
	// 	swapTurns()
	// 	// setBoard()
	// }
}
console.log(handleCellClick())
