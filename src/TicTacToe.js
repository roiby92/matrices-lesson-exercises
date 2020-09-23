const Matrix = require('./Matrix')
class TicTacToe extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)
        this.player = 0
    }

    loadBoard() {
        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(".")
            }
            this.matrix.push(row)
        }
        return this.matrix;
    }

    play(rowNum, columnNum, player) {
        if (this.canPlay(player)) {
            if (this.validPosition(rowNum, columnNum)) {
                if (player === 1) {
                    this.alter(rowNum, columnNum, "x")
                } else {
                    this.alter(rowNum, columnNum, "o")
                }
            } else {
                console.log(`that position is alredy played`);
            }
        } else {
            console.log(`canot play twice in a row`);
        }
        if(this.isGameOver(rowNum,columnNum,player)){
            this.loadBoard()
        }

    }
    canPlay(player) {
        if (this.player === 0) {
            return this.player = player
        }
        else if (this.player === player) {
            return false;
        }
        else {
            this.player = player
            return true;
        }
    }
    validPosition(rowNum, columnNum) {
        if (this.matrix[rowNum][columnNum] != '.') {
            return false
        }
        return true;
    }

    isGameOver(rowNum,columnNum,player) {
        if (this.matrix[rowNum][0] != '.' && this.matrix[rowNum][0] === this.matrix[rowNum][1] && this.matrix[rowNum][1] === this.matrix[rowNum][2]) {
            console.log(`Congratulations Player ${player}`);
            return true
        }
        if (this.matrix[0][columnNum] != '.' && this.matrix[0][columnNum] === this.matrix[1][columnNum] && this.matrix[1][columnNum] === this.matrix[2][columnNum]) {
            console.log(`Congratulations Player ${player}`);
            return true
        }
        if (this.matrix[0][0] != '.' && this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
            console.log(`Congratulations Player ${player}`);
            return true
        }
        if (this.matrix[0][2] != '.' && this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
            console.log(`Congratulations Player ${player}`);
            return true
        }
        return false
    }

}


let board = new TicTacToe()
board.loadBoard()
// board.print()
// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()
board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
module.exports = TicTacToe