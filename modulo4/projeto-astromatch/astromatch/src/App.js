import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import UserMatches from "./components/UserMatches";
export default function App() {
  const [screen, setScreen] = useState("userCard");

  const mainScreen = () => {
    switch (screen) {
      case "userCard":
        return <UserCard changeScreenMatches={changeScreenMatches} />;

      case "userMatches":
        return <UserMatches changeScreenUsers={changeScreenUsers} />;
      default:
        <p>Algo deu errado!</p>;
        break;
    }
  };

  const changeScreenMatches = () => {
    setScreen("userMatches");
  };

  const changeScreenUsers = () => {
    setScreen("userCard");
  };

  const clearMatches = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio-ramos/clear
  `
      )
      .then((res) => {
        alert("Matches log cleared!");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>a s t r o m a t c h</h1>
      {mainScreen()}
      <button onClick={changeScreenMatches}>Acessar Matches</button>
      <button onClick={clearMatches}>Limpar Matches</button>
    </div>
  );
}
