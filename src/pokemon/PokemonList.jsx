/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function PokemonList({ name, image, id }) {
  return (
    <div className=' flex justify-center items-center flex-col gap-2'>
     <Link to={`/pokemon/${id}`}>
     <div className="text-2xl">{name} </div>
      <div>
        <img className="m-5"  src={image} />
      </div>
     </Link>
     
    
    </div>
  );
}

export default PokemonList;
