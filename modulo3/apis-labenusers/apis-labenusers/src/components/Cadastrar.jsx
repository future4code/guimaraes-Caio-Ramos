import React from "react";
//import styled from "styled-components";
import axios from "axios";

const urlUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "caio-ramos-guimaraes",
  },
};

export default class Cadastrar extends React.Component {
  state = {
    nameInput: "",
    emailInput: "",
  };

  createNewUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    axios
      .post(urlUsers, body, headers)
      .then((res) => {
        alert(`O(a) usuário(a)  foi criado(a) com sucesso.`);
        console.log(res.data);
        this.setState({ nameInput: "", emailInput: "" });
      })
      .catch((err) => {
        alert(`Algo não deu certo. :(`);
        console.log(err.response);
      });
  };

  onChangeNameInput = (event) => {
    this.setState({ nameInput: event.target.value });
  };
  onChangeEmailInput = (event) => {
    this.setState({ emailInput: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          placeholder="Digite seu nome..."
          value={this.state.nameInput}
          onChange={this.onChangeNameInput}
        ></input>
        <input
          placeholder="Digite seu e-mail..."
          value={this.state.emailInput}
          onChange={this.onChangeEmailInput}
        ></input>
        <button onClick={this.createNewUser}>Enviar dados</button>
      </div>
    );
  }
}
