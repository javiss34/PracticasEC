import { useNavigate } from 'react-router-dom';
import './lista.css';

const Lista = ({lista}) => {
  const navegar = useNavigate();


    return (
    <div className='card-lista'>
      <h2>{lista.nombre_lista}</h2>
      <input type="button" value="Añadir productos" onClick={() => navegar(`/insertar-producto/${lista.id}`)}/>
      <input type="button" value="Detalles lista" onClick={() => navegar(`/lista-detalles/${lista.id}`)} />
    </div>
  )
}

export default Lista
