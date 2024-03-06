/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "../pokemon/PokemonList";

function UsePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonUrl, setPokemonUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  async function downloadPokemon() {
    const response = await axios.get(pokemonUrl);
    const pokemonResults = response.data.results;
    setPrev(response.data.previous);
    setNext(response.data.next);
    // console.log(response.data);
    // console.log(pokemonResults);
    const pokemonPromise = pokemonResults.map((pokemon) => {
      return axios.get(pokemon.url);
    });
    // console.log(pokemonPromise);
    const pokemonData = await axios.all(pokemonPromise);
    // console.log(pokemonData);
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        name: pokemon.name,
        id: pokemon.id,
        Image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon,
        types: pokemon.types,
      };
    });

    // console.log(res);
    setPokemonList(res);
  }
  useEffect(() => {
    downloadPokemon();
  }, [pokemonUrl]);
  return (
    <div className="bg-slate-300 ">
     
      <div className="w-full bg-black text-center p-1 mb-5">
        <h1 className="  text-4xl leading-tight font-bold mb-1 p-2 text-center  text-white">
          pokemon
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-3 m-auto justify-center text-center p-2 w-full ">
        {pokemonList.map((p) => (
          <PokemonList name={p.name} image={p.Image} key={p.id} id={p.id} />
        ))}
      </div>
     

      <div className=" text-center p-3 m-5">
        <button
          className=" bg-slate-800 text-white m-2 px-5 py-2 rounded-sm"
          disabled={prev === null}
          onClick={() => {
            setPokemonUrl(prev);
          }}
        >
          prev
        </button>
        <button
          className=" bg-slate-800 m-2 px-5 py-2 text-white rounded-sm"
          disabled={next === null}
          onClick={() => {
            setPokemonUrl(next);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default UsePokemon;
