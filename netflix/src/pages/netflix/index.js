import './index.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Netflix() {

  const [filme, setFilme] = useState('');
  const [listaFilmes, setListaFilmes] = useState([]);

  async function buscar() {
    let url = `https://www.omdbapi.com?apikey=b99d19ab&s=` + filme;

    try {
      let response = await axios.get(url);
      setListaFilmes(response.data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (
    <div className="pagina-netflix">
      <div className='container'>

        <img src='/assets/images/friends.png' alt='' height={790}/>

          <div className='cab'>
            <img src='/assets/images/logo.png' alt=''/>
            <h1>Inicio</h1>
            <h1>Séries</h1>
            <h1>Filmes</h1>
            <h1>Bombando</h1>
            <h1>Minha Lista</h1>
          </div>
        
          <div className='digi'>
          
          <input type='text' placeholder="Pesquise pelo título" value={filme} onChange={e => setFilme(e.target.value)} /> 
          <button className='btn1' onClick={buscar}> <img src='/assets/images/lupa2.png'alt=''/> </button>

          </div>

          <div className='usuario'>
            <h1>Bruno</h1>
            <img src='/assets/images/sininho.png' height={25} alt=''/>
            <img src='/assets/images/carinha.png' alt=''/>
          </div>



          <div className='mid'>

            <h1>Friends</h1>

            <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>

            <button>Assistir</button>

          </div>
          
          
      </div>

        <div className='last'>

          <h1>Resultado da Busca</h1>

            <div className='session'>
            {listaFilmes.map(filme => (
              <div className='rolagem'>
              <div className='lista-filmes' key={filme.imdbID}>
                <div>
                  <img className='img-filme' src={filme.Poster} alt='' />
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}