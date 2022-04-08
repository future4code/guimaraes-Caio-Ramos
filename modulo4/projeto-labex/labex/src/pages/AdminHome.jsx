import React, { useEffect } from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import {
  goToTripDetails,
  goToCreateTrip,
  goBack,
} from "../constants/Navigation";

const AdminHome = () => {
  useProtectedPage();
  /* useEffect(() => {
    const token = localStorage.getItem("token");
  }); */

  const navigate = useNavigate();

  return (
    <div>
      <h2>AdminHome</h2>
      <button onClick={goToTripDetails(navigate)}>TripsDetails</button>
      <button onClick={goToCreateTrip(navigate)}>CreateTrip</button>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      ></button>
    </div>
  );
};

export default AdminHome;
