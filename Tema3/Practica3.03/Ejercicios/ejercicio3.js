"use strict";

export let discente = {
    id: 34,
    nombre: "Javeir",
    apellidos: "Sánchez Solera",
    aficiones: ["Fútbol","Tenis"],
    notas: {
        primera: 7,
        segunda: 5,
        tercera: 6
    },
    //He decidido meter las funciones en el objeto discente.
    calcularMedia: function(){
        let{primera,segunda,tercera} = this.notas;//He usado desestructuración.
        return (primera+segunda+tercera)/3;
    },
    imprimirAficiones: function(){
        return this.aficiones.join(", ");
    },
    imprimirInforme: function(){
        console.log(`_____INFORME DISCENTE_____`)
        for (const clave in discente) {
            //Si es una función no se muestra.
            if(typeof discente[clave] !== "function"){
                //Si es un objeto entra en este if.
                if(typeof discente[clave] === "object"){
                    //Como un array es un objeto pues valido si el objeto es un array para darle el formato join(", ").
                    if(Array.isArray(discente[clave])){
                        console.log(`${clave}: ${discente[clave].join(", ")}`);
                    }else{
                        //Si es un objeto hago otro forin para recorrer el interior del objeto y en este caso mostrar las notas.
                        console.log(`${clave}: `)
                        for (const subclave in discente[clave]) {
                            console.log(`${subclave}: ${discente[clave][subclave]}`);
                    }
                }
                //Los demas tipos como números o strings los imprime con este formato por pantalla.
                }else{
                    console.log(`${clave}: ${discente[clave]}`);
                }
            }
        }
    }

};