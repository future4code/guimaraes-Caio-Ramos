import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
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
        <Route index element={<Home />} />
        <Route path="/admin/trips/list " element={<AdminHome />} />
        <Route path="/trips/application" element={<ApplicationForm />} />
        <Route path="/admin/trips/create" element={<CreateTrip />} />
        <Route path="/trips/list" element={<ListTrips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/trips/:tripId" element={<TripDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
