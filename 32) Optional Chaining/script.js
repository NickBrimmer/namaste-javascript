let a;

let index = 0;

try{
    a[index++]
} catch(err){
    console.log(err);
    console.log(index);

}

a?.[index++]
console.log(index);

a[index++]

console.log(index);