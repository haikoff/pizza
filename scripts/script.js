let button = document.querySelector(".vibor");
let prod = document.querySelectorAll('.prod');
button.addEventListener('click', (event) =>{
    let clas = event.target.id;
    prod.forEach(element => {
        element.style.display = 'block';
        if (element.id !== clas){
            element.style.display = 'none';
        }
    });
    document.querySelector('.cards').style.display = 'none';
    document.querySelector('.checkAdres').style.display = 'none';

}); 