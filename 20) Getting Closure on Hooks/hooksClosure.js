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



///////////////////////////////////////////////////////////////////////////
// COUNTER EXAMPLE

function Counter(){
    const [count, setCount] = useState(0);
    return {
        click: () => setCount(count() + 1),
        render: () => console.log(('render:', {count: count()})),
    }
}

const C = Counter();
C.render()
C.click();
C.render()




///////////////////////////////////////////////////////////////////////

// STALE CLOSURE EXAMPLE
// Failure of directly exposing state: Once it is set, it cannot
// be re-assigned. This is why it is CRITICAL to have a function
// that watches over your variables in state, AND THEN one to modify it.

function useStaleState(initialValue){
    var _val2 = initialValue;

    function setState(newValue){
        return _val2 = newValue
    }

    return [_val2, setState];
}

// Destructured "far" is direct variable in the state function.
var [far, setFar] = useStaleState(0) 
console.log(far);
setFar(10);
console.log(far);




///////////////////////////////////////////////////////////////////////

// CLOSURE IN MODULES

