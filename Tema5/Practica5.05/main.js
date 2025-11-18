"use strict";

import { mostrarMensajeErrorNombre,mostrarMensajeErrorInterprete,mostrarMensajeErrorAño,mostrarMensajeErrorSeleccion,mostrarMensajeErrorLocalizacion,validarFormularioEntero,recorrerGenerosSeleccionados,imprimirDiscosJSON,recorrerPrestado } from "./biblioteca.js";

window.onload = () => {
    let formulario = document.forms.formulario;

    let nombre = document.getElementById("nombre");
    mostrarMensajeErrorNombre(nombre);

    let anio = document.getElementById("anioPublicacion");
    mostrarMensajeErrorAño(anio);

    let interprete = document.getElementById("grupoOInterprete");
    mostrarMensajeErrorInterprete(interprete);

    //Recorro el checkbox
    let generos=document.getElementsByName("genero");
    let checkBox = document.getElementById("cajaGenero");
    checkBox.addEventListener("change",()=>{
        mostrarMensajeErrorSeleccion(generos);
    })

    let localizacion = document.getElementById("localizacion");
    mostrarMensajeErrorLocalizacion(localizacion);

    let discos = JSON.parse(localStorage.getItem("discos")) || [];
    document.getElementById("guardar").addEventListener("click",()=>{
        if(validarFormularioEntero(nombre,interprete,anio,generos,localizacion)){
            let seleccionados=recorrerGenerosSeleccionados(generos);
            let prestado = document.getElementsByName("boleano");
            let opcionSeleccionada = recorrerPrestado(prestado);

            let nuevoDisco = {
            id: crypto.randomUUID(),
            nombre: nombre.value,
            caratula: document.getElementById("caratula").value,
            interprete: interprete.value,
            anioPubli: anio.value,
            generos: seleccionados,
            localizacion: localizacion.value,
            prestado: opcionSeleccionada
        }

            discos = [...discos,nuevoDisco];
            localStorage.setItem("discos",JSON.stringify(discos));
            document.getElementById("datos").innerHTML =  imprimirDiscosJSON(discos);
            
        };
    })


}