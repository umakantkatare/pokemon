/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function PokemonList({ name, image, id }) {
  return (
    <div>
     <Link to={`/pokemon/${id}`}>
     <div>{name} </div>
      <div>
        <img src={image} />
      </div>
     </Link>
     
    
    </div>
  );
}

export default PokemonList;
