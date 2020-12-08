import React from 'react'
import './Cabecalho.css'


export default function Cabecalho({ preto }) {

     return (
         <header className={preto ? 'preto' : ''}>
             <div className="cabecalho--logo">
                 <a href="/">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
                 </a>
             </div>
             <div className="cabecalho--usuario">
                  <a href="/">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Grey_user_add_icon_%28Wikiproject_icons%29.svg" alt="usuario" />
                  </a>
             </div>
         </header>
     )

}











