import React,{useState, useEffect} from 'react'
import {getAllPersons, getCharacter, searchCharacter} from '../api/api'
import InfoPersonaje from './infoPersonaje';
export default function ListadoPersonajes({numPagina}) {

    //implementar useMemo para la busqueda
    const [people, setPeople]=useState([]);

    const [character, setCharacter]=useState(null);

    //const [details, setDetails]=useState({});

    const getPeople=async (numPagina)=> {
        const personajes=await getAllPersons(numPagina)
        setPeople(personajes);
    }
    
    useEffect(()=>{
        getPeople(numPagina);
    }, [numPagina])

    // useEffect(()=>{
        
    // }, [people])

    // useEffect(()=>{
    //     setCharacter(character);
    // }, [character])

    async function handleClickCharacter(pcharacterUrl) {
        const characterAux = await getCharacter(pcharacterUrl);
        setCharacter(characterAux);
    }
    async function handleChangeSearch(e) {
        const cadena=e.target.value;
        const peopleAux=await searchCharacter(cadena);
        setPeople(peopleAux);
    }

  return (
    <div>
        <label>Filtrado personaje</label>
        <input type='text' onChange={handleChangeSearch}/>
        {
            people.map((element)=>(
                <ul key={element.name}>
                    <li onClick={()=>{handleClickCharacter(element.url)}}>{element.name}</li>
                </ul>
            ))
        }
        {
            character!==null ?
            <InfoPersonaje character={character}></InfoPersonaje>
            :
            <div></div>
        }
        
    </div>
  )
}
