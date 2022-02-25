//import "./App.css";
import React from "react";
//import styled from "styled-components";
import axios from "axios";
//import Cadastrar from "./components/Cadastrar";

export default class Exibir extends React.Component {
  showUsers = () => {
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
        this.setState({});
      });
  };

  render() {
    return <div>Exibir</div>;
  }
}
