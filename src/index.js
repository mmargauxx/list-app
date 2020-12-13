import React from "react";
import { render } from "react-dom";
import Pokedex from "./components/Pokedex";
import data from "./data/pokedata.json";

render(
  <Pokedex pokemons={data} />,
  document.getElementById("root")
);
