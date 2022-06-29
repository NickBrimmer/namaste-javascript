const randomNumber = require('random-number');

function randomItem(array){
    const randomIndex = randomNumber({
        min: 1,
        max: array.length - 1,
        integer: true
    })
    return array[randomIndex]
}

const makeDragon = () => {
    const dragonSizes  = ['big', 'medium', 'tiny'];
    const dragonAbilities = ['fire', 'ice', 'lightning'];
    return randomItem(dragonSizes) + " " + randomItem(dragonAbilities) + ' ' + 'dragon'
}

console.log(makeDragon())

const dragonArmy = {
    // iterator factory
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.75;
                if(!enoughDragonsSpawned)
                    return {
                        value: makeDragon(),
                        done: false
                    }
                    return { done: true }
            }
        }
    }
}

for (const dragon of dragonArmy){
    console.log(dragon)
}


// Iterators can gradually fetch data from an API
