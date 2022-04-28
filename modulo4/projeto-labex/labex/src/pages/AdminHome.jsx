import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/BaseUrl";
import useRequestData from "../hooks/useRequestData";
import {
  goToTripDetails,
  goToCreateTrip,
  goBack,
} from "../constants/Navigation";

const AdminHome = () => {
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
          alert(err.response);
          console.log(err.response);
        });
    }
  };

  return (
    <div>
      <h2>AdminHome</h2>
      {listTripsData?.trips.map((trip) => {
        return (
          <div onClick={() => showTripDetails(trip.id)} key={trip.id}>
            <div>
              {" "}
              {trip.name}
              <button
                onClick={(e) => {
                  deleteTrip(trip);
                  navigate("/admin");
                  e.stopPropagation();
                }}
              >
                <img
                  alt={"trash-icon"}
                  src="https://img.icons8.com/office/344/delete--v1.png"
                />
              </button>
            </div>
            <br />
          </div>
        );
      })}
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
