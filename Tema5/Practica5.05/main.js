"use strict";

import {
  mostrarMensajeErrorNombre,
  mostrarMensajeErrorInterprete,
  mostrarMensajeErrorAño,
  mostrarMensajeErrorSeleccion,
  mostrarMensajeErrorLocalizacion,
  validarFormularioEntero,
  recorrerGenerosSeleccionados,
  imprimirDiscosJSON,
  recorrerPrestado,
  borrarDisco
} from "./biblioteca.js";

window.onload = () => {

  //Recojo los datos del formulario
  let formulario = document.forms.formularioPrincipal;

  let nombre = document.getElementById("nombre");
  mostrarMensajeErrorNombre(nombre);

  let anio = document.getElementById("anioPublicacion");
  mostrarMensajeErrorAño(anio);

  let interprete = document.getElementById("grupoOInterprete");
  mostrarMensajeErrorInterprete(interprete);

  //Recorro el checkbox
  let generos = document.getElementsByName("genero");
  let checkBox = document.getElementById("cajaGenero");
  checkBox.addEventListener("change", () => {
    mostrarMensajeErrorSeleccion(generos);
  });

  let localizacion = document.getElementById("localizacion");
  mostrarMensajeErrorLocalizacion(localizacion);

  //Creo la variable discos que será el contenido del localStorage o un array vacio si no hay nada
  //Y como viene del localStorage que solo trabaja con String, pues lo convertimos a JSON
  let discos = JSON.parse(localStorage.getItem("discos")) || [];
  //Botón guardar
  document.getElementById("guardar").addEventListener("click", () => {
    if (
      validarFormularioEntero(nombre, interprete, anio, generos, localizacion)
    ) {
      let seleccionados = recorrerGenerosSeleccionados(generos);
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
        prestado: opcionSeleccionada,
      };

      discos = [...discos, nuevoDisco];
      localStorage.setItem("discos", JSON.stringify(discos));
      formulario.reset();
    }else{
      confirm("Revisa los campos inválidos.")
    }
  });

  let datos = document.getElementById("datos");
  //Botón mostrar
  document.getElementById("mostrar").addEventListener("click", () => {
    datos.innerHTML = imprimirDiscosJSON(discos);
    datos.classList.toggle("mostrar");

  });

  //Botón buscar
  let textoBuscar = document.getElementById("textoBuscar");
  document.getElementById("buscar").addEventListener("click",()=>{
    //No se puede hacer con find porque solo devuelve el primero que encuentre y puede que hayan varios que empiecen igual.
    let resultado = discos.filter(disco => disco.nombre.toLowerCase().includes(textoBuscar.value.toLowerCase()));
    if(resultado.length>0){
        datos.innerHTML = imprimirDiscosJSON(resultado);
        datos.classList.add("mostrar");
    }else{
        datos.innerHTML = "Disco no encontrado";
    }
  })

  //Botón limpiar
  document.getElementById("limpiar").addEventListener("click",()=>{
    //De esta forma el botón limpiar solo muestra todos los discos si ya se ha hecho una búsqueda, sino funcionaría como el botón mostrar.
    if(datos.classList.contains("mostrar")){
      datos.innerHTML = imprimirDiscosJSON(discos);
    }
  })

  document.getElementById("datos").addEventListener("click",(evento)=>{
    if(evento.target.classList.contains("borrar")){
        if(confirm("Quieres borrar este disco?")){
            discos=borrarDisco(discos,evento.target.id);
            localStorage.setItem("discos", JSON.stringify(discos));
            datos.innerHTML = imprimirDiscosJSON(discos)
        }
    }
  })

};
