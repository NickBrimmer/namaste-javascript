document.querySelector('#categories').addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.tagName == "LI"){
        window.location.href = "/"+ e.target.id
    }
})

document.querySelector('#form').addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})