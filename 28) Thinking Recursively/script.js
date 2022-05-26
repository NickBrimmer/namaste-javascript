let user= {
    name: "Nick",
    address: {
        personal: {
            city: "Beaverton",
            area: "Portland"
        },
        work: {
            city: "Hillsboro",
            area: "Washington County"
        }
    }
}

let findObject = {};

let magic = (obj, parent) => {
    for(let key in obj){
        if(typeof obj[key] === "object"){
            magic(obj[key], parent + "_" + key)
        } else {
            findObject[parent + "_" + key] = obj[key]
        }
    }
    
}

magic(user, "user")

console.log(findObject)

// FFF
let countDownFrom = (num) => {
    if(num === 0) return;
    console.log(num);
    countDownFrom(num - 1)
}

countDownFrom(10) 


let categories = [
    {id: "animals", 'parent': null},
    {id: "mammals", 'parent': "animals"},
    {id: "cats", 'parent': "mammals"},
    {id: "dogs", 'parent': "mammals"},
    {id: "chihuahua", 'parent': "dogs"},
    {id: "labrador", 'parent': "dogs"},
    {id: "siamese", 'parent': "cats"},
    {id: "persian", 'parent': "cats"}
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] =
            makeTree(categories, c.id))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories, null),
        null, 2)
);