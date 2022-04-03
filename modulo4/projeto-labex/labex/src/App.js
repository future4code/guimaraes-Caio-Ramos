import React from "react";

import Router from "./routes/Router";

function App() {
  return (
    <div>
      <header>
        <h1>LabeX</h1>

        <h4>Viajar para o espaço nunca foi tão fácil!</h4>
      </header>
      <main>
        <Router />
      </main>
      <footer>
        {" "}
        <h4>LabeX. Todos os direitos reservados.</h4>
      </footer>
    </div>
  );
}

export default App;
