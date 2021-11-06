import "./App.css";
import React from "react";
import pokemons from "./data";
import NewPoke from "./components/NewPoke";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filterInput: "",
      filterButton: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ filterInput: event.target.value, filterButton: "" });
  }

  handleClick(event) {
    this.setState({ filterButton: event.target.value, filterInput: "" });
  }

  render() {
    const { filterInput, filterButton } = this.state;
    return (
      <div>
        <header>
          <h1>Pokedex</h1>
          <label htmlFor="nameInput">Pokemon Name:</label>
          <input onChange={this.handleChange} value={filterInput} type="text" />
          <button onClick={this.handleClick} value={"Fire"}>
            Fogo
          </button>
          <button onClick={this.handleClick} value={"Psychic"}>
            Psíquico
          </button>
        </header>
        <main>
          {filterButton !== "" ? (
            <NewPoke
              data={pokemons.filter((pokemon) => {
                return pokemon.type.includes(filterButton);
              })}
            />
          ) : undefined}
          {filterInput !== "" ? (
            <NewPoke
              data={pokemons.filter((pokemon) =>
                pokemon.name.startsWith(filterInput)
              )}
            />
          ) : undefined}
        </main>
      </div>
    );
  }
}

export default App;
