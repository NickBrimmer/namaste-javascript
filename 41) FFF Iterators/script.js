console.log('A fun fun function story about Iterators') 

// iterators is what the FOR OF loop uses to iterate over an array
// for ... of  ->  iterator  ->   Array (or anything!!!)(sets, maps, a custom object with iterators)


// What are iterators
const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
]

// for OF (not in, or each, or anything else)
for(const dragon of dragons){
    console.log('This is dragon is a ' + dragon)
}

// How does JS know HOW TO ITERATE over an array??? When FOR OF doesn't know anything about arrays!?!?!
// The ITORATOR tells the for of what to do!
const iterator = dragons[Symbol.iterator]()
iterator  // itorator object

// See! It returns an object!!!
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for (char of dragons[0]){
    console.log(char);  // !!!!!!!!!!!!!!
    // now you see that the STRING OBJECT provides and iterator!!!!
}

// Who else has iterators?!?!?!
// Sets, Maps. THE DOM NODE LIST!!!!

// But why ITERATORS?????

// HOW TO MAKE YOUR OWN CUSTOM OBJECTS ITERABLE!!!!!

