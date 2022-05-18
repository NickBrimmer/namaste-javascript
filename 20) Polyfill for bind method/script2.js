let nicksObj = {
    firstName: 'Nick',
    lastName: 'Brimmer'
}

let logName = function(hometown, state, country){
    console.log(this.firstName + " " + this.lastName + ' ' + hometown + ", " + state + ", " + country + "." );
}

logMyName = logName.bind(nicksObj, "Beaverton", 'Oregon');
logMyName('USA');


let logMyName2 = {
    logYourName2: logName.bind(nicksObj, 'Beaverton', 'Oregon')
}
logMyName2['logYourName2']('USA');


Function.prototype.myBind = function(...args){
    let currObj = this;
    let params = args.slice(1);

    return function (...args){
        currObj.apply(args[0], [...params, ...args2]);
    }
}

let logMyName3 = logMyName.myBind(nicksObj, 'Beaverton', 'Oregon');
logMyName3('USA');
