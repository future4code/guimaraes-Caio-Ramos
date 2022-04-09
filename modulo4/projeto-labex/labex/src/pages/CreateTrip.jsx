import React from "react";
import axios from "axios";
import { baseUrl } from "../constants/BaseUrl";
import { planets } from "../constants/Planets";
import useForm from "../hooks/useForm";
/* import useProtectedPage from "../hooks/useProtectedPage"; */
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage, goToTripDetails } from "../constants/Navigation";

const CreateTrip = () => {
  /* useProtectedPage(); */
  const navigate = useNavigate();
  const { form, onChangeForm, eraseForm } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const createTrips = (e) => {
    e.preventDefault();
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };
    axios
      .post(`${baseUrl}/trips`, body, headers)
      .then((res) => {
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        alert("Algo deu errado!");
        console.log(err.response.data.message);
      });
    eraseForm();
  };
  /* const selectPlanet = planets.map((planet) => {
    return (
      <option value={planet} key={planet}>
        {planet}
      </option>
    );
  }); */
  return (
    <div>
      <h2>Crie Sua Viagem</h2>

      <form onSubmit={createTrips}>
        <input
          name="name"
          value={form.name}
          onChange={onChangeForm}
          placeholder={"Nome"}
          required
        />

        <select
          name="planet"
          value={form.planet}
          onChange={onChangeForm}
          placeholder={"Escolha um Planeta"}
          required
        >
          <option value={""}>Escolha um Planeta</option>
          {planets.map((planets) => {
            return (
              <option value={planets} key={planets}>
                {planets}
              </option>
            );
          })}
        </select>
        <input
          name="date"
          value={form.date}
          onChange={onChangeForm}
          placeholder={"Data"}
          required
          type={"date"}
        />
        <input
          name="description"
          value={form.description}
          onChange={onChangeForm}
          placeholder={"Descrição..."}
          required
          pattern={"^.{10,}"}
          title={"Sua texto deve ter no mínimo 10 caracteres"}
        />
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChangeForm}
          placeholder={"Duração em dias"}
          required
          type={"number"}
          min={1}
        />
        <button>Criar</button>
      </form>

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
          goToTripDetails(navigate);
        }}
      >
        Ir para Detalhes de Viagem
      </button>
    </div>
  );
};
export default CreateTrip;
