/* eslint-disable no-unused-vars */
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UsePokemon from '../hooks/UsePokemon'
import PokemonDetails from '../pokemonDetails/PokemonDetails'

function CustomRoutes() {
  return (
   <Routes>
     <Route path='/' element={<UsePokemon/>} />
     <Route path='/pokemon/:id' element={<PokemonDetails/>} />
   </Routes>
  )
}

export default CustomRoutes