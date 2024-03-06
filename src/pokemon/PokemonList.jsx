/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function PokemonList({ name, image, id }) {
  return (
    <div>
      <Link to={`/pokemon/${id}`}>
        <div className=" flex flex-col items-center justify-center ">
          <img className="m-5 w-[300px] h-[300px] " src={image} />
          <div className="text-2xl   ">{name} </div>
         
        </div>
      </Link>
    </div>
  );
}

export default PokemonList;
