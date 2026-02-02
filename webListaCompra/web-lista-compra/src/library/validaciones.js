"use strict";

export const validarString = (nombreCampo,valor) => {
    if(!valor.trim()){
        return `El campo ${nombreCampo} no puede estar vacío`
    }
}

export const validarFloat = (nombreCampo, valor) => {
    if (valor === undefined || valor === null || valor.toString().trim() === "") {
        return `El ${nombreCampo} es obligatorio`;
    }
    const numero = parseFloat(valor);
    if (isNaN(numero)) {
        return `El ${nombreCampo} debe ser un número`;
    }
    if (numero < 0) {
        return `El ${nombreCampo} no puede ser negativo`;
    }

    return null;
}
