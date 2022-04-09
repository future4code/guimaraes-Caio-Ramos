import React from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/BaseUrl";
import useRequestData from "../hooks/useRequestData";
import { goBack, goToApplicationForm } from "../constants/Navigation";

const ListTrips = () => {
  const [listTripsData] = useRequestData(`${baseUrl}/trips`);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Lista de Viagens</h2>
      {listTripsData?.trips.map((trip) => {
        return (
          <div>
            <p key={trip.id}>
              {" "}
              Nome:
              {trip.name}
            </p>
            <p> Descrição: {trip.description} </p>
            <p> Planeta: {trip.planet} </p>
            <p> Duração em dias: {trip.durationInDays}</p>
            <p> Data: {trip.date}</p>
          </div>
        );
      })}
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
