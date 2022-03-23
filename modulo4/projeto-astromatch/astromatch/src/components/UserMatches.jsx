import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserMatches(props) {
  const [matchList, setMatchList] = useState([]);

  useEffect =
    (() => {
      getMatches();
    },
    []);
  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio-ramos/matches
`
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatchList(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderedMatches = () => {
    matchList.map((match) => {
      return (
        <div>
          <div>
            {" "}
            <img src={match.photo} alt={match.name} /> {match.name}
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderedMatches}</div>
      <button onClick={props.changeScreenUsers}>Sair</button>
    </div>
  );
}
