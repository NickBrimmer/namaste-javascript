console.log("A fun fun function story about 'this' and bind.")

function talk(){
    // This is sensitive to the time of the call
    // It is context sensitive. 
    // and that HAS TO BE - a function doesn't just have one this (one context)
    console.log(this.sound);
}

let boromir = {
    blabber: talk,
    sound: 'One does not simply walk into Mordor!'
}

let gollum = {
    jabber: boromir.blabber,
    sound: 'My precioussssss....................'
}

gollum.jabber();