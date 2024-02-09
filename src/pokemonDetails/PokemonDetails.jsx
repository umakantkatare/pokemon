/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'

function PokemonDetails() {
  const [pokemon, setPokemon] = useState({})
  const {id} = useParams()
  // console.log(id)
  async function downloadPokemon () {
   const  Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   console.log(Response.data)
   setPokemon({
    name: Response.data.name,
    image: 
     Response.data.sprites.other.dream_world.front_default,
   
    weight: Response.data.weight,
    height: Response.data.height,
    types: Response.data.types.map((t) => t.type.name )
   })
  
   
  }
  useEffect(() => {
    downloadPokemon()
   },[])
  return (
    <div className=' flex justify-center items-center flex-col gap-2'>
<div className=' font-bold text-2xl'>Name: {pokemon.name}</div>
<img src={pokemon.image} alt={pokemon.name} className=' m-5' />
<div className=' font-bold text-2xl'>Weight: {pokemon.weight}</div>
<div className=' font-bold text-2xl'>Height: {pokemon.height}</div>
    </div>
    
  )
}

export default PokemonDetails