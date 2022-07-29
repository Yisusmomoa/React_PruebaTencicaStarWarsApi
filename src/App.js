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
  const stylesContainerButtons={
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    marginRight:'10px'
  }

  return (
    <div className="App">
     
      <ListadoPersonajes numPagina={numPagina}></ListadoPersonajes>

      <div style={stylesContainerButtons}>
        <button onClick={decNumPagina}>Prev</button>
            <p>|{numPagina}|</p>
        <button onClick={incNumPagina}>Next</button>
      </div>
      
    </div>
  );
}

export default App;
