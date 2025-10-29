"use strict";

window.onload = () => {
    const botonSaludar = document.getElementById("saludar");
    const botonDetenerSaludo = document.getElementById("detener_saludo");
    let intervalo;

    const mostrarSaludoEnIntervalo = () =>{
        intervalo = setInterval(() => {
            let elemento = document.createElement("h1");
            elemento.innerHTML = "Holiiiiiii";
            document.body.appendChild(elemento);
        },2000)
    }
    const detenerSaludo = () => {
        clearInterval(intervalo);
    }
    
    botonSaludar.addEventListener(
        "click",
        () => {mostrarSaludoEnIntervalo()}
    )
    botonDetenerSaludo.addEventListener(
        "click",
        () => {detenerSaludo()}

    )
}