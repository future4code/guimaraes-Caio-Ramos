import React from "react";
import styled from "styled-components";
import MeuHeader from "./components/Header/MeuHeader";

const Cabecalho = styled.header`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8em;
  background-color: #0077b6;
  color: #caf0f8;
  padding: 4.8vh 1.4641288433382138vw;
  margin: 1.6vh 0.7320644216691069vw;
`;

const CorpoMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  height: 64vh;
  width: 100%;
  border: 5px solid black;
  margin: 8px;
  background-color: #ee9b00;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`;
const CorpoBotao = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.5em;
  background-color: #caf0f8;
  color: black;
  border-radius: 15px;
  margin: 1.6vh 0.7320644216691069vw;
`;

const StylePar = styled.p`
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  width: 70vw;
  border-radius: 2%;
  margin: 0 0 3vw 1vw;
  padding-left: 1vw;
  line-height: 3vh;
`;

const CorpoInput = styled.input`
  width: 21.961932650073205vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 0.6em;
  background-color: #caf0f8;
  color: black;
  border-radius: 15px;
  margin: 1.6vh 0.7320644216691069vw;
`;

const CorpoFooter = styled.footer`
  height: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8em;
  background-color: #0077b6;
  color: #caf0f8;
  padding: 4.8vh 1.4641288433382138vw;
  margin: 1.6vh 0.7320644216691069vw;
`;

class App extends React.Component {
  state = {
    usuarios: [
      {
        user: "PinkMila:",
        msg: "Porque o professor fala tanto velho na aula?",
      },
      {
        user: "Lalaíne:",
        msg: "Camila, é value",
      },
    ],
    valorInputUser: "",
    valorInputMsg: "",
  };
  addMessage = () => {
    const newMessage = {
      user: this.state.valorInputUser,
      msg: this.state.valorInputMsg,
    };

    const anotherMessage = [...this.state.usuarios, newMessage];
    this.setState({ usuarios: anotherMessage });
  };

  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.usuarios.map((person) => {
      return (
        <div>
          <p> {person.user}</p>
          <p>{person.msg}</p>
        </div>
      );
    });
    return (
      <div>
        <Cabecalho>
          <MeuHeader></MeuHeader>
        </Cabecalho>

        <CorpoMain>
          <StylePar>{listaDeMensagens}</StylePar>
        </CorpoMain>

        <CorpoFooter>
          <CorpoInput
            type="text"
            placeholder="Apelido..."
            value={this.state.valorInputUser}
            onChange={this.onChangeInputUser}
          />

          <CorpoInput
            type="text"
            placeholder="Mensagem..."
            value={this.state.valorInputMsg}
            onChange={this.onChangeInputMsg}
          />

          <CorpoBotao onClick={this.addMessage}>Enviar</CorpoBotao>
        </CorpoFooter>
      </div>
    );
  }
}

export default App;
