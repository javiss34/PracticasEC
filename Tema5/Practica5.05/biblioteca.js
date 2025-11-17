"use strict";

//Esta función nos sirve para comprobar si un parámetro tiene +5 carácteres o no.
const comprobarCaracteres = (palabra) => {
    if(palabra.value.length<5){
        return false;
    }
    return true;
}

//Esta función se encarga de mostrar al usuario en tiempo real si lo que hay puesto en cada instante es válido o no.
export const mostrarMensajeErrorNombre = (nombre) => {
    let mensaje = document.getElementById("mensajeErrorNombre");
    nombre.addEventListener("input",()=>{
        let esValido = comprobarCaracteres(nombre);
        if(!esValido){
            nombre.classList.add("error");
            mensaje.textContent="Campo obligatario. Mínimo 5 carácteres";
        }else{
            nombre.classList.remove("error");
            mensaje.textContent="";
        }

    })
}

export const mostrarMensajeErrorInterprete = (interprete) => {
    let mensaje=document.getElementById("mensajeErrorInterprete");
    interprete.addEventListener("input",()=>{
        let esValido=comprobarCaracteres(interprete);
        if(!esValido){
            interprete.classList.add("error");
            mensaje.textContent="Campo obligatario. Mínimo 5 carácteres";
        }else{
            interprete.classList.remove("error");
            mensaje.textContent="";
        }
    })
}

const comprobarAño = (anio) => {
    //El año se obtiene como un string por lo que no hace falta convertirlo para usar el .length.
    if(!isNaN(anio.value) && anio.value.length===4){
        return true;
    }
    return false;
}

export const mostrarMensajeErrorAño = (anio) => {
    let mensaje = document.getElementById("mensajeErrorAnio");
    anio.addEventListener("input",() => {
        let esValido=comprobarAño(anio);
        if(!esValido){
            anio.classList.add("error");
            mensaje.textContent="Año no válido";
        }else{
            anio.classList.remove("error");
            mensaje.textContent="";
        }
    })
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

