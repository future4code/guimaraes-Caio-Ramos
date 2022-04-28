import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";
import { baseUrl } from "../constants/BaseUrl";
import { countries } from "../constants/Countries";
//import { goBack, goToHomePage } from "../constants/Navigation";
import axios from "axios";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { data } = useRequestData(`${baseUrl}/trips`);

  const { form, onChange, cleanFields } = useForm({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();

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
        alert("Aplicação bem sucedida!");
      })
      .catch((err) => err.response);

    cleanFields();
  };

  return (
    <div>
      <h1>Inscreva-se para uma Viagem</h1>
      <div>
        <form onSubmit={applyToTrip}>
          <select
            value={form.tripId}
            required
            name={"tripId"}
            onChange={onChange}
          >
            <option value={""}>Selecione a viagem:</option>
            {data?.trips.map((trip) => {
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
            onChange={onChange}
            placeholder={"Nome"}
            required
          />
          <input
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type={"number"}
            /* min={18} */
          />
          <input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Texto de Candidatura"}
            required
            pattern={"^.{10,}"}
            title={"Sua texto de candidatura deve ter ao menos 10 caracteres"}
          />
          <input
            name="profession"
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            pattern={"^.{4,}"}
            title={"Sua profissão deve ter no mínimo 4 caracteres"}
          />
          <select
            value={form.country}
            required
            name={"country"}
            onChange={onChange}
          >
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

      <button onClick={goBack}>Voltar</button>
    </div>
  );
};
export default ApplicationForm;
