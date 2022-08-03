let pantalla = document.querySelector('.pantalla');
let botones = document.querySelectorAll('.btn');
let borrar = document.querySelector('.btn-c');
let igual = document.querySelector('.btn-igual');

pantalla.value = 0;


botones.forEach(function(boton){
    boton.addEventListener('click', (e) => {
        let value = e.target.dataset.num;
        if(pantalla.value == 0){
            pantalla.value = value
        }else{
            pantalla.value += value;
        }
    })
})

igual.addEventListener('click', () => {
    if(pantalla.value == 0){
        pantalla.value = '';
    }else{
        let respuesta = eval(pantalla.value);
        pantalla.value = respuesta;
    }
})

borrar.addEventListener('click', () => {
    pantalla.value = 0;
})