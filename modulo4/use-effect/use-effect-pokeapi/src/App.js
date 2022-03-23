import React, { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";
import axios from "axios";

import {
  StyledBody,
  StyledMain,
  StyledHeader,
  StyledCore,
} from "./components/styled";

export default function App(props) {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeNames = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledBody>
      <StyledHeader>
        <h1>PokéAPI</h1>
      </StyledHeader>
      <StyledMain>
        <select onChange={changePokeNames}>
          <option value={""}>Nenhum</option>
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokeName={pokeName} />}
      </StyledMain>
    </StyledBody>
  );
}
