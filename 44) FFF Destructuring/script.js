console.log('A fun fun function story about Destructuring.')

const animal = {
    species: 'dog',
    weight: 23,
    sound: "woof"
}

const { species, sound } = animal;
// Under the hood
// var species = animal.species;
// var sound = animal.sound;


// console.log('The sound was a ' + species + ' and it called ' + sound + "!")


// Make it easier to deal with OPTION OBJECTS
// An object that may or may not contain several properties.


function makeSound(options){
    options.sound = options.sound || 'woof'
    const { species } = options
    console.log('The sound was a ' + species + ' and it called ' + sound + " from the land of " + options.destiny + "!")
}

// function with an OBJECT LITERAL as it's props
makeSound({
    species: "dragon",
    weight: 23,
    sound: "woof",
    destiny: "Portland"
})


function makeSound2({ species = "fish", sound, destiny }){
    console.log('The sound was a ' + species + ' and it called ' + sound + " from the land of " + destiny + "!")
}

makeSound2({
    weight: 23,
    sound: "woof",
    destiny: "Portland"  
})