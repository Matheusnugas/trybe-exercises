import React from "react";
// import pokemons from '../data'

class NewPoke extends React.Component {
  render() {
    const pokeData = this.props.data;
    return pokeData.map((pokemon) => {
      return (
        <section className="pokemonCard" key={pokemon.name}>
          <ol>
            <li>{pokemon.name}</li>
            <li>{pokemon.type}</li>
            <li>{`Average Weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</li>
          </ol>
          <img src={pokemon.image} alt={`${pokemon.name}'s photo`} />
        </section>
      );
    });
  }
}

export default NewPoke;
