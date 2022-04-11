import React from "react";
import Router from "./routes/Router";
import {
  StyledBody,
  StyledHeader,
  StyledFooter,
  StyledMain,
} from "./StyledApp";

function App() {
  return (
    <StyledBody>
      <StyledHeader>
        <h1>LabeX</h1>

        <h4>Viajar para o espaço nunca foi tão fácil!</h4>
      </StyledHeader>
      <StyledMain>
        <Router />
      </StyledMain>
      <StyledFooter>
        {" "}
        <h4>LabeX. Todos os direitos reservados.</h4>
      </StyledFooter>
    </StyledBody>
  );
}

export default App;
