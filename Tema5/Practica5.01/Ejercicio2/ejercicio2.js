"use strict";

window.onload = () =>{
    let cuerpo = document.body;

    let generarColor = () =>{
        let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let numeroAleatorio = Math.floor(Math.random()*letras.length)
            console.log(numeroAleatorio);
            color += letras[numeroAleatorio]
        }
        return color;
    }

    cuerpo.addEventListener(
        "dblclick",
        () => {
            cuerpo.style.backgroundColor = generarColor()
        },
        false
    )



}