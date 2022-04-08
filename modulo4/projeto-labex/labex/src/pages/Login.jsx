import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../constants/BaseUrl";
import { goBack } from "../constants/Navigation";
import useForm from "../hooks/useForm";

const Login = () => {
  const navigate = useNavigate();
  const { form, OnChangeForm, eraseForm } = useForm({
    email: "",
    password: "",
  });

  const toLogin = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert("Usuário ou senha errados");
      });
    eraseForm();
  };

  return (
    <div>
      <h3> Faça seu Login:</h3>

      <form onSubmit={toLogin}>
        <input
          placeholder={"Insira seu e-mail"}
          value={form.email}
          onChange={OnChangeForm}
          required
          type={"email"}
        />
        <input
          placeholder={"Insira sua senha"}
          value={form.password}
          onChange={OnChangeForm}
          required
          type={"password"}
        />
      </form>

      {/* <button onClick={toLogin}>Login</button> */}
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
export default Login;
