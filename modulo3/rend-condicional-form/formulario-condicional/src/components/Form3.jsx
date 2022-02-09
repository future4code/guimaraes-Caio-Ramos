import React from "react";

class Form3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Etapa III - Informações Escolares Complementares</h1>
        <form>
          <label for="motivacao">
            {" "}
            Por que você não terminou seu curso de graduação?{" "}
            <input type="text" id="motivacao" placeholder="Explique aqui..." />
          </label>
          <label>
            {" "}
            Você fez algum curso complementar?{" "}
            <select>
              <option value="Curso técnico">Curso técnico</option>
              <option value="Cursos de inglês">Cursos de inglês</option>
              <option value="Não fiz curso complementar">
                Não fiz curso complementar
              </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form3;
