console.log('Getting Closure on Hooks!');


// Example 0
// Explanation : there are 2 inner functions, that when called
// can either return or manipulate the state within another context

function useState(initialValue){
    var _val = initialValue

    function state(){
        return _val
    }
    
    function setState(newVal){
        _val = newVal
    }
    return [state, setState]
}




///////////////////////////////////////////////////////////////////////

// STALE CLOSURE EXAMPLE
// Failure of directly exposing state: Once it is set, it cannot
// be re-assigned. This is why it is CRITICAL to have a function
// that watches over your variables in state, AND THEN one to modify it.
// function useStaleState(initialValue){
//     var _val2 = initialValue;

//     function setState(newValue){
//         return _val2 = newValue
//     }

//     return [_val2, setState];
// }



// // Destructured "far" is direct variable in the state function.
// var [far, setFar] = useStaleState(0) 
// console.log(far);
// setFar(10);
// console.log(far);



///////////////////////////////////////////////////////////////////////

// CLOSURE IN MODULES

// We can directly expose a value from state function IF we ENCLOSE IT.

const MyReact = (function(){
    let _val, _deps;
    return {
        render(Component){
            const Comp = Component();
            Comp.render();
            return Comp
        },
        useEffect(callback, depArray){
            const hasNoDeps = !depArray;
            const hasChangedDeps = _deps ? !depArray.every((el, i) => el === _deps[i]) : true;
            if(hasNoDeps || hasChangedDeps){
                callback()
                _deps = depArray
            }
        },
        useState(initialValue){
            _val = _val || initialValue
            function setState(newVal){
                _val = newVal;
            }
            return [_val, setState]
        }
    }
})()

///////////////////////////////////////////////////////////////////////////
// COUNTER EXAMPLE

function Counter(){
    const [count, setCount] = useState(0);
    MyReact.useEffect(() => {
        console.log('effect', count);
    }, [count])
    return {
        click: () => setCount(count() + 1),
        noop: () => setCount(count),
        render: () => console.log(('render:', {count: count()})),
    }
}

const C = Counter();
C.render()
C.click();
C.render()



let App
App = MyReact.render(Counter)
App.click()
App = MyReact.render(Counter)
App.noop();
App = MyReact.render(Counter)
App.click();
App = MyReact.render(Counter)
