import React, { useState, useEffect } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage, goToTripDetails } from "../constants/Navigation";

const CreateTrip = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>CreateTrip</h2>
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
          goToTripDetails(navigate);
        }}
      >
        Ir para Detalhes de Viagem
      </button>
    </div>
  );
};
export default CreateTrip;
