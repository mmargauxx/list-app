import React from "react";
import "./App.css"; 
import Pokemon from "./Pokemon";

function Pokedex({ pokemons }) {
  return (
    <article>
      <header>
        <h1>Pokedex</h1>
      </header>
      <div className="pokemons">
        {pokemons.map((pokemon, i) => (
          <Pokemon key={i} {...pokemon} />
        ))}
      </div>
    </article>
  );
}

export default Pokedex;
