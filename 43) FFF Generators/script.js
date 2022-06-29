console.log('A fun fun function story about Generator!!!!')

//  Generators are functions that rely on other unknown functions to 
//  do something for them, and they will continue their work with the 
//  unknown function response. 

//  So yield is kind of like return: you get something back. return x returns 
//  the value of x, but yield x returns a function, which gives you a method 
//  to iterate toward the next value. Useful if you have a potentially memory 
//  intensive procedure that you might want to interrupt during the iteration.

//  This is how it works
// yield keyword simply helps to pause and resume a function in any time asynchronously.
// Additionally it helps to return value from a generator function.

// The function containing the yield keyword is a generator. When you call it, its 
// formal parameters are bound to actual arguments, but its body isn't actually evaluated. 
// Instead, a generator-iterator is returned. Each call to the generator-iterator's next() 
// method performs another pass through the iterative algorithm. Each step's value is the 
// value specified by the yield keyword. Think of yield as the generator-iterator version of 
// return, indicating the boundary between each iteration of the algorithm. Each time you call 
// next(), the generator code resumes from the statement following the yield.




// NICK'S ANSWER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// yield can also be used to eliminate callback hell, with a coroutine framework.

function start(routine, data) {
    result = routine.next(data);
    if(!result.done) {
        result.value(function(err, data) {
            if(err) routine.throw(err); // continue next iteration of routine with an exception
            else start(routine, data);  // continue next iteration of routine normally
        });
    }
}

// with nodejs as 'node --harmony'
fs = require('fs');
function read(path) {
    return function(callback) { fs.readFile(path, {encoding:'utf8'}, callback); };
}

function* routine() {
    text = yield read('/path/to/some/file.txt');
    console.log(text);
}

// with mdn javascript 1.7
http.get = function(url) {
    return function(callback) { 
        // make xhr request object, 
        // use callback(null, resonseText) on status 200,
        // or callback(responseText) on status 500
    };
};

function* routine() {
    text = yield http.get('/path/to/some/file.txt');
    console.log(text);
}

// invoked as.., on both mdn and nodejs

start(routine());


// Simplifying/elaborating on Nick Sotiros' answer (which I think is awesome), 
// I think it's best to describe how one would start coding with yield.
// // In my opinion, the biggest advantage of using yield is that it will eliminate 
// all the nested callback problems we see in code. It's hard to see how at first, 
// which is why I decided to write this answer (for myself, and hopefully others!)

// // The way it does it is by introducing the idea of a co-routine, 
// which is a function that can voluntarily stop/pause until it gets what it needs. 
// In javascript, this is denoted by function*. Only function* functions can use yield.

// Here's some typical javascript:

loadFromDB('query', function (err, result) {
  // Do something with the result or handle the error
})
// This is clunky because now all of your code (which obviously needs to wait for this loadFromDB call) needs to be inside this ugly looking callback. This is bad for a few reasons...

// All of your code is indented one level in
// You have this end }) which you need to keep track of everywhere
// All this extra function (err, result) jargon
// Not exactly clear that you're doing this to assign a value to result
// On the other hand, with yield, all of this can be done in one line with the help of the nice co-routine framework.

function* main() {
  var result = yield loadFromDB('query')
}
// And so now your main function will yield where necessary when it needs to wait for variables and things to load. But now, in order to run this, you need to call a normal (non-coroutine function). A simple co-routine framework can fix this problem so that all you have to do is run this:

start(main())
// And start is defined (from Nick Sotiro' answer)

function start(routine, data) {
    result = routine.next(data);
    if(!result.done) {
        result.value(function(err, data) {
            if(err) routine.throw(err); // continue next iteration of routine with an exception
            else start(routine, data);  // continue next iteration of routine normally
        });
    }
}

// And now, you can have beautiful code that is much more readable, easy to delete, and no need to fiddle with indents, functions, etc.
// An interesting observation is that in this example, yield is actually just a keyword you can put before a function with a callback.

function* main() {
  console.log(yield function(cb) { cb(null, "Hello World") })
}
// Would print "Hello World". So you can actually turn any callback function into using yield by simply creating the same function signature (without the cb) and returning function (cb) {}, like so:

function yieldAsyncFunc(arg1, arg2) {
  return function (cb) {
    realAsyncFunc(arg1, arg2, cb)
  }
}

// Hopefully with this knowledge you can write cleaner, more readable code that is easy to delete!