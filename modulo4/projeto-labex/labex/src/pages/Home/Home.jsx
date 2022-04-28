import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToListTrips,
  goToLogin,
  goToApplicationForm,
} from "../../constants/Navigation";
import { StyledBody, StyledButton } from "../Home/styledHome";
const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledBody>
      <StyledButton
        onClick={() => {
          goToListTrips(navigate);
        }}
      >
        Lista de Viagens
      </StyledButton>
      <StyledButton
        onClick={() => {
          goToApplicationForm(navigate);
        }}
      >
        Formulário de inscrição
      </StyledButton>
      <StyledButton
        onClick={() => {
          goToLogin(navigate);
        }}
      >
        Logar
      </StyledButton>
    </StyledBody>
  );
};
export default Home;
