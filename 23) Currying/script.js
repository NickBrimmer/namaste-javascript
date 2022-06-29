let multiply = function(x, y){
    console.log(x,y);
    console.log(x * y);
}

// this refers to the bound function
// first parameter will always bind 2 to x
let multiplyByTwo = multiply.bind(this, 2)

// which is the same as ...
// let multiplyByTwo = function(x){
//     let x = 2;
//     console.log(x, y);
// }

multiplyByTwo(5)
multiplyByTwo(3)


let dragon = 
    name => 
        size => 
            element => 
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'


console.log(
    dragon('fluffykins')('tiny')('lightning')
);