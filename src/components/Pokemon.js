import React from "react";
import BaseList from "./BaseList";
import Instructions from "./Instructions";

function Pokemon({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <BaseList list={base} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}

export default Pokemon;
