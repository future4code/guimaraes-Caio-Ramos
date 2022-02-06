import React from "react";

class MeuInput extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Apelido..." />
        <input type="text" placeholder="Mensagem..." />
      </div>
    );
  }
}
export default MeuInput;
