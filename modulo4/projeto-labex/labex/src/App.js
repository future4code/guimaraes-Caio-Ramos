import React, { useState, useEffect } from "react";
import axios from "axios";
import TripList from "./components/TripList";
import AdminHome from "./components/AdminHome";
import Home from "./components/Home";

function App() {
  /*  const [page, setPage] = useState("");

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
  }; */

  return (
    <div>
      <header>
        <h1>LabeX</h1>

        <h4>Viajar para o espaço nunca foi tão fácil!</h4>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        {" "}
        <h4>LabeX. Todos os direitos reservados.</h4>
      </footer>
    </div>
  );
}

export default App;
