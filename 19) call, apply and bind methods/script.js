let name = {
    firstName: "Nick ",
    lastName: "Brimmer",
    printer: function () {
        console.log(this.firstName + this.lastName)
    }
}

const printFullName = function (hometown) {
    console.log(this.firstName + this.lastName + " from " + hometown)
}

let name2 = {
    firstName: "Richard ",
    lastName: "Brimmer"
}

// normal object method invocation.
name.printer()

// call(<objectEnvironment>, args1, args2...) Arguments individually
printFullName.call(name2, "Yakima")

// apply(<objectEnvironment, [argList1, argList2...]>)  arguments as array list
printFullName.apply(name, [ "Nowhere" ])

// bind method
let printMyName = printFullName.bind(name2, "Yakima");
printMyName()