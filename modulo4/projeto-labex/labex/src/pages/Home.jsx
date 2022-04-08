import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrips, goToLogin } from "../constants/Navigation";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          goToListTrips(navigate);
        }}
      >
        ListTrips
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
