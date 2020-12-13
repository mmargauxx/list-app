import React from "react";
import Ingredient from "./Base";

export default function BaseList({ list }) {
  return (
    <ul className="ingredients">
      {list.map((base, i) => (
        <Base key={i} {...base} />
      ))}
    </ul>
  );
}
