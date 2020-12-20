import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import ListaFilmes from './components/LinhaFilmes'
import FilmesDestaques from './components/FilmesDestaques'
import Cabecalho from './components/Cabecalho'
import carregamento from './imagens/carregamento.gif'


export default function App() {
   
   const [listaFilmes, setListaFilmes] = useState([])
   // eslint-disable-next-line
   const [dadosDestacados, setDadosDestacados] = useState(null)
   // eslint-disable-next-line
   const [cabecalhoPreto, setCabecalhoPreto] = useState(false)
   
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
            /* console.log(escolhidoInfo) */
            setDadosDestacados(escolhidoInfo)

        }
        carregarTudo()
    }, [])

    useEffect(() => {   

        const monitoradorRolagem = () => {
            if (window.scrollY > 30) {
               setCabecalhoPreto(true)
            }
            else {
               setCabecalhoPreto(false)
            }
         }
         
         window.addEventListener('scroll', monitoradorRolagem)
         
         return () => {
            window.removeEventListener('scrolll', monitoradorRolagem)
         }
         
    }, [])

    return (
      <div className="pagina">

          <Cabecalho preto={cabecalhoPreto} />

          {dadosDestacados && 
          <FilmesDestaques item={dadosDestacados} />}
          
          <section className="listas">
               {listaFilmes.map((item, chave) => (
                   <ListaFilmes key={chave} titulo={item.titulo} itens={item.itens} />
               ))}
          </section>
          <footer>
              Feito com <span role="img" aria-label="coração">&#x1F497;</span><br/>
              Direitos de imagem para Netflix<br/>
              Dados pegos do site Themoviedb.org
          </footer>
          {listaFilmes.length <= 0 && 
            <div className="carregamento">
                <img src={carregamento} alt="carregando" />    
            </div>          
          
          }
      </div>
    )
}
