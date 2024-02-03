/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

function UsePokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  async function downloadPokemon() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemonResults = response.data.results;
    // console.log(response.data);
    // console.log(pokemonResults);
    const pokemonPromise = pokemonResults.map((pokemon) => {
      axios.get(pokemon.url);
    });
    const pokemonData = await axios.all(pokemonPromise);
    console.log(pokemonData);

    const res = pokemonData.map((pokeData) => {
      pokeData.data;
    });
    console.log(res);
    setPokemonList(res);
  }
  useEffect(() => {
    downloadPokemon();
  }, []);
  return <div>UsePokemon</div>;
}

export default UsePokemon;
