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
              <strong> Nome:</strong>
              {trip.name}
            </p>
            <p>
              {" "}
              <strong>Descrição: </strong> {trip.description}{" "}
            </p>
            <p>
              {" "}
              <strong> Planeta: </strong> {trip.planet}{" "}
            </p>
            <p>
              {" "}
              <strong> Duração em dias:</strong> {trip.durationInDays}
            </p>
            <p>
              {" "}
              <strong> Data:</strong> {trip.date}
            </p>
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
