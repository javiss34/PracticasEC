import React from "react";
import useProductos from "../hooks/useProductos.js";
import useSesion from "../hooks/useSesion.js";
import "./listarProductos.css";

const ListarProductos = () => {
  const { productos, filtro, actualizarFiltro, actualizarOrden } =
    useProductos();
  const { sesionIniciada } = useSesion();

  const calcularPrecioMedio = () => {
    const numProductos = productos.length;
    let suma = 0;
    productos.map((producto) => {
      suma += producto.precio;
    });
    if (numProductos === 0) {
      return 0;
    } else {
      return suma / numProductos;
    }
  };
  return (
    <div className="contenedor_listado">
      <h2>Productos</h2>
      {sesionIniciada && (
        <>
          <div className="filtro">
            <legend>Filtrar por:</legend>
            <select
              name="tipo"
              value={filtro.tipo}
              onChange={actualizarFiltro}
              className="select_tipo"
            >
              <option value="nombre">Nombre</option>
              <option value="precio">Precio máx</option>
              <option value="peso">Peso máx</option>
            </select>
            <input
              name="valor"
              type={filtro.tipo === "nombre" ? "text" : "number"}
              value={filtro.valor}
              onChange={actualizarFiltro}
              placeholder="Buscar..."
            />
          </div>
          <div className="ordenar">
            <select name="tipo" onChange={actualizarOrden}>
              <option value="nombre-asc">Nombre (A-Z)</option>
              <option value="nombre-des">Nombre (Z-A)</option>
              <option value="precio-asc">Precio: Menor a mayor</option>
              <option value="precio-desc">Precio: Mayor a menor</option>
              <option value="peso-asc">Peso: Menor a mayor</option>
              <option value="peso-desc">Peso: Mayor a menor</option>
            </select>
          </div>
        </>
      )}
      <div className="lista_productos">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="producto">
              <h2>{producto.nombre}</h2>
              <h4>Peso: {producto.peso}g</h4>
              <h4>Precio: {producto.precio}€</h4>
              <img
                src={producto.imagen_url}
                alt={producto.nombre}
                className="imagen_producto"
              />
              <p>{producto.descripcion}</p>
            </div>
          ))
        ) : (
          <h2 className="sin_productos">No hay productos</h2>
        )}
      </div>
      <div className="cuadro_resumen">
        <ul>
          <li>Total de productos: {productos.length}</li>
          <li>Precio medio: {calcularPrecioMedio()}€</li>
        </ul>
      </div>
    </div>
  );
};

export default ListarProductos;
