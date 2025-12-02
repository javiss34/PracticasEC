import React, { useEffect, useState } from 'react'
import {traerDatos} from '../libraries/traerDatos.js'

const Peliculas = () => {
    const url = "https://swapi.dev/api/films/";
    const [peliculas,setPeliculas] = useState([]);

    const traerPeliculas = async() => {
        const datos = await traerDatos(url);
        setPeliculas(datos);
    };

    useEffect(()=>{
        traerPeliculas();
    })

  return (
    <div>
      
    </div>
  )
}

export default Peliculas
