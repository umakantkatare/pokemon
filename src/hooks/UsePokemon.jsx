/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";

function UsePokemon() {
  async function downloadPokemon() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(response.data);
  }
  useEffect(() => {
    downloadPokemon();
  }, []);
  return <div>UsePokemon</div>;
}

export default UsePokemon;
