import React from 'react'

export default function InfoPersonaje({character}) {
  return (
    <div>
      <h1>Name: {character.name}</h1>
      <p>height: {character.height}</p>
      <p>mass: {character.mass}</p>
      <p>birth_year: {character.birth_year}</p>
    </div>
  )
}
