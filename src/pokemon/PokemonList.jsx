/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function PokemonList({ name, image }) {
  return (
    <div>
      <div>{name} </div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
}

export default PokemonList;
