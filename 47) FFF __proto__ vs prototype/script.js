console.log('A fun fun function story about ...')

// DO YOU HAVE A PEN????????????????????
// FIRST BOY NO, CHECKS WITH FRIEND AND NO
// THAT FRIEND IS A GOOD FRIEND AND CHECKS WITH HIS FRIEND WHO HAS A PEN TO SAHRE.

// Secret to Prototypes: Delegation, not inheritance of property instances and methods.
// It's just objects that delegate to other objects.

// Classes are about inheritance and instances of themselves.
// nick = new Person()

// References are type-based where properties are shared through a prototype.
// let cat = { breed: 'munchkin' }
// let myCat = { name: 'fluffykins' }
// Object.setPrototypeOf(myCat, cat)
// myCat.name // 'fluffykins'
// mycat.breed // 'munchkin'

// myCat.__proto__  // Object { breed: 'munchkin' }


// cat.tailLength = 15

// myCat.__proto__  // Object { breed: 'munchkin', tailLength: 15 }  // reference check to same object!!!
// climbing up the search tree.






function Dog(){}

// the only thing .prototype is used for is
// adding properties when the "new" keyword is used for
// just adding properties to new instances of objects.
Dog.prototype.breed = "Bulldog"

new Dog 

let myDoggie = new Dog();

console.log(myDoggie.breed)

console.log(myDoggie.__proto__)

// myDoggie.__proto__  // Object { breed: 'Bulldog' }
// myDoggie.prototype // undefined - only for functions (using "new")
// Dog.prototype  // Object { breed: 'Bulldog' }



 