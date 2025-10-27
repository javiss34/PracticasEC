"use strict";

let parrafos = document.getElementsByTagName("p"); //Obtengo los párrafos
for (let i = 0; i < parrafos.length; i++) {//Les añado la clase párrafo para que tengan los estilos del css.
  parrafos[i].classList.add("parrafo");
}

const generarColorAleatorio = () => { //He creado esta función para generar un color aleatorio.
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

const restablecerParrafos = () =>{ //He creado está función para restablecer el párrafo el cual pinto el fondo.
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor="";
    }
}

const cambiarFondoParrafoAleatorio = () => {
  let numeroAnterior;
  let indiceAleatorio;
  setInterval(() => {
    restablecerParrafos()
    do {
      indiceAleatorio = Math.floor(Math.random() * 5);//genero un número entre 0-4.
    } while (indiceAleatorio === numeroAnterior);//Con el do-while hago que no pueda subrayar dos veces seguidas el mismo párrafo.
    numeroAnterior = indiceAleatorio;
    let parrafoAleatorio = parrafos[indiceAleatorio]; //Selecciona un párrafo aleatoriamente.
    parrafoAleatorio.style.backgroundColor=generarColorAleatorio();//Le cambio el fondo.
    console.log(parrafoAleatorio);//Para ver por consola que no hay nada raro
  }, 1000);
};

cambiarFondoParrafoAleatorio();
