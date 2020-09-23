const { coroutine } = require("bluebird")

/* Write your code below */
class Matrix {
    constructor(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let row = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                row += (this.matrix[i][j] + "\t")
            }
            console.log(row)
        }
    }

    printRow(rowNum) {
        let row = ""
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            row += (this.matrix[rowNum][i] + "\t")
        }
        console.log(row);
    }
    printColumn(columnNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum]);
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    alter(row, col, val) {
        this.matrix[row][col] = val
    }

    findCoordinate(val) {
        for(let i=0;i<this.matrix.length;i++){
            for(let j=0;j<this.matrix[i].length;j++){
                if(this.matrix[i][j]==val){
                     return { x: j, y: i }
                }
            }
        }
    }

}
//You can paste the code from the lesson below to test your solution
// let m = new Matrix(3, 4)
// m.print()
// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0)
// m.printRow(0)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}



/* Do not remove the exports below */
module.exports = Matrix