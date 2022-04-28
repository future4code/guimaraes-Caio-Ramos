import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/BaseUrl";
import { goBack } from "../constants/Navigation";
import useForm from "../hooks/useForm";

const Login = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, eraseForm } = useForm({
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
          name={"email"}
          value={form.email}
          onChange={onChangeForm}
          placeholder="Email"
          required
          type="email"
        />
        <input
          name={"password"}
          value={form.password}
          onChange={onChangeForm}
          placeholder="Senha"
          required
          type="password"
          pattern={"^.{3,}"}
          title={"A senha deve ter no mínimo 3 números"}
        />
        <button>Login</button>
      </form>

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
