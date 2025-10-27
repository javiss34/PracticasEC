import React, { useState } from 'react'
import './ContadorLikes.css'

const ContadorLikes = () => {
    //Creamos dos estados uno para likes y otro para dislikes.
    let[likes,setLikes]=useState(0);
    let[dislikes,setDislikes]=useState(0);

    const incrementarLikes = () => {
        let likesIncrementados  = likes + 1;
        setLikes(likesIncrementados);
    }
    const incrementarDislikes = () => {
        let dislikesIncrementados  = dislikes + 1;
        setDislikes(dislikesIncrementados);
    }

  return (
    <div className='contenedor_entero'>
        <h1>CONTADOR DE LIKES</h1>
        <div className='contenedor_likes'>
            <div>
                <button onClick={incrementarLikes}>Like</button>
                <h1>{likes}</h1>
            </div>
            <div>
                <button onClick={incrementarDislikes}>Dislike</button>
                <h1>{dislikes}</h1>
            </div>
            
        </div>
      
    </div>
  )
}

export default ContadorLikes
