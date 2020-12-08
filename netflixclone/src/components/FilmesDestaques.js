import React from 'react'
import './FilmesDestaques.css'


export default function FilmesDestaques({item}) {

      console.log('*', item)
      let  primeiroDados = new Date(item.first_air_date)

      let generos = []
      for (let cada in item.genres) {
         generos.push(item.genres[cada].name)
      }

      return (
          <section className="destacado" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
               {/* <div>{item.original_name}</div> */}
               <div className="destacado--vertical">
                   <div className="destacado--horizontal">
                        <div className="destacado--nome">{item.original_name}</div>
                        <div className="destacado--info">
                            <div className="destacado--pontos">{item.vote_average} pontos</div>
                            <div className="destacado--ano">{primeiroDados.getFullYear()}</div>
                            <div className="destacado-temporadas">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>

                        </div>
                        <div className="destacado--descricao">{item.overview}</div>
                        <div className="destacado--botoes">
                              <a href={`/watch/${item.id}`} className="destacado--bassistir">▶ Assistir</a>
                              <a href={`/list/add/${item.id}`} className="destacado--blista">+ Minha Lista</a>
                        </div>
                        <div className="destacado--generos"><strong>Gêneros:</strong> {generos.join(', ')}</div>
                   </div>
               </div>
          </section>
      )
}

