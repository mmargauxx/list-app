import React from "react";
import Base from "./Base";

export default function BaseList({ list }) {
  return (
    <ul className="bases">
      {list.map((base, i) => (
        <Base key={i} {...base} />
      ))}
    </ul>
  );
}
