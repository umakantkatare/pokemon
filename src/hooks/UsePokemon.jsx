/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "../pokemon/PokemonList";

function UsePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

  async function downloadPokemon() {
    const response = await axios.get(pokemonUrl);
    const pokemonResults = response.data.results;
    // console.log(response.data);
    // console.log(pokemonResults);
    const pokemonPromise = pokemonResults.map((pokemon) => {
      return axios.get(pokemon.url);
    });
    console.log(pokemonPromise);
    const pokemonData = await axios.all(pokemonPromise);
    console.log(pokemonData);
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

    console.log(res);
    setPokemonList(res);
  }
  useEffect(() => {
    downloadPokemon();
  }, []);
  return (
    <div>
      {pokemonList.map((p) => (
        <PokemonList name={p.name} image={p.Image} key={p.id} />
      ))}
    </div>
  );
}

export default UsePokemon;
