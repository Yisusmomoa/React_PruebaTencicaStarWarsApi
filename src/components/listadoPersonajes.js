import React,{useState, useEffect} from 'react'
import {getAllPersons, getCharacter} from '../api/api'
import InfoPersonaje from './infoPersonaje';
export default function ListadoPersonajes({numPagina}) {

    const [people, setPeople]=useState([]);
    const [character, setCharacter]=useState({});
    const getPeople=async (numPagina)=> {
        const personajes=await getAllPersons(numPagina)
        setPeople(personajes);
    }
    
    // useEffect(()=>{
    //     getPeople(numPagina);
    // }, [])

    useEffect(()=>{
        getPeople(numPagina);
    }, [numPagina])

     function handleClickCharacter(characterUrl) {
        const characterAux=  getCharacter(characterUrl);
        setCharacter(characterAux);
        console.log(character)
    }
  return (
    <div>
        {
            people.map((element)=>(
                <ul key={element.name}>
                    <li onClick={()=>{handleClickCharacter(element.url)}}>{element.name}</li>
                </ul>
            ))
        }
        <InfoPersonaje character={character}></InfoPersonaje>
    </div>
  )
}
