import React from "react";
import BaseList from "./BaseList";
import Instructions from "./Instructions";

function Pokemon({ name, base }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <BaseList list={base} />
    </section>
  );
}

export default Pokemon;
