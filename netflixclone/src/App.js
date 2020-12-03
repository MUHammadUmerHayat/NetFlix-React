import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import ListaFilmes from './components/LinhaFilmes'
import FilmesDestaques from './components/FilmesDestaques'


export default function App() {

   const [listaFilmes, setListaFilmes] = useState([])
   // eslint-disable-next-line
   const [dadosDestacados, setDadosDestacados] = useState(null)
   
   useEffect(() => {
        const carregarTudo = async () => {
            // pegando a lista total
            let lista = await Tmdb.getListaCaseira()
            console.log(lista)
            setListaFilmes(lista)

            // pegando o destacado
            let originais = lista.filter(cada => cada.slug === 'originals')
            let escolhidoAleatorio = Math.floor(Math.random() * (originais[0].itens.results.length - 1))
            let escolhido = originais[0].itens.results[escolhidoAleatorio]

            /* console.log(escolhido) */
            let escolhidoInfo = await Tmdb.getFilmeInfo(escolhido.id, 'tv')
            console.log(escolhidoInfo)

        }
        carregarTudo()
    }, [])

    return (
      <div className="pagina">

          {dadosDestacados && 
          <FilmesDestaques item={dadosDestacados} />}
          
          <section className="listas">
               {listaFilmes.map((item, chave) => (
                   <ListaFilmes key={chave} titulo={item.titulo} itens={item.itens} />
               ))}
          </section>          
      </div>
    )
}
