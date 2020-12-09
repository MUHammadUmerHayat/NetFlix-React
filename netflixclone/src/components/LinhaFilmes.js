import React from 'react'
import './LinhaFilmes.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default function LinhaFilmes({ titulo, itens }) {

     const direcionarSetaEsquerda = () => {

     }

     const direcionarSetaDireita = () => {
          
     }

     return (
        <div className="listaFilmes">
           <h2>{titulo}</h2>
           <div className="listaFilmes--esquerdo" onClick={direcionarSetaEsquerda}>
                <ArrowBackIosIcon style={{fontSize: 50}} />
           </div>
           <div className="listaFilmes--direito" onClick={direcionarSetaDireita}>
                <ArrowForwardIosIcon style={{fontSize: 50}} />
           </div>

           <div className="listaFilmes--arealista">
                <div className="listaFilmes--lista" style={{marginLeft: -400}}>
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




