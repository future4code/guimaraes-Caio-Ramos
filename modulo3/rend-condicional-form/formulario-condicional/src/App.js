import React from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import ThankYou from "./components/ThankYou";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
class App extends React.Component {
  state = {
    etapa: 1,
  };
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Form1 />;

      case 2:
        return <Form2 />;

      case 3:
        return <Form3 />;

      case 4:
        return <ThankYou />;

      default:
        console.log("AbubléAbubublé");
    }
  };

  pularProximaEtapa = () => {
    /* Versão Refatorada (em testes)
    this.setState({etapa: this.state.etapa + 1)}) ; */
    const etapaAtual = this.state.etapa;
    const nextStep = etapaAtual + 1;
    this.setState({ etapa: nextStep });
  };

  render() {
    return (
      <div>
        <div>
          <br />
          {this.renderizaEtapa()}
          <br />
          <StyledButton onClick={this.pularProximaEtapa}>
            Próxima etapa
          </StyledButton>
        </div>
      </div>
    );
  }
}

export default App;
