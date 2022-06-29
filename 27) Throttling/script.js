const expensive = () => {
    console.log("Expensive functions");
}

// window.addEventListener('resize', expensive)

const betterExpense = throttle(expensive, 1000);

// function simpleThrottle(fn, limit){
//     let flag = true;
//     return function(){
//         if(flag){
//             fn();
//             flag = false;
//             setTimeout(() => {
//                 flag = true
//             }, limit)
//         }
//     }
// }

function throttle(fn, limit) {
    let flag = true;
    return function(){
        let context = this, args = arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

window.addEventListener('resize', betterExpense)