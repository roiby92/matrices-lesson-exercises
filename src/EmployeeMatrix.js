/* Write your code below */
const Matrix = require('./Matrix')
class EmployeeMatrix extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)
    }

    loadData(salaryData) {
        for (let r = 0; r < salaryData.length; r++) {
            this.matrix.push(Object.values(salaryData[r]))
        }
    }
    getEmployees(department) {
        const employees = []
        for (let employee of this.matrix) {
            if (employee[2] === department) {
                employees.push(employee[1])
            }
        }
        return employees;
    }
    getTotalSalary(department) {
        let sum = 0;
        for (let employee of this.matrix) {
            if (employee[2] === department) {
                sum += employee[3]
            }
        }
        return sum;
    }
    findRichest() {
        let employee1 = { name: '', salary: 0 }
        for (let employee of this.matrix) {
            if (employee[3] > employee1.salary) {
                employee1.name = employee[1]
                employee1.salary = employee[3]
            }
        }
        return employee1.name
    }
}
//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()
console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha
/* Do not remove the exports below */
module.exports = EmployeeMatrix