import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { goBack, goToHomePage, goToCreateTrip } from "../constants/Navigation";
import { baseUrl } from "../constants/BaseUrl";

const TripDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tripDetail, setTripDetail] = useState([]);
  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };
  const tripId = params.tripId;

  const yourTrips = () => {
    axios
      .get(`${baseUrl}/trip/${params.tripId}`, headers)
      .then((res) => {
        console.log(res.data.trip);
        setTripDetail(res.data.trip);
      })
      .catch((err) => console.log(err.response.data));
  };
  useEffect(() => {
    yourTrips();
  });
  const aproveCandidate = (candidate) => {
    const body = { aprove: true };
    axios
      .put(
        `${baseUrl}/trips/${params.tripId}/candidates/${candidate.id}/decide`,
        body,
        headers
      )
      .then((res) => {
        alert(`Candidato(a) ${candidate.name} aprovado(a)!`);
        yourTrips();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const reproveCandidate = (candidate) => {
    const body = { aprove: false };
    axios
      .put(
        `${baseUrl}/trips/${params.tripId}/candidates/${candidate.id}/decide`,
        body,
        headers
      )
      .then((res) => {
        alert(`Candidato(a) ${candidate.name} reprovado(a)!`);
        yourTrips();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <h1 title={tripDetail.name}> </h1>
      <div>
        <p>Nome: {tripDetail.name}</p>
        <p>Descrição: {tripDetail.description}</p>
        <p>Planeta: {tripDetail.planet}</p>
        <p>Duração: {tripDetail.durationInDays} dias</p>
        <p>Data de partida: {tripDetail.date}</p>
      </div>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Voltar para Home
      </button>
      <button
        onClick={() => {
          goToCreateTrip(navigate);
        }}
      >
        Criar Viagens
      </button>
      <h2>Candidatos Pendentes</h2>
      {tripDetail.candidates?.map((candidate) => {
        return (
          <div key={candidate.id}>
            <p>Candidato: {candidate.name}</p>
            <p>Idade: {candidate.age} anos</p>
            <p>País de origem: {candidate.country}</p>
            <p>Profissão: {candidate.profession}</p>
            <p>Motivação: {candidate.applicationText}</p>
            <div>
              <button onClick={() => aproveCandidate(candidate)}>
                APROVAR
              </button>
              <button onClick={() => reproveCandidate(candidate)}>
                REPROVAR
              </button>
            </div>
          </div>
        );
      })}

      <h2>Candidatos Aprovados</h2>
      <div>
        {tripDetail.approved?.map((candidate) => {
          return (
            <div key={candidate.id}>
              <ul>
                <li>
                  {candidate.name}, {candidate.age} anos, {candidate.country}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TripDetails;
