const container = document.forms.container;
container.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = container.name.value;
    let obj ={name}
    console.log(obj);
});
