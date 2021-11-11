import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setpokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setpokemonData(toArray);

      console.log(res)
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text" 
            onChange={handleChange} 
            placeholder="Nome do Pokemon"/>
        </label>
        {pokemonData.map((data) => {
          return(
            <div className="container">
              <img src={data.sprites["front_default"]}/>
              <div className="divTable"> 
                <div className="divTableBody"> 
                  <div className="divTableRow"> 
                    <div className="divTableCell">Tipo</div>
                    <div className="divTableCell">{pokemonType}</div>
                  </div>
                  <div className="divTableRow"> 
                    <div className="divTableCell">Altura</div>
                    <div className="divTableCell">
                      {" "}
                      {data.height/10} m
                    </div>
                  </div>
                  <div className="divTableRow"> 
                    <div className="divTableCell">Peso</div>
                    <div className="divTableCell">
                        {" "}
                        {data.weight /10} kg
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </form>
    </div>
  );
}

export default App;

