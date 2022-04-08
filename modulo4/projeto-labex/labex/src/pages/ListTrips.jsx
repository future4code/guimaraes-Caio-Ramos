import React from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/BaseUrl";
import { useRequestData } from "../hooks/useRequestData";
import { goBack, goToApplicationForm } from "../constants/Navigation";

const ListTrips = () => {
  const [listTripsData] = useRequestData(`${baseUrl}/trips`);
  const navigate = useNavigate();
  const renderedTrips = listTripsData.map((trip) => {
    return (
      <div>
        <p key={trip.id}>Nome:{trip.name}</p>
        <p key={trip.id}>Descrição:{trip.description}</p>
        <p key={trip.id}>Planeta:{trip.planet}</p>
        <p key={trip.id}>Duração em dias:{trip.durationInDays}</p>
        <p key={trip.id}>Data{trip.date}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>ListTrips</h2>
      {renderedTrips}
      <button
        onClick={() => {
          goToApplicationForm(navigate);
        }}
      >
        ApplicationForm
      </button>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
    </div>
  );
};
export default ListTrips;
