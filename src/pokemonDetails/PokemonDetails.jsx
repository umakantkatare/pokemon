/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'

function PokemonDetails() {
  const [pokemon, setPokemon] = useState({})
  const {id} = useParams()
  async function DownloadPokemon () {
   const  Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   console.log(Response.data)
   setPokemon({
    name: Response.data.name,
    image: Response.sprites.other
    ? Response.data.sprites.other.dream_world.front_default
    : Response.data,
    weight: Response.data.weight,
    height: Response.data.height,
    types: Response.data.types.map((t) => t.type.name )
   })
   useEffect(() => {
    DownloadPokemon()
   },[])
   
  }
  return (
    <div>PokemonDetails</div>
  )
}

export default PokemonDetails