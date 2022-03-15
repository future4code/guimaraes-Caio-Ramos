import React from "react";
import styled from "styled-components";
import axios from "axios";
import Home from "./pages/Home";
import Cadastrar from "./components/Cadastrar";
import Exibir from "./components/Exibir";

class App extends React.Component {
  /*  state = {
    acesso: false,
  };

  acessar = () => {
    this.setState({ acesso: true });
  };

  sair = () => {
    this.setState({ acesso: false });
  };
 */
  render() {
    /* let pagina = <h1> DEU RUIM</h1>;

if (this.state.acesso) {
  pagina = <Home onClickSair={this.sair}/>
} else {
  pagina = <Acessar />
} */

    return (
      <div>
        <header>
          <h1> LabenUsers</h1>
        </header>
        <hr />
        <Home />
        <footer>
          <h3>Labeusers: todos os direitos reservados</h3>
        </footer>
      </div>
    );
  }
}
export default App;
