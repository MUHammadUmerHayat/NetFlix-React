
const API_KEY = 'd1a948d363c23c06eb8c178559e91ece'

const API_BASE = 'https://api.themoviedb.org/3'

/* 
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários

*/

const buscaBasica = async (terminacao) => {
    const req = await fetch(`${API_BASE}${terminacao}`)
    const json = await req.json()
    return json
}

// eslint-disable-next-line
export default {
    getListaCaseira: async () => {
        return [
           { slug: 'originals', titulo: 'Originais da NetFlix', itens: await buscaBasica(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'trending', titulo: 'Recomendados para Você', itens: await buscaBasica(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'toprated', titulo: 'Em Alta', itens: await buscaBasica(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'action', titulo: 'Ação', itens: await buscaBasica(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'comedy', titulo: 'Comédia', itens: await buscaBasica(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'horror', titulo: 'Terror', itens: await buscaBasica(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'romance', titulo: 'Romance', itens: await buscaBasica(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) },
           { slug: 'documentary', titulo: 'Documentários', itens: await buscaBasica(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) }
        ]
    },

    getFilmeInfo: async (filmeId, tipo) => {
        let info = {}
    
        if (filmeId) {
            switch (tipo) {
               case 'movie':
                  info = await buscaBasica(`/movie/${filmeId}?language=pt-BR&api_key=${API_KEY}`)
               break
               case 'tv':
                  info = await buscaBasica(`/tv/${filmeId}?language=pt-BR&api_key=${API_KEY}`)
               break
               default:
                   info = null
               break           
            }
    
        }
         
        return info
    }

}



