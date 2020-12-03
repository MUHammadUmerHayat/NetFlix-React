import React from 'react'
import './LinhaFilmes.css'



export default function LinhaFilmes({ titulo, itens }) {

     return (
        <div>
           <h2>{titulo}</h2>
           <div className="listaFilmes--arealista">
                <div className="listaFilmes--lista">
                    {itens.results.length > 0 && itens.results.map((item, chave) => (
                        <div className="listaFilmes--item" key={chave}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={chave} alt={item.original_title}/>

                        </div>
                    ))}

                </div>

           </div>
        </div>
     )

}




