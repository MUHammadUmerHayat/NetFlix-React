import React from 'react'
import './LinhaFilmes.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default function LinhaFilmes({ titulo, itens }) {

     return (
        <div className="listaFilmes">
           <h2>{titulo}</h2>
           <div className="listaFilmes--esquerdo">
                <ArrowBackIosIcon style={{fontSize: 50}} />
           </div>
           <div className="listaFilmes--direito">
                <ArrowForwardIosIcon style={{fontSize: 50}} />
           </div>

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




