import React from "react";
import Pokemon from "./Pokemon";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Pokedex</h1>
      </header>
      <div className="recipes">
        {pokemon.map((pokemon, i) => (
          <Pokemon key={i} {...pokemon} />
        ))}
      </div>
    </article>
  );
}

export default Menu;
