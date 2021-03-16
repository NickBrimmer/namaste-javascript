console.log(getName); // logs function structure

getName();  // calls the function!!!!! (memoization!!!)

console.log(x); // Not defined

var x = 7;


getName();
console.log(x);  // defined
console.log(z);  // "ReferenceError: z is not defined"

// logs as a traditional function.
function getName() {
    console.log("Namaste JavaScript");
}

// logs out like a variable.
var getNameArrow = () => {
    console.log("Namaste JavaScript");
}

// logs out like a variable. 
var getName = function (){
    console.log("Namaste JavaScript");
}