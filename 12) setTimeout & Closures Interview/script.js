//  FAIL!!! VAR IS HOISTED TO GLOBAL OBJECT
// Therefore, i cannot increment within the block context
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)
//     }
//     console.log("Namaste JavaScript");
// }
// x()


//  PASS!!! LET RESTRICTS J TO BLOCK CONTEXT
// Thus preventing it from incrementing the global object.
// function z() {
//     for ( let j = 0; j <= 5; j++ ) {
//         setTimeout( function () {
//             console.log( j );
//         }, j * 1000 )
//     }
//     console.log( "Namaste JavaScript" );
// }

// z()


function xyz() {
    for ( let i = 0; i <= 5; i++ ) {
        function close( x ) {
            setTimeout( function () {
                console.log( x );
            }, x * 1000 )
        }
        close( i )
    }
}

xyz()