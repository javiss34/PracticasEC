"use strict";

const esPrimo = (num) => {
    //Ni los negativos ni el 1 son primos
    if(num<2){
        return false;
    }
    //si el numero da de resto 0 en cualquier división entre este y su raiz cuadrada no sera primo
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

let elementoTabla = document.createElement("table");
elementoTabla.classList.add("tabla");

const crearTabla = () => {
    let contadorCelda=1;//Creo un contador que sera lo que se muestre en cada celda.
    for (let i = 0; i < 10; i++) {
        let filas = document.createElement("tr");//Creo la fila.

        for (let j = 0; j < 10; j++) {
            let columnas = document.createElement("td"); //creo 10 columnas dentro de cada fila.
            columnas.textContent = contadorCelda//Añado el contador en cada celda.
            contadorCelda++;//sumo +1 al contador
            filas.appendChild(columnas);//A filas le añado las columnas como hijas.
        }
        elementoTabla.appendChild(filas);//A la tabla le añado las filas como hijas.
    }
    document.body.appendChild(elementoTabla);//Al body le añado la tabla como hija.


    setTimeout(() => {
        let celdas = elementoTabla.getElementsByTagName("td");
        for (let i = 0; i < celdas.length; i++) {
            if(esPrimo(parseInt(celdas[i].textContent))){//Convierto el contenido de celda que es textContent en un número y compruebo si es primo.
                celdas[i].classList.add("tabla_primo")//Si lo es le añado la clase tabla_primo
            }
            
        }
    },2000)
}

crearTabla();