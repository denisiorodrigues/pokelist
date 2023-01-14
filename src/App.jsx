/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon
Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência
Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id
DICA:
imagem => sprites.front_default
experiência => base_experience
EXTRA: se puder ordene por nome.
*/

import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const [list, setList] = useState([])

  const fetchListData = () =>{
    axios
    .get('https://pokeapi.co/api/v2/pokemon').then(response => {
      const sortedArray = [...response.data.results];

      sortedArray.sort((a,b) => {
        return a.name.localeCompare(b.name);
      });

      setList(sortedArray);
    })
  };

  useEffect(() => {
    fetchListData()
  }, []);

  return (
    <div className="App">
      <h3>Desafio React</h3>
      <h1>Consumir API Pokemon</h1>
      <hr/>
      {
        list.map(item => <Pokemon key={item.name} data={item} />)
      }
    </div>
  )
}


const Pokemon = ({data}) => {
  const [details, setDetails] = useState(null);
  
  const fetchIndividualPokemon = ()=> {
    axios.get(data.url).then((response) => setDetails(response.data));
  }
  
  useEffect(() => {
    fetchIndividualPokemon();
  }, [])

  if(details === null) {
    return <div>Carregando...</div>
  }

  return <>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>
        <img src={details.sprites.front_default} style={{ width: 50, marginRight: 20}}></img>
      </span>
      <span>
        <b>{details.name.toUpperCase()}</b>
      - EXP {details.base_experience}
      </span>
      </div>
  </>;
};

export default App
