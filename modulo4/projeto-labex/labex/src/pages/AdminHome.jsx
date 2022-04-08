import React, { useEffect } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/BaseUrl";
import useRequestData from "../hooks/useRequestData";
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
  const [listTripsData, setListTripsData] = useRequestData(`${baseUrl}/trips`);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const showTripDetails = (tripId) => {
    const tripIdentification = tripId;
    navigate(`/admin/trips/${tripIdentification}`);
  };

  const deleteTrip = (trip) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    if (window.confirm("Deseja deletar esta viagem?")) {
      axios
        .delete(`${baseUrl}/trips/${trip.id}`, headers)
        .then((res) => {
          alert(`Você deletou a viagem ${trip.name}. See you space cowboy.`);
          navigate("/admin/trips/list");
          setListTripsData();
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      navigate("/admin/trips/list");
    }
  };
  const renderedTrips = () => {
    listTripsData.map((trip) => {
      return (
        <div onCLick={() => showTripDetails(trip.id)} key={trip.id}>
          <div>{trip.name}</div>
          <div
            onClicK={(e) => {
              e.stopPropagation();
              deleteTrip(trip);
            }}
          >
            <div>
              {" "}
              <img src="/img/download.png" width=" 8% " height=" 8% " />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>AdminHome</h2>
      {renderedTrips}
      <button onClick={goToTripDetails(navigate)}>TripsDetails</button>
      <button onClick={goToCreateTrip(navigate)}>CreateTrip</button>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminHome;
