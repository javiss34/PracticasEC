import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './components/ejercicio1/Contenedor.jsx'
import Interprete from './components/ejercicio2/Interprete.jsx'
import Pelicula from './components/ejercicio3/Pelicula.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contenedor>
        <h1>Práctica 2.03</h1>
        <h2>Mi primer componente</h2>

        <Interprete nombre="Pablo Chiapella" foto="https://album.mediaset.es/cimg/1000001/2017/02/14/p1.jpg">
          Pablo Chiapella Cámara (Albacete, 1 de diciembre de 1976),apodado Chape, es un actor y presentador español con raíces italianas. ​ Es conocido principalmente por el papel de Amador Rivas en la serie de televisión La que se avecina.
        </Interprete>

        <Pelicula titulo='La que se avecina' direccion='Alberto Caballero y Laura Caballero' cartela='https://upload.wikimedia.org/wikipedia/commons/0/09/LaQueSeAvecina.jpg'>
          "La que se avecina" es una comedia española que satiriza la vida en comunidad a través de las historias de los variopintos vecinos de un edificio de nueva construcción en las afueras de una gran ciudad. La serie narra las aventuras y conflictos cotidianos de personajes excéntricos y llenos de peculiaridades, utilizando el humor para explorar las complejas y a menudo surrealistas relaciones entre ellos en el complejo residencial Mirador de Montepinar.

        <Interprete nombre="Jordi Sánchez" foto="https://album.mediaset.es/cimg/1000001/2017/02/14/r1.jpg">
          Jordi Sánchez Zaragoza es un actor, guionista, dramaturgo y escritor español nacido el 13 de mayo de 1964 en Barcelona, conocido por sus papeles en series de televisión como «La que se avecina» y «Plats bruts». Tras estudiar enfermería, se volcó en la interpretación, fundando compañías de teatro y desarrollando una prolífica carrera en escena, cine y televisión. También ha escrito obras de teatro y libros de relatos, y ha recibido premios como el Ondas y el Max por su trabajo en «Plats bruts». 
        </Interprete>

        <Interprete nombre="José Luis Gil" foto="https://static.lasprovincias.es/www/multimedia/202112/01/media/TF08EUD2.jpg">
          José Luis Gil Sanz es un actor, director y actor de doblaje español nacido en Zaragoza en 1957, conocido por sus papeles en televisión como Juan Cuesta en Aquí no hay quien viva y Enrique Pastor en La que se avecina. Su carrera incluye trabajo en teatro y cine, así como una prolífica trayectoria en el doblaje, donde ha dado voz a actores como Tim Allen. En 2021 sufrió un ictus que le obligó a pausar su actividad profesional.
        </Interprete>

        <Interprete nombre="Vanesa Romero" foto="https://upload.wikimedia.org/wikipedia/commons/7/7f/Vanesa_Romero_2019.jpg">
        Vanesa Romero es una actriz, modelo y presentadora española nacida en Alicante el 4 de junio de 1978, conocida por sus papeles en las series de televisión Aquí no hay quien viva y La que se avecina. Tras una carrera en el atletismo que no pudo continuar por una lesión, empezó como modelo y presentadora antes de dedicarse a la actuación, su verdadera vocación.
      
      </Interprete>
      </Pelicula>
      </Contenedor>

    </>
  )
}

export default App;
