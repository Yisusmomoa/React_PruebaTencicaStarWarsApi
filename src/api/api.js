import axios from "axios";

export const getAllPersons=async (numPagina)=>{
    try {
        let url=`https://swapi.dev/api/people/?page=${numPagina}`;
        const res=await axios(url) 
        return res.data.results;
    } catch (error) {
        return error;
    }   
}

export const getCharacter=async (url)=>{
    try {
        const res=await axios(url);
        return res.data;
    } catch (error) {
        
    }
}

export const searchCharacter=async(cadena)=>{
    let url=`https://swapi.dev/api/people/?search=${cadena}`
    try {
        const res=await axios(url)
        return res.data.results;
    } catch (error) {
        
    }
}

