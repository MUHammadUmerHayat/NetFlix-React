import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'



export default function App() {

   const [listaFilmes, setListaFilmes] = useState([])
   
   useEffect(() => {
        const carregarTudo = async () => {
            // pegando a lista total
            let lista = await Tmdb.getListaCaseira()
            console.log(lista)
            setListaFilmes(lista)
        }
        carregarTudo()
    }, [])

    return (
      <div className="pagina">
          <section className="listas">
               {listaFilmes.map((item, chave) => (
                   <div>
                      {item.titulo}
                   </div>
               ))}
          </section>          
      </div>
    )
}
