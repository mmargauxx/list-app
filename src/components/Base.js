import React from "react";

export default function Base({ HP, Attack, Defense, Speed }) {
  return (
    <li>
      {HP} {Attack} {Defense} {Speed}
    </li>
  );
}
