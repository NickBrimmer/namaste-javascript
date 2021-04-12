let name = {
    firstName: "Nick ",
    lastName: "Brimmer",
    printer: function () {
        console.log(this.firstName + this.lastName)
    }
}

const printfullName = function (hometown) {
    console.log(this.firstName + this.lastName + " from " + hometown)
}

let name2 = {
    firstName: "Richard ",
    lastName: "Brimmer"
}

name.printer()

// call(<objectEnvironment>, args1, args2...) Arguments individually
printfullName.call(name, "Yakima")

// apply(<objectEnvironment, [argList1, argList2...]>)  arguments as array list
printfullName.apply(name, ["Nowhere"])

// bind method
let printMyName = printfullName.bind(name2, "Yakima");
printMyName()