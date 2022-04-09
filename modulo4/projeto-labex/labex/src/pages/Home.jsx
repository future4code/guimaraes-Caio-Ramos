import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToListTrips,
  goToLogin,
  goToApplicationForm,
} from "../constants/Navigation";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          goToListTrips(navigate);
        }}
      >
        Lista de Viagens
      </button>
      <button
        onClick={() => {
          goToApplicationForm(navigate);
        }}
      >
        Formulário de inscrição
      </button>
      <button
        onClick={() => {
          goToLogin(navigate);
        }}
      >
        Logar
      </button>
    </div>
  );
};
export default Home;
