import React from "react";

class Form2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Etapa II - Informações Escolares</h1>
        <form action="">
          <label for="curso">
            {" "}
            Você faz qual curso?{" "}
            <input type="text" id="curso" placeholder="Digite seu curso..." />
          </label>
          <label for="escola">
            {" "}
            Você estudou em qual instituição de ensino?
            <input
              type="text"
              id="escola"
              placeholder="Digite sua instituição..."
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form2;
