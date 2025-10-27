import React, { useState } from "react";
import matriculados from "../assets/matriculados.json";
import "./Matricula.css";

const Matricula = () => {
  let estadoInicial = matriculados.discentes; //El estado inicial es el array del objeto discentes
  let [discentesSegundoDaw, setDiscentesSegundoDaw] = useState(estadoInicial);
  let [estado, setEstado] = useState(true);

  const mostrarSegundoDaw = () => {
    setDiscentesSegundoDaw(
      estadoInicial.filter((valor) => valor.curso === "2DAW")
    );
  };

  const mostrarPrimerCurso = () => {
    setDiscentesSegundoDaw(
      estadoInicial.filter((valor) => valor.curso.includes("1"))
    );
  };
  const mostrarDAW = () => {
    setDiscentesSegundoDaw(
      estadoInicial.filter((valor) => valor.curso.includes("DAW"))
    );
  };
  const mostrarAficionLectura = () => {
    setDiscentesSegundoDaw(
      estadoInicial.filter(
        (valor) =>
          valor.aficiones.includes("lectura") ||
          valor.aficiones.includes("leer")
      )
    ); //También incluyo leer ya que he visto que hay algún discente que pone leer en vez de lectura
  };
  const ordenarListadoActual = () => {
    let ordenado = [...discentesSegundoDaw].sort((apellido1, apellido2) => {
      return estado
        ? apellido1.apellidos.localeCompare(apellido2.apellidos) //Uso localeCompare para comparar un apellido con el siguiente y devuelve el que va antes.
        : apellido2.apellidos.localeCompare(apellido1.apellidos); //Orden inverso.
    });
    setDiscentesSegundoDaw(ordenado);
    setEstado(!estado);
  };
  const reiniciarListado = () => {
    setDiscentesSegundoDaw(estadoInicial);
  };
  const desmatricular = (nombre) => {
    setDiscentesSegundoDaw(
      estadoInicial.filter((valor) => valor.nombre !== nombre)
    ); //Filtro por todos los nombres que sean diferentes al que se le pasa como parámetro.
  };

  return (
    <div className="contenedor_matricula">
      <div className="botones">
        <button onClick={mostrarSegundoDaw}>Alumnos de 2DAW</button>
        <button onClick={mostrarPrimerCurso}>Alumnos de 1º</button>
        <button onClick={mostrarDAW}>Alumnos de DAW</button>
        <button onClick={mostrarAficionLectura}>Alumnos lectores</button>
        <button onClick={ordenarListadoActual}>Ordenar listado actual</button>
        <button onClick={reiniciarListado}>Reiniciar el listado</button>
        <button
          onClick={() => {
            desmatricular("Juan");
          }}
        >
          Desmatricular
        </button>
      </div>
      <ul>
        {discentesSegundoDaw.map((v) => (
          <li key={v.id}>
            id: {v.id} <br />
            Nombre: {v.nombre} <br />
            Apellidos: {v.apellidos} <br />
            Curso: {v.curso} <br />
            Aficiones: {v.aficiones.join(", ")} <br />
            Comida: {v.comida} <br /> <br /> <br />
            {/* Para que haya bastante separación entre discentes */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matricula;
