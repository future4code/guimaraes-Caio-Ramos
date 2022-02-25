//import "./App.css";
import React from "react";
//import styled from "styled-components";
//import axios from "axios";
import Cadastrar from "./components/Cadastrar";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1> LabenUsers</h1>
        </header>

        <Cadastrar />

        <footer>
          <h3>Labeusers: todos os direitos reservados</h3>
        </footer>
      </div>
    );
  }
}
export default App;
