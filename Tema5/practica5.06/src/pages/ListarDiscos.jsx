import React, { useState, useEffect } from 'react';
import RecorrerDiscos from '../components/RecorrerDiscos'; 
import './listarDiscos.css'

//Esta variable la inicializamos fuera, sino cada vez que se renderiza se define como array vacio.
let discosCargados = [];

const ListarDiscos = () => {

  //Estado de la lista
  let listaDiscosVacia = [];
  const [listaDiscos, setListaDiscos] = useState(listaDiscosVacia);
  //Estado del filtro
  let filtroVacio = "";
  const [filtroBusqueda, setFiltroBusqueda] = useState(filtroVacio);

  // useEffect para cargar los datos de LocalStorage
  useEffect(() => {
    const cargarDiscos = () => {
      const discosExistentesJSON = localStorage.getItem('listaDiscos');
      
      if (discosExistentesJSON) {
        discosCargados= JSON.parse(discosExistentesJSON || []);

        setListaDiscos(discosCargados);
    }else{
      setListaDiscos(listaDiscosVacia);
      discosCargados = [];
    }
  }
  cargarDiscos();
  }, []); 


  const limpiarFiltro = () => {
    setFiltroBusqueda(filtroVacio);
    setListaDiscos(discosCargados)
  }


  const filtrarDisco = (e) => {
    const textoInput = e.target.value;
    setFiltroBusqueda(textoInput);

    if(!discosCargados || discosCargados.length===0){
      setListaDiscos(listaDiscosVacia);
    }
    if(textoInput===""){
      setListaDiscos(discosCargados);
    }else{
      let textoMinusculas = textoInput.toLowerCase();
      let discosFiltrados = discosCargados.filter(disco => (
        disco.nombre.toLowerCase().includes(textoMinusculas)
      ))
      setListaDiscos(discosFiltrados);
    }

  }

  const eliminarDisco = (nombreDisco) => {
    let nuevaListaCompleta = discosCargados.filter(disco => disco.nombre!==nombreDisco);
    discosCargados=nuevaListaCompleta;
    localStorage.setItem('listaDiscos',JSON.stringify(nuevaListaCompleta));

    if(filtroBusqueda){
      let textoMinuscula = filtroBusqueda.toLocaleLowerCase();
      let nuevaListaFiltrada = nuevaListaCompleta.filter(disco=>disco.nombre.toLowerCase().includes(textoMinuscula));
      setListaDiscos(nuevaListaFiltrada);
    }else{
      setListaDiscos(nuevaListaCompleta);
    }
  }


  return (
    <div className="listado-discos">
      <h2>Listado de Discos Guardados</h2>
      <div className='controles-listado'>
        <input type="text" name='buscar' placeholder='Buscar por nombre' value={filtroBusqueda} onChange={filtrarDisco} />
        <button onClick={limpiarFiltro}>Limpiar</button>
      </div>
      <RecorrerDiscos discos={listaDiscos} eliminarDisco={eliminarDisco}/>
    </div>
  );
}

export default ListarDiscos;