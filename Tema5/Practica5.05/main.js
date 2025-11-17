"use strict";

import { comprobarCaracteres,mostrarMensajeErrorNombre } from "./biblioteca.js";

window.onload = () => {
    let formulario = document.forms.formulario;
    console.log(formulario);
    let nombre = document.getElementById("nombre")

    comprobarCaracteres(nombre);
    mostrarMensajeErrorNombre(nombre);
}