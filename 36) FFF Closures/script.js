function generateFN(){
    const food = "Waffle";
    
    function innerFunction(){
        return "I like " + food;
    }

    return innerFunction
}

console.log(generateFN()())

// Where do you use closures?

// If you're designing an API (let's say it needs a database connection),
// do you write a bunch of functions as closures around the connection,
// or do you prefer to pass a database connection as an argument to each of your methods inside the API?

function CreateQueryFunction(connection){
    return function query(sql) {
        return connection.query(sql)
    }
}
// functional way!!!  of  ^^^^^^
const queryFactory = connection => (sql) => connection.query(sql);


// We want the order function to be unaware of more than it needs to be.
function createOrderManager(query){
    return function order(){
        query('INSERT order blahblahblah')
    }
}
// functional way!!! of  ^^^^^^
const createOrderFunction = query => sql => query(sql);


const mongoConnect = new MongoDB({
    username: '123'
})

// dependency injection
const query = CreateQueryFunction(mongoConnect)
const order = createOrderManager(query)



 