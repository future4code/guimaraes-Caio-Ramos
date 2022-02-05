import React, { Component } from "react";
import styled from "styled-components";
const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;
const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
  border: 0;
  border-radius: 20px;
  outline: 0;
  padding: 5px;
`;
const BtnComentario = styled.button`
  border: 0;
  border-radius: 20px;
  background-color: lightgreen;
  padding: 5px;
  font-weight: bold;
`;

export class SecaoComentario extends Component {
  state = {
    inputComent: "",
  };
  onChangeComentario = (e) => {
    console.log(e.target.value);
    this.setState({ inputComent: e.target.value });
  };
  render() {
    return (
      <CommentContainer>
        <InputComentario
          placeholder={"Comentário"}
          value={this.state.inputComent}
          onChange={this.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
        <BtnComentario onClick={this.props.aoEnviar}>Enviar</BtnComentario>
      </CommentContainer>
    );
  }
}
