import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";
import { baseUrl } from "../constants/BaseUrl";
import { countries } from "../constants/Countries";
import { goBack, goToHomePage } from "../constants/Navigation";
import axios from "axios";

const ApplicationForm = () => {
  const navigate = useNavigate();

  const [listTripsData] = useRequestData(`${baseUrl}/trips`);
  const [form, onChangeForm, eraseForm] = useForm({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyTrip = (e) => {
    e.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${baseUrl}/trips/${form.tripId}/apply`, body)
      .then((res) => {
        alert("Inscrição realizada com sucesso!");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    eraseForm();
  };
  /* 
  const selectTrip = listTripsData.map((trips) => {
    return (
      <option value={trips.id} key={trips.id}>
        {trips.name}
        {trips.planet}
      </option>
    );
  }); */

  /* const selectCountry = countries.map((country) => {
    return (
      <option value={country} key={country}>
        {country}
      </option>
    );
  }); */

  return (
    <div>
      <h2>Application Form</h2>
      <div>
        <form onSubmit={applyTrip}>
          <select
            value={form.tripId}
            required
            name={"tripId"}
            onChange={onChangeForm}
          >
            <option value={""}>Selecione uma viagem:</option>

            {listTripsData?.trips.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {trip.name} {trip.planet}
                </option>
              );
            })}
          </select>
          <input
            name="name"
            value={form.name}
            onChange={onChangeForm}
            placeholder={"Nome..."}
            required
          />
          <input
            name="age"
            value={form.age}
            onChange={onChangeForm}
            placeholder={"Idade..."}
            required
            type={"number"}
            min={18}
          />
          <input
            name="applicationText"
            value={form.applicationText}
            onChange={onChangeForm}
            placeholder={"Por que você deve ser escolhido?"}
            required
            pattern={"^.{10,}"}
            title={"Sua texto de candidatura deve ter ao menos 10 caracteres"}
          />
          <input
            name="profession"
            value={form.profession}
            onChange={onChangeForm}
            placeholder={"Profissão"}
            required
            pattern={"^.{4,}"}
            title={"Sua profissão deve ter no mínimo 4 caracteres"}
          />
          <select
            value={form.country}
            required
            name={"country"}
            onChange={onChangeForm}
          >
            <option value={""}>Escolha seu país:</option>
            <option value={""}>País de origem:</option>
            {countries.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </select>
          <br />
          <button>Enviar</button>
        </form>
      </div>
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
