import React from 'react'
import './FilmesDestaques.css'



export default function FilmesDestaques({item}) {

      return (
          <section className="destacado">
               <div>{item.original_name}</div>
          </section>
      )
}

