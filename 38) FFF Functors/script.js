// FUNCTORS!!!!!!!!!
// Functors = Objects that have a MAP method
// Array is the Functor b/c is has the implementation of map
// it is the object that is IMPLEMENTING the map function
// Other functors = Promises(libraries that have a .map), trees, streams

// In category theory - the math theory related to functors, a functor is actually a function
// and, worse, the word "functor" is used in CS synonymously with Higher Order Functions!!!!

// Key attributes of a functor
// 1. Transformation of contents - it receives the contents of the object and uses the callback to transform the contents.
// 
// 
// 

const kingdom = [
    {name: "Fluffykins", species: "rabbit"},
    {name: "Cairo", species: "dog"},
    {name: "Hamilton", species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula", species: "cat"},
    {name: "Jimmy", species: "fish"}
]

const names = kingdom.map(servants => servants.name); // this is the functor TRANSFORM (servants.name) is the CB that returns new values.
console.log(names);



// the bad way
function plus1(value){
    if(Array.isArray(value)){
        let newArray = [];
        for(let i = 0; i < value.length; i++){
            newArray[i] = value[i] + 1;
        }
        return newArray;
    }

    if(typeof(value) === 'string'){
        const chars = value.split('');
        let newCharArray = [];
        for(let i = 0; i < chars.length; i++){
            newCharArray[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1)
        }
        return newCharArray.join('')
    }
}

console.log(plus1([3, 4]));
console.log(plus1('abc'));


// THE FUNCTOR WAY!!!!!!!!!!!

function stringFunctor(value, fn){
    let chars = value.split('');
    return chars.map(function(char){
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join('')
}

function addOne(value){
    return value + 1
}

function minusOne(value){
    return value - 1
}

console.log([3,4].map(addOne))
console.log(stringFunctor('ABC', addOne))
console.log(stringFunctor('XYZ', minusOne))

