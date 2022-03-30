import React, { useState, useEffect } from "react";
import axios from "axios";
import TripList from "./TripList";
import AdminHome from "./AdminHome";

export default function Home() {
  const [page, setPage] = useState("");

  switch (page) {
    case "tripList":
      return <TripList />;
    case "adminHome":
      return <AdminHome />;

    default:
      <p>Algo deu errado</p>;
      break;
  }

  const changeToTripList = () => {
    setPage("tripList");
  };

  const changeToAdminHome = () => {
    setPage("adminHome");
  };
  return (
    <div>
      <button onClick={changeToTripList}>Acessar Viagens</button>
      <button onClick={changeToAdminHome}>Administrativo</button>
    </div>
  );
}
