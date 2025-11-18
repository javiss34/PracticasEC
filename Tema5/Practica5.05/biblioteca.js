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
    for (let i = 0; i < marcados.length; i++) {
        if(marcados[i].checked){
            return true;
        }  
    }
    return false;
}

export const mostrarMensajeErrorSeleccion = (marcados) => {
    let mensaje=document.getElementById("mensajeErrorSeleccion");
    let cajaGenero = document.getElementById("cajaGenero");//Selecciono la caja para poder ponerla roja
    let esValido=comprobarSeleccionGenero(marcados);
    if(!esValido){
        cajaGenero.classList.add("error");
        mensaje.textContent="Selecciona alguna opción"
    }else{
        cajaGenero.classList.remove("error");
        mensaje.textContent="";
    }
}

const comprobarLocalizacion = (localizacion) => {
    let formato = /^ES-\d{3}[A-Z]{2}$/;
    if(formato.test(localizacion.value)){
        return true;
    }
    return false;
}

export const mostrarMensajeErrorLocalizacion = (localizacion) => {
    let mensaje = document.getElementById("mensajeErrorLocalizacion");
    localizacion.addEventListener("input",()=>{
        let esValido = comprobarLocalizacion(localizacion);
        if(!esValido){
            localizacion.classList.add("error");
            mensaje.textContent="Formato requerido: ES-001AA"
        }else{
            localizacion.classList.remove("error")
            mensaje.textContent="";
        }

    })
}

export const validarFormularioEntero = (nombre,interprete,anio,marcados,localizacion) => {
        return comprobarCaracteres(nombre) && comprobarCaracteres(interprete) && comprobarAño(anio) && comprobarSeleccionGenero(marcados) && comprobarLocalizacion(localizacion);
}


export const recorrerGenerosSeleccionados = (generos) => {
    let seleccionados=[];
    for (let i = 0; i < generos.length; i++) {
        if(generos[i].checked){
            seleccionados=[...seleccionados,generos[i].value];
        }
    }
    return seleccionados;
}

export const recorrerPrestado = (opciones) => {
    let seleccionada;
    for (let i = 0; i < opciones.length; i++) {
        if(opciones[i].checked){
            seleccionada=opciones[i].value;
        }
        
    }
    return seleccionada;
}

export const imprimirDiscosJSON = (json) => {
    return json.map(v => `
        <div class="disco">
            <p><strong>Nombre:</strong> ${v.nombre}</p>
            <p><strong>Interprete:</strong> ${v.interprete}</p>
            <p><strong>Año:</strong> ${v.anioPubli}</p>
            <p><strong>Géneros:</strong> ${v.generos.join(", ")}</p>
            <p><strong>Localización:</strong> ${v.localizacion}</p>
            <p><strong>Prestado:</strong> ${v.prestado === "Sí" ? "Sí" : "No"}</p>
            <img src="${v.caratula}" alt="Carátula de ${v.nombre}" width="100">
        </div>
    `).join(""); // join convierte el array en un solo string
}
