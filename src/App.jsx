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
import { useEffect } from "react"


function App() {
  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      console.log(response);
    })
  }, []);

  return (
    <div className="App">
      <h3>Desafio React</h3>
      <h1>Consumir API Pokemon</h1>
    </div>
  )
}

export default App
