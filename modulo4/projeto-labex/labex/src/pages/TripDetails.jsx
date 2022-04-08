import React, { useState, useEffect } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage, goToCreateTrip } from "../constants/Navigation";

const TripDetails = () => {
  const [trip, setTrip] = useState("");
  const navigate = useNavigate();

  useProtectedPage();

  const yourTrips = () => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-ramos-guimaraes/trip/9UumLxT1nIZLppIKamYN`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.trip);
        setTrip(res.data.trip);
      })
      .catch((err) => console.log(err.response));
  };
  useEffect(() => {
    yourTrips();
  }, []);

  /* const renderedTrips = () => {
    yourTrips.map((trips) => {
      return (
        <div key={trips.id}>
          <p> {trips.planet}</p>
          <p> {trips.durationInDays}</p>
          <p> {trips.date}</p>
          <p> {trips.name}</p>

          <p> {trips.description}</p>
        </div>
      );
    });
  }; */

  return (
    <div>
      <h2>TripDetails</h2>
      {/*  {renderedTrips} */}
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Voltar para Home
      </button>
      <button
        onClick={() => {
          goToCreateTrip(navigate);
        }}
      >
        Criar Viagens
      </button>
    </div>
  );
};
export default TripDetails;
