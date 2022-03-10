import React from "react";
import styled from "styled-components";
import axios from "axios";
import CadastrarPlaylist from "./CadastrarPlaylist";

export default class ExibirPlaylist extends React.Component {
  render() {
    return <div>{this.props.renderedPlaylists}</div>;
  }
}
