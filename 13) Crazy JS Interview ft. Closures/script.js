function outerOuter() {
    let c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner
    }
    return outer
}

// outerOuter returns outer
// outer receives "b" params
// outer returns inner
// inner returns console.log

outerOuter()("Namaste JS")()