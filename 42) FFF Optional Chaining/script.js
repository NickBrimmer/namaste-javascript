console.log('A fun fun function story about ...')

const user = { name: "Fluffykins" }

const ternaryZip = 
    user
        ? undefined
        : user.address
            ? undefined
            : user.address.zip
    ;

const optionalZip = user?.address?.zip
const zip = user.address.zip


console.log(zip)
console.log(optionalZip)
console.log(ternaryZip)

// Here's the problem:
// JS Variables and properties CAN have "null" or 'undefined' assigned to them and still be valid code. 


