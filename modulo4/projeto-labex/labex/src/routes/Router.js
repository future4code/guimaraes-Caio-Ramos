import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import AdminHome from "../pages/AdminHome";
import ApplicationForm from "../pages/ApplicationForm";
import CreateTrip from "../pages/CreateTrip";
import ListTrips from "../pages/ListTrips";
import Login from "../pages/Login";
import TripDetails from "../pages/TripDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path="/admin/trips/list " element={<AdminHome />} />
        <Route exact path="/trips/application" element={<ApplicationForm />} />
        <Route exact path="/admin/trips/create" element={<CreateTrip />} />
        <Route exact path="/trips/list" element={<ListTrips />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin/trips/:tripId" element={<TripDetails />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
