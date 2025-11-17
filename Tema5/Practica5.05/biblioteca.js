"use strict";

//Está función nos sirve para comprobar unicamente si un parámetro tiene +5 carácteres o no.
export const comprobarCaracteres = (nombre) => {
    if(nombre.value.length<5){
        return false;
    }
    return true;
}

export const mostrarMensajeErrorNombre = (nombre) => {
    let mensaje = document.getElementById("mensajeErrorNombre");
    nombre.addEventListener("input",()=>{
        let esValido = comprobarCaracteres(nombre);
        if(!esValido){
            nombre.classList.add("error");
            mensaje.textContent="Campo incompleto. Mínimo 5 carácteres";
        }else{
            nombre.classList.remove("error");
            mensaje.textContent="";
        }

    })
}

const comprobarAño = (año) => {
    let añoString = año.toString();//Pasamos el int a string para poder trabajar con .length
    if(!isNaN(añoString) && añoString.length===4){
        return true;
    }
    return false;
}

const comprobarSeleccionGenero = (marcados) => {
    if(marcados.length>0){//si marcados.length>0 significa que se ha marcado alguna opción.
        return true;
    }
    return false;
}

const comprobarLocalizacion = (localizacion) => {
    let formato = /^ES-\d{3}[A-Z]{2}$/;
    if(formato.test(localizacion.value)){
        return true;
    }
    return false;
}

