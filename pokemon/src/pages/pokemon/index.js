import './index.scss';
import { useState } from 'react';
import axios from 'axios';

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
  
    async function buscarPokemons() {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`;
  
      const response = await axios.get(url);
  
      const listaPokemons = [];
  
      for (const item of response.data.results) {
        const pokemonResp = await axios.get(item.url);
  
        const imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;
  
        let tipos = '';
        for (const t of pokemonResp.data.types) {
          tipos = tipos + t.type.name + ' ';
        }
  
        listaPokemons.push({
          nome: item.name,
          imagem: imagem,
          tipos: tipos,
        });
      }
  
      setPokemons(listaPokemons);
    }
  
    function buscarMaisPokemons() {
      setOffset(offset + 8);
      buscarPokemons();
    }
  
    return (
      <div className='pagina-pokemon'>
        <div className='cab'>
          <img src='/assets/images/logoPokedex 1.png' alt='Logo Pokedex' />
          <button className='btn' onClick={buscarPokemons}>
            Encontrar Pokemons
          </button>
        </div>
        
        <div className='lista'>
          {pokemons.map((item) => (
            <div className='card-pokemon' key={item.nome}>
              <img className='img1' src={item.imagem} alt={item.nome} />
              <h1 className='t1'>{item.nome}</h1>
              <p className='t2'>{item.tipos}</p>
            </div>
          ))}
        </div>
  
        {pokemons.length > 0 && (
          <div className='buscar-mais'>
            <button className='btn' onClick={buscarMaisPokemons}>
              Buscar Mais
            </button>
          </div>
        )}
      </div>
    );
  }