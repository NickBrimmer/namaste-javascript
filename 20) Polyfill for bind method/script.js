let nicksObj = {
    first: 'Nick',
    last: 'Brimmer'
}

let logName = function(hometown, state, country){
    console.log(this.first + " ", this.last + " " + hometown + ", " + state + " " + country + '.');
}
let logMyName = logName.bind(nicksObj, "Beaverton", 'Oregon');
logMyName('USA');

let logMyName2 = {
    logYourName2: logName.bind(nicksObj, "Beaverton", 'Oregon')
};
logMyName2['logYourName2']('USA');


Function.prototype.myBind = function(...args){
    let currObj = this;
    let params = args.slice(1);

    return function (...args2){
        currObj.apply(args[0], [...params, ...args2]);
    }
}

let logMyName3 = logName.myBind(nicksObj, 'Beaverton', 'Oregon');
logMyName3('USA')