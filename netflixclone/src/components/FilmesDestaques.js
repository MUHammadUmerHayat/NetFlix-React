import React from 'react'
import './FilmesDestaques.css'



export default function FilmesDestaques({item}) {

      return (
          <section className="destacado" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
               {/* <div>{item.original_name}</div> */}
               <div className="destacado--vertical">
                   <div className="destacado--horizontal">
                        
                   </div>
               </div>
          </section>
      )
}

