import React from 'react'
import './LinhaFilmes.css'



export default function LinhaFilmes({ titulo, itens }) {

     return (
        <div>
           <h2>{titulo}</h2>
           <div className="listaFilmes--arealista">
                {itens.results.length > 0 && itens.results.map((item, chave) => (
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={chave} alt={item.original_title}/>
                ))}
           </div>
        </div>
     )

}




