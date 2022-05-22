document.querySelector('#gparent')
    .addEventListener('click', ()=> {
        console.log('Gparent clicked!');
    }, false);

document.querySelector('#parent')
    .addEventListener('click', (e) => {
        console.log("Parent clicked!");
        e.stopPropagation()
    }, false);

document.querySelector('#child')
    .addEventListener('click', () => {
        console.log('Child clicked!');
    }, false);

