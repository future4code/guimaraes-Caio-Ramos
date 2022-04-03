import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrips, goToAdminHome } from "../constants/Navigation";

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
          goToAdminHome(navigate);
        }}
      >
        Admin Home
      </button>
    </div>
  );
};
export default Home;
