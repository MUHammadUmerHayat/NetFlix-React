import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import ListaFilmes from './components/LinhaFilmes'
import FilmesDestaques from './components/FilmesDestaques'


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
          <FilmesDestaques />

          <section className="listas">
               {listaFilmes.map((item, chave) => (
                   <ListaFilmes key={chave} titulo={item.titulo} itens={item.itens} />
               ))}
          </section>          
      </div>
    )
}
