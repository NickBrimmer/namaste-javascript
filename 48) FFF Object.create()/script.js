console.log('A fun fun function story about ...')

const cat = {
    makeSound: function(){
        console.log(this.sound);
    }
}

const mark = Object.create(cat)
mark.sound = "MEEEEEoooowwwwrrr"
mark.makeSound()  // fun function does not live on this object - searches prototype

// new instance of Cat object!!!!
const fluffy = Object.create(cat)
fluffy.sound = "prrrrrrrr"
fluffy.makeSound()   // fun function does not live on this object - searches prototype

console.log(
    cat.isPrototypeOf(mark)
)

console.log(
    mark.isPrototypeOf(cat)
)
