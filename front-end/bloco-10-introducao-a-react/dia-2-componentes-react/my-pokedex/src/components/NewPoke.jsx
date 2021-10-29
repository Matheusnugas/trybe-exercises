import React from 'react';
// import pokemons from '../data'

class NewPoke extends React.Component {
    render () {
        const pokeData = this.props.data
        console.log(pokeData)
        return (
            pokeData.map((pokemon) => {
                return (
                <section className = 'pokemonCard'>
                <ol>
                    <li>{pokemon.name}</li>
                    <li>{pokemon.type}</li>
                    <li>{`Average Weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</li>
                </ol>
                <img src={pokemon.image} alt={`${pokemon.name}'s photo`} />
            </section>
                )
            })
        )
    }
}

export default NewPoke;