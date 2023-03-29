import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(function() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {return response.json()})
      .then(response => {setPokemon(response.results)})
      .catch((err) => {
        console.log(err);
      })}, []);  
    return (
    <div className="App">
      <ul>
        {
          pokemon.map((pokeObj, index)=>{
            return (<li key={index}>{pokeObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;