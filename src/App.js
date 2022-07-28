import logo from './logo.svg';
import './App.css';
import ListadoPersonajes from './components/listadoPersonajes';
import React,{useState} from 'react'

function App() {

  const [numPagina, setNumPagina]=useState(1);

  function incNumPagina() {
    setNumPagina(numPagina+1)
  }

  function decNumPagina() {
    if(numPagina>1){
      setNumPagina(numPagina-1)
    }
    
  }

  return (
    <div className="App">
      <label>Filtrado personaje</label>
      <input type='text'/>
      <ListadoPersonajes numPagina={numPagina}></ListadoPersonajes>

      <button onClick={decNumPagina}>Prev</button>
          <p>{numPagina}</p>
      <button onClick={incNumPagina}>Next</button>

      
    </div>
  );
}

export default App;
