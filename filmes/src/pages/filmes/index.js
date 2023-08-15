import './index.scss';
import { useState } from 'react';
import axios from 'axios';

export default function Filmes() {

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
    <div className="pagina-filme">
      <div className='container'>
      <h1 className='filme'> IMDB </h1>
      <div className='cabecalho-filme'>
        </div>
        <h1 className='text1'> Consulta de Filmes </h1>
        <div className='pesq'>
        <p>Nome</p>

          <div className='digitar'>
          
          <input type='text' value={filme} onChange={e => setFilme(e.target.value)} />
          <button className='btn1' onClick={buscar}> <img src='/assets/images/icon-buscar.png'/> </button>
          </div>
          
        </div>
        <div className='last'>

          <div className='classes'>
            <h1><strong>Código</strong></h1>
            <h1><strong>Título</strong></h1>
            <h1><strong>Ano</strong></h1>
          </div>
          <ul>
            {listaFilmes.map(filme => (
              <div className='rolagem'>
              <li className='lista-filmes' key={filme.imdbID}>
                <div>
                <strong>{filme.imdbID}</strong>
                </div> 
                <div>
                 {filme.Title}
                </div>
                <div>
                <strong>{filme.Year}</strong>
                </div>
                <div>
                  <img className='logo-filme' src={filme.Poster} alt={`Logo do filme ${filme.Title}`} />
                </div>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}