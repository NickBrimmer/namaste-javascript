console.log('A Lesson about STREAMS')
const fs = require('fs')
const highland = require('highland');

highland(fs.createReadStream('./customers.csv', 'utf-8'))
    // .each(console.log) // mapped as 1 long string
    .split()
    .map(line => line.split(','))
    .map(parts => ({  // => ({}) // return an object.....
        name: parts[0],
        numPurchases: parts[1]
    }))
    .filter(customer => customer.numPurchases > 2)
    .each(x => console.log('each: ', x))


// Think "a stream of data"

// imagine a stream with objects floating down.
// at the end of the stream are functions that can manipulate those objects (of data)

// A series of numbers that will arrive in the future.
// const stupidNumberStream = {
//     each: (callback) => {
//         setTimeout(() => callback(1), 1000)
//         setTimeout(() => callback(2), 2000)
//         setTimeout(() => callback(3), 3000)
//     }
// }

// stupidNumberStream.each(console.log)

// What is the point of streams? What do we use them for?
// Historically, when you need to process a heap of data that is so big
// that you cannot fit all of it all in memory
// and you need perform a transformation on each row

// A better way: Read each line, one at a time, and process each row individually.


