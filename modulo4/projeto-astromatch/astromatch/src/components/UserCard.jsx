import React, { useEffect, useState } from "react";
import UserMatches from "./UserMatches";
import axios from "axios";

export default function UserCard(props) {
  const [user, setUser] = useState([]);

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio-ramos-guimaraes/person`
      )
      .then((res) => {
        console.log(res.data.profile);
        setUser(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const likePerson = () => {
    const body = {
      id: user.id,
      choice: true,
    };

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio-ramos-guimaraes/choose-person`,
        body
      )
      .then((res) => {
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dislikePerson = () => {
    const body = {
      id: user.id,
      choice: false,
    };

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio-ramos/choose-person`,
        body
      )
      .then((res) => {
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <img src={user.photo} alt={user.name} />
        <p>
          {user.name}, {user.age}
        </p>
        <p>{user.bio}</p>
      </div>
      <div>
        <button onClick={likePerson}>Like</button>
        <button onClick={dislikePerson}>Dislike</button>
      </div>
      <div>
        <button onClick={props.changeScreenMatches}>Mostrar Matches</button>
      </div>
    </div>
  );
}
