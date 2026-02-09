import React, { use, useEffect, useState } from 'react'
import useListas from '../hooks/useListas.js'
import useProductos from '../hooks/useProductos.js'
import Producto from './Producto.jsx'
import { useParams } from 'react-router-dom'
import './añadirProductosALista.css';

const AñadirProductosALista = () => {
    const {id} = useParams();
    const {productos,listarProductos} = useProductos();
    const {insertarProductosEnLista} = useListas();
    const [productoIntroducido,setProductoIntroducido] = useState(false);

    useEffect(()=>{
        if(!productos){
            listarProductos()
        }
    },[])

    const meterProductosEnLista = async(id_producto) => {
        await insertarProductosEnLista(id,id_producto);
        setProductoIntroducido(true);
        setTimeout(() => {
            setProductoIntroducido(false);
        },1000)
    }

  return (
    <div className='panel_anadir'>
        <h3>Catálogo</h3>
        {productos && productos.map((p) => {
            return <Producto key={p.id} producto={p} insertar={()=>meterProductosEnLista(p.id)}/>
        })}
        {productoIntroducido && (
            <div className='mensaje_exito'>
                Producto añadido correctamente
            </div>
        )}
    </div>
  )
}

export default AñadirProductosALista
