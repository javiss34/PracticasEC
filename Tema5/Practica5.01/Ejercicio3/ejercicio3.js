"use strict";

window.onload = () => {
    let coordenadas = document.getElementById("posicion");
    
    coordenadas.addEventListener(
        "mousemove",
        (event) => {
            const x = event.x;
            const y = event.y;
            coordenadas.innerHTML = `X: ${x}, Y:${y}`;
        }
    )


}