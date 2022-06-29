const fs = require('fs')

var orders = [
    { amount: 250 },
    { amount: 100 },    
    { amount: 400 },   
    { amount: 325 }    
]

// the LOOPISH Way
// var totals = 0;
// for (let i = 0; i < orders.length; i++){
//     totals += orders[i].amount
// }

// The FUNCTIONAL way!!!
var totals = orders.reduce((sum, itor) => sum + itor.amount, 0)

// console.log(totals);

// var quickRead = fs.readFileSync('data.txt', {encoding:'utf8', flag:'r'})
// console.log(quickRead)

var output = fs.readFileSync('data.tsv', 'utf8')
    // creating an array of lines....
    .split('\n')
    // creating array of arrays!!!
    .map(line => line.split('\t'))
    // .reduce((customer), {})
    .reduce((customers, line) => {
        // console.log("hello", line) - shows that each iteration receives an object.

        customers[line[0]] = []
        customers[line[0]].push(
            {
                name: line[1],
                price: line[2],
                quantity: line[4]
            }
        )

        return customers
        {}})

console.log("output", JSON.stringify(output,  null, 2));