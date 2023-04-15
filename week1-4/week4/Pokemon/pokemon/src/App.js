import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(function() {
axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
.then(response=>{setPokemon(response.data.results)})
}, []); 
    return (
    <div className="App">
      <ul>
        {
        pokemon.map(function(poke, index){
            return (<li key={index}>{poke.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;