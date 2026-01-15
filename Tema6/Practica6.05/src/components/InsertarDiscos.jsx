import { useContext, useEffect, useState } from "react";
import {
  validarCaracteres,
  validarAnio,
  validarLocalizacion,
} from "../biblioteca/validaciones";
import MostrarError from "./errores/MostrarError.jsx";
import "./errores/mostrarError.css";
import { contextoDiscos } from "../context/ProveedorDiscos.jsx";
import { useNavigate, useParams } from "react-router-dom";

const InsertarDiscos = () => {
  const valoresIniciales = {
    nombre: "",
    caratula: "",
    grupo: "",
    anioPubli: "",
    regueton: false,
    pop: false,
    flamenco: false,
    rap: false,
    localizacion: "",
    prestado: "no",
  };

  const [disco, setDisco] = useState(valoresIniciales);
  //Objeto de errores. Así le podemos indicar al usuario que input es erroneo
  const [objetoErrores, setObjetoErrores] = useState({});
  //lista de errores para pasarle a Errores y que la imprima
  const [listaErrores, setListaErrores] = useState([]);

  const { insertarDiscos, actualizarDisco, discos } =
    useContext(contextoDiscos);

  const { id } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    if (id) {
      const discoEncontrado = discos.find((d) => d.id === id);
      if (discoEncontrado) {
        setDisco(discoEncontrado);
      } else {
        console.log("Disco no encontrado");
      }
    } else {
      setDisco(valoresIniciales);
    }
  }, [id, discos]);

  const actualizarDato = (e) => {
    const { name, value, type, checked } = e.target;
    const valorFinal = type === "checkbox" ? checked : value;

    //Limpiar errores visuales del input concreto
    //Hacemos una copia del objeto de errores
    const nuevosErroresObj = { ...objetoErrores };
    //Dejamos el objeto vacío
    nuevosErroresObj[name] = "";
    //Establecemos este nuevo objeto como el objeto de errores
    setObjetoErrores(nuevosErroresObj);

    setDisco({ ...disco, [name]: valorFinal });
  };

  const validarDato = (name, value) => {
    let error = "";

    if (name === "nombre") {
      error = validarCaracteres(name, value);
    }

    if (name === "grupo") {
      error = validarCaracteres(name, value);
    }

    if (name === "anioPubli") {
      error = validarAnio(value);
    }
    if (name === "localizacion") {
      error = validarLocalizacion(value);
    }

    return error;
  };

  const validarFormulario = async (e) => {
    e.preventDefault();
    let objetoErroresActuales = {};
    let listaErroresActuales = [];
    let formularioValido = true;

    //Guardamos en una constante el resultado de validarDato. Si hay algún error es "mensaje de error" y sino es ""
    const errorNombre = validarDato("nombre", disco.nombre);
    //Si hay algún mensaje de error se guarda en el objeto con el name nombre el mensaje de error
    if (errorNombre) {
      objetoErroresActuales.nombre = errorNombre;
      listaErroresActuales = [...listaErroresActuales, errorNombre];
      formularioValido = false;
    }

    const errorGrupo = validarDato("grupo", disco.grupo);
    if (errorGrupo) {
      objetoErroresActuales.grupo = errorGrupo;
      listaErroresActuales = [...listaErroresActuales, errorGrupo];
      formularioValido = false;
    }

    const errorAnioPubli = validarDato("anioPubli", disco.anioPubli);
    if (errorAnioPubli) {
      objetoErroresActuales.anioPubli = errorAnioPubli;
      listaErroresActuales = [...listaErroresActuales, errorAnioPubli];
      formularioValido = false;
    }

    const errorLocalizacion = validarDato("localizacion", disco.localizacion);
    if (errorLocalizacion) {
      objetoErroresActuales.localizacion = errorLocalizacion;
      listaErroresActuales = [...listaErroresActuales, errorLocalizacion];
      formularioValido = false;
    }

    if (!disco.regueton && !disco.pop && !disco.flamenco && !disco.rap) {
      const errorGenero = "Debes seleccionar al menos un género";
      objetoErroresActuales.genero = errorGenero;
      listaErroresActuales = [...listaErroresActuales, errorGenero];
      formularioValido = false;
    }
    setObjetoErrores(objetoErroresActuales);
    setListaErrores(listaErroresActuales);

    if (formularioValido) {
      try {
        if (id) {
          const respuesta = await actualizarDisco(id, disco);
        } else {
          const nuevoDisco = {
            ...disco,
            id: crypto.randomUUID(),
          };
          const respuesta = await insertarDiscos(nuevoDisco);
        }
        navegar("/lista-discos");
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <div id="formulario_principal">
      <h2>
        {!id
          ? "AÑADE DISCOS A TU COLECCIÓN"
          : `ACTUALIZA EL DISCO:`}
      </h2>
      <form>
        <label htmlFor="nombre">Nombre </label>
        <input
          type="text"
          name="nombre"
          placeholder="Escriba aquí su nombre"
          className={objetoErrores.nombre ? "error" : ""}
          value={disco.nombre}
          onChange={actualizarDato}
        />
        <br />
        <br />
        <label htmlFor="caratula">Carátula </label>
        <input
          type="text"
          name="caratula"
          placeholder="URL"
          value={disco.caratula}
          onChange={actualizarDato}
        />
        <br />
        <br />
        <label htmlFor="grupo">Grupo </label>
        <input
          type="text"
          name="grupo"
          placeholder="Grupo/Artista"
          className={objetoErrores.grupo ? "error" : ""}
          value={disco.grupo}
          onChange={actualizarDato}
        />
        <br />
        <br />
        <label htmlFor="anioPubli">Año publicación </label>
        <input
          type="text"
          name="anioPubli"
          className={objetoErrores.anioPubli ? "error" : ""}
          value={disco.anioPubli}
          onChange={actualizarDato}
        />
        <br />
        <br />
        <div className={objetoErrores.genero ? "error" : "contenedor_generos"}>
          <legend>Género de música: </legend>
          <label>
            <input
              type="checkbox"
              name="regueton"
              id="regueton"
              value="regueton"
              checked={disco.regueton}
              onChange={actualizarDato}
            />
            Regueton
          </label>
          <label>
            <input
              type="checkbox"
              name="pop"
              id="pop"
              value="pop"
              checked={disco.pop}
              onChange={actualizarDato}
            />
            Pop
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="flamenco"
              id="flamenco"
              value="flamenco"
              checked={disco.flamenco}
              onChange={actualizarDato}
            />
            Flamenco
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="rap"
              id="rap"
              value="rap"
              checked={disco.rap}
              onChange={actualizarDato}
            />
            Rap
          </label>
        </div>
        <br />
        <br />
        <label htmlFor="localizacion">Localización </label>
        <input
          type="text"
          name="localizacion"
          placeholder="ES-001AA"
          className={objetoErrores.localizacion ? "error" : ""}
          value={disco.localizacion}
          onChange={actualizarDato}
        />
        <br />
        <br />
        <div className="contenedor_prestado">
          <legend>Prestado: </legend>
          <label>
            <input
              type="radio"
              name="prestado"
              id="si"
              value="si"
              checked={disco.prestado === "si"}
              onChange={actualizarDato}
            />
            Sí
          </label>
          <label>
            <input
              type="radio"
              name="prestado"
              id="no"
              value="no"
              checked={disco.prestado === "no"}
              onChange={actualizarDato}
            />
            No
          </label>

          <input type="button" value={id ? "Actualizar" : "Guardar"} onClick={validarFormulario} />
        </div>
      </form>
      <div>
        <MostrarError errores={listaErrores} />
      </div>
    </div>
  );
};

export default InsertarDiscos;
