// PROMISES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log('A beautiful script about Promises');

// The point of functional programming is to make your
// code more COMPOSABLE

// A promise is something you can pass around and you can write code
// around it even though you don't have the value just yet

// Non Promise-based function call
function loadImage(url, callback){
    let image = new Image()

    image.onload = function(){
        callback(null, image)
    }

    image.onerror = function(){
        let message = "Could not load image at " + url;
        callback(new Error(message))
    }
    image.src = url
}



// Promised-Based function call
function promisedImageLoad(url){
    return new Promise(resolve, reject => {
        let image = new Image()

        image.onload = function(){
            resolve(image)
        }

        image.onerror = function(){
            let message = "Could not load image from " + url;
            reject(new Error(message))

        }
        image.src = url
    })
}


let addImage = src => {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    
    document.body.appendChild(imgElement)
}

Promise.all([
    promisedImageLoad('thecatapi.comish'),
    promisedImageLoad('thecatapi.comish'),
    promisedImageLoad('thecatapi.comish'),
]).then((image) => {
    images.forEach(img => addImage(img.src))
})

