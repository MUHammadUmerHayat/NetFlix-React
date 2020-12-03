import React from 'react'
import './FilmesDestaques.css'



export default function FilmesDestaques({item}) {

      return (
          <section className="destacado" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
               {/* <div>{item.original_name}</div> */}
               <div className="destacado--vertical">
                   <div className="destacado--horizontal">
                        <div className="destacado--nome">{item.original_name}</div>
                        <div className="destacado--info">
                            <div className="destacado--pontos">{item.vote_average} pontos</div>
                            <div className="destacado--ano">2099</div>
                            <div className="destacado-temporadas">{item.number_of_seasons} temporadas</div>
                            <div>{}</div>
                        </div>
                   </div>
               </div>
          </section>
      )
}

