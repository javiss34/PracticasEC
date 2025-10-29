"use strict";

window.onload = () => {
    const pestañas = document.querySelectorAll(".pestañas p")
    const infoPestañas = document.querySelectorAll(".info_pestañas p")
    console.log(pestañas)

    pestañas.forEach((pestaña) => {
        pestaña.addEventListener(
            "click",
            () => {
                infoPestañas.forEach((info) => {
                    info.classList.toggle("mostrar");
                    console.log(info);
                })
            }
        )
    })
    
    
}