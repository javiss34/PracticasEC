"use strict";

import { mostrarMensajeErrorNombre,mostrarMensajeErrorInterprete,mostrarMensajeErrorAño } from "./biblioteca.js";

window.onload = () => {
    let formulario = document.forms.formulario;
    console.log(formulario);
    let nombre = document.getElementById("nombre")
    let anio = document.getElementById("anioPublicacion");
    let interprete = document.getElementById("grupoOInterprete")

    mostrarMensajeErrorNombre(nombre);
    mostrarMensajeErrorInterprete(interprete);
    mostrarMensajeErrorAño(anio);

}