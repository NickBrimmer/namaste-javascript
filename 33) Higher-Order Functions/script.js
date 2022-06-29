let animals = [
    {name: "Fluffykins", species: "rabbit"},
    {name: "Cairo", species: "dog"},
    {name: "Hamilton", species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula", species: "cat"},
    {name: "Jimmy", species: "fish"}
]

var isDog = function(animal){
    return animal.species === "dog"
}

var dogList = animals.filter(isDog);
console.log(dogList);

