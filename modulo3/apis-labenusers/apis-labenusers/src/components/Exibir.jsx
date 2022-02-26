import React from "react";
import styled from "styled-components";
import axios from "axios";
import Cadastrar from "../components/Cadastrar";

export default class Exibir extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.showAllUsers();
  }

  showAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "caio-ramos-guimaraes",
          },
        }
      )
      .then((res) => {
        this.setState({ users: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteUser = (idDoUsuario) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuario}`,
        {
          headers: {
            Authorization: "caio-ramos-guimaraes",
          },
        }
      )
      .then((res) => {
        alert("Usuário deletado com sucesso!");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    const usuariosRenderizados = this.state.users.map((user) => {
      return (
        <div>
          <p key={user.id}>{user.name}</p>
          <button onCLick={() => this.deleteUser(user.id)}> X </button>
        </div>
      );
    });

    return (
      <div>
        <h3> Lista de usuários:</h3>
        {usuariosRenderizados}
      </div>
    );
  }
}
