import './App.css';
import React from 'react';
import pokemons from './data'
import NewPoke from './components/NewPoke'

function App() {
  return (
    <div>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <NewPoke data={pokemons}/>
      </main>
    </div>
  )
}

export default App;
