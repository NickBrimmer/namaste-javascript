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

console.log(totals);