import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage } from "../constants/Navigation";

const ApplicationForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Application Form</h2>
      <button
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Ir para Home
      </button>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
    </div>
  );
};
export default ApplicationForm;
