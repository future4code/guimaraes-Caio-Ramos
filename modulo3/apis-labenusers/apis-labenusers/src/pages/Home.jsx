import React from "react";
import styled from "styled-components";
import axios from "axios";
import Cadastrar from "../components/Cadastrar";
import Exibir from "../components/Exibir";

class Home extends React.Component {
  state = {
    pagina: "",
  };

  irParaCadastro = () => {
    this.setState({ pagina: "cadastro" });
  };

  irParaUsuarios = () => {
    this.setState({ pagina: "usuarios" });
  };

  render() {
    let secao;

    switch (this.state.pagina) {
      case "cadastro":
        secao = <Cadastrar />;
        break;
      case "usuarios":
        secao = <Exibir />;
        break;
      default:
        secao = <p>Nenhuma secao selecionada</p>;
    }

    return (
      <div>
        <h3> Boas-vindas ao Labenusers</h3>

        <h5> Utilize os botões abaixo para acessar nossas páginas</h5>
        <button onClick={this.irParaCadastro}>Cadastrar Usuário</button>
        <button onClick={this.irParaUsuarios}>Acessar Usuários</button>
        <hr />
        {secao}
      </div>
    );
  }
}
export default Home;
