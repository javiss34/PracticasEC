import React, { useContext, useState } from "react";
import { contextoDiscos } from "../context/ProveedorDiscos.jsx";
import Disco from "./Disco.jsx";
import "./listarDiscos.css";

const ListarDiscos = () => {
  const { discos } = useContext(contextoDiscos);
  const [busqueda, setBusqueda] = useState("");

  //De esta forma podemos filtrar tanto por nombre de disco como por nombre de artista/grupo.
  const discosFiltrados = discos.filter(
    (disco) =>
      disco.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      disco.grupo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-paginas-discos">
      {discos.length > 0 && (
        <div className="filtrar_discos">
          <label htmlFor="filtro"></label>
          <input
            type="text"
            id="filtro"
            placeholder="Busque aqui"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      )}
      <div className="lista_discos">
        {discosFiltrados.length > 0 ? (
          discosFiltrados.map((disco) => {
            return <Disco disco={disco} key={disco.id} />;
          })
        ) : (
          <h3>No se encuentran discos con ese nombre</h3>
        )}
      </div>
    </div>
  );
};

export default ListarDiscos;
