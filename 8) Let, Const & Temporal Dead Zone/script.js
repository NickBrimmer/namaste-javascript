function fail() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
    console.log("Namaste JavaScript!");
}
fail()



// function x() {
//     for (let i = 0; i <= 5; i++) {
//         function close() {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000)
//         }
//         close(i)
//     }
//     console.log("Namaste JS");
// }

// x()

