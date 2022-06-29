console.log('A Lesson about Monads!!!!!!!!!')

// What is a Monad?
// A Monad is a MORE POWERFUL Functor
// Monad is a functor that implements FLATMAP!!!!!!!

// What the hell is Flatmap? What is flat about flatmap?

// But, before - a little bit of code about streams
const Bacon = require('baconjs');
const stream = new Bacon.Bus() // creating a bus - a basic stream in Baconjs

// stream.push('cat')      Won't work up hear!!!
// stream.push('meal')     You don't have a callback
// stream.push('trumpet')  on the end of stream (skeleton function)


stream.onValue(word => console.log(word.toUpperCase()))


stream.push('cat')
stream.push('meal')
stream.push('trumpet')

// Promises have "flatmap" in ".then"!!!!!!!!!!!! 
// flatMap FLATTENS the value into the word value.