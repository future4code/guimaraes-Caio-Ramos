import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationForm } from "../constants/Navigation";

const TripList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>ListTrips</h2>
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
export default TripList;
