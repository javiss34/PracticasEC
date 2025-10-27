"use strict";

export const constructorObjetos = (nombre,año,descripcion) => {
    return {
        nombre,
        año,
        descripcion,
        alumnado:[],
        matricular: function(discente){
            this.alumnado={...this.alumnado, discente};//Lo he hecho así para que se añade el discente a los alumnados que ya habían.
        }
    }
}

