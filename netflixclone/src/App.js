import React, { useEffect } from 'react'
import './App.css'
import Tmdb from './Tmdb'



export default function App() {
   useEffect(() => {
        const carregarTudo = async () => {
            // pegando a lista total
            let lista = await Tmdb.getListaCaseira()
            console.log(lista)
        }
        carregarTudo()
    }, [])

    return (
      <div>
          Olá Mundo!
      </div>
    )
}
