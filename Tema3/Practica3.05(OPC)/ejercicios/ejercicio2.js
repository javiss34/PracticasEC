"use strict";

const llenarArrayBidimensional = () => {
  let arrayRelleno = [[]];

  for (let i = 0; i < 3; i++) {
    let numeroEnI
    do{
        numeroEnI = Math.floor(Math.random()*3+1);
    }while(arrayRelleno.includes(numeroEnI));
    arrayRelleno = [...arrayRelleno,numeroEnI];

    for (let j = 0; j < 3; j++) {
        let numeroEnJ
        do{
            numeroEnJ = Math.floor(Math.random()*3+1);
        }while(arrayRelleno.includes(numeroEnJ));
        arrayRelleno=[...arrayRelleno,numeroEnJ];
        
    }
    
  }


};
