"use strict";

window.onload = () => {
    const pestañas = document.querySelectorAll(".pestañas p")//Obtengo un nodeList de los párrafos dentro del div .pestañas
    const infoPestañas = document.querySelectorAll(".info_pestañas p")//Obtengo un nodeList de la información dentro del div .info_pestañas

    pestañas.forEach((pestaña,i) => {
        pestaña.addEventListener(
            "click",
            () => {
                //Pasamos por cada elemnto del nodelist infopestañas y quito la clase mostrar.
                /* infoPestañas.forEach((info) => {
                    info.classList.remove("mostrar");
                }) */

                //Añado al elemento pestaña la clase mostrar que está en el css.
                infoPestañas[i].classList.toggle("mostrar");


            }
        )
    })
    
    
}