import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserMatches(props) {
  const [matchList, setMatchList] = useState([]);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio-ramos-guimaraes/matches`
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatchList(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => getMatches(), []);

  return (
    <div>
      {matchList.map((match) => {
        return (
          <div>
            <div>
              <img src={match.photo} alt={match.name} width={"100vw"} />
              <p>{match.name}</p>
              <p>{match.age}</p>
            </div>
          </div>
        );
      })}
      <br />

      <button onClick={props.changeScreenUsers}>Sair ⏏️</button>
    </div>
  );
}
