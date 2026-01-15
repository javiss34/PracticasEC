"use strict";

const validarCaracteres = (nombreCampo,texto) => {
  if (!texto.trim()) {
    return `El campo ${nombreCampo} es obligatorio`;
  } else if (texto.length < 5) {
    return `El campo ${nombreCampo} debe tener al menos 5 caracteres`;
  }
};

const validarAnio = (anio) => {
  if (anio.length !== 4 || isNaN(anio)) {
    return "El año debe tener 4 carácteres numéricos";
  }
};

const validarLocalizacion = (localizacion) => {
    if (!/^ES-\d{3}[A-Z]{2}$/.test(localizacion)){
        return "Formato incorrecto. El formato debe ser ES-000XX";
    }

}

export {validarCaracteres,validarAnio,validarLocalizacion};
