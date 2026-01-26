import React from 'react'
import useProductos from '../hooks/useProductos.js'

const ListarProductos = () => {
  const {productos} = useProductos();
  return (
    <div className='contenedor_listado'>
      <h2>Productos</h2>
      <div className='lista_productos'>
        {productos.length > 0 ? (
          productos.map((producto) => {
            <div key={producto.id}> 
              <h3>{producto.nombre}</h3>
              <h4>{producto.peso}</h4>
              <h4>{producto.precio}</h4>
              <img src={producto.imagen_url} alt={producto.nombre} />
              <p>{producto.descripcion}</p>
            </div>
          })
        ) : <h4>No hay productos</h4>}
      </div>
      
    </div>
  )
}

export default ListarProductos
