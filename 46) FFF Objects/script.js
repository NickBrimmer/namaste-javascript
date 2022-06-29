// console.log('A fun fun function story about ...')



// // Creating a new object
// class Person {
//     constructor(name, age, height){
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }

//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//     whoAmI(){
//         console.log('Hello!!!! My name is ', this.name + '. I am ', this.age + ' and I am ', this.height + ' feet tall!');
//     }
// }

// function neoPerson(name, power, height){
//     this.name = name;
//     this.power = power;
//     this.height = height;
// }

// neoPerson.prototype.whoAmI = function(){
//     console.log('Hello!!!! My name is ', this.name + '. I am ', this.age + ' and I am ', this.height + ' feet tall!');
// }

// function newObj(constructor){
//     const newObject = {};
//     Object.setPrototypeOf(newObject, constructor.prototype);
//     // .apply is like BIND but it immediately executes the function and returns it's value
//     constructor.apply(newObject, ['"joejoe", 12, 8'] )
// }

// // const JoeJoe = new Person("joejoe", 12, 8);
// const JoeJoe = newObj(neoPerson("joejoe", 12, 8);
// JoeJoe.whoAmI()

// Here's what the "new" keyword actually does:
// - The "new" keyword is like a kid getting "double inheritance" - one from parents and one from loving aunt (they get what their family does, but also they get what someone else is giving them.)
// - Creates a new, plain object connected Mother to the prototype
// - Infuses the new, plain object with the properties and methods outlined in the parent object


function Person(saying){
    this.saying = saying
}

Person.prototype.talk = function(){
    console.log('I say: ', this.saying);
}

function spawn(constructor){
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype)
    // console.log(arguments); // { [Iterator] 0: [lambda: Person], 1: "SEMICOLONS!!!!" }

    var argsArray = Array.from(arguments);
    var argsES5Way = Array.prototype.slice.apply(argsArray)
    console.log(argsArray);  
    console.log(argsES5Way);  
    constructor.apply(obj, argsES5Way.slice(1))
    
    return obj
}

const crockford = spawn(Person, 'SEMICOLONS!!!!!!!!!!!')
crockford.talk()