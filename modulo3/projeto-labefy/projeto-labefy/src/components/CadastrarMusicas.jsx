import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstilosGerais = styled.div`
  margin: 1.6vh 0.7320644216691069vw;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const StyledInput = styled.input`
  padding: 0.8vh 0.36603221083455345vw;
  margin: 0.8vh 0.36603221083455345vw;
  box-shadow: 2px 2px black;
  border: 3px solid #9fa4a9;
  border-radius: 15px;
`;

const StyledButton = styled.button`
  margin-left: 0.7320644216691069vw;
  padding: 0.8vh 0.7320644216691069vw;
  box-shadow: 2px 2px black;
  border: 3px solid #9fa4a9;
  border-radius: 15px;
`;
export default class CadastrarMusicas extends React.Component {
  state = {
    inputCreateTrack: "",
    tracks: [],
    inputCreateArtist: "",
    artists: [],
    inputTrackUrl: "",
    urls: [],
  };
  addTrack = (playlistId) => {
    const body = {
      name: this.state.inputCreateTrack,
      artist: this.state.inputCreateArtist,
      url: this.state.inputTrackUrl,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        { headers: { Authorization: "caio-ramos-guimaraes" } }
      )
      .then((res) => {
        alert("Música adicionada com sucesso");
        console.log(res);
      })
      .catch((err) => {
        alert("Ocorreu um erro ao adicionar a música");
        console.log(err.response);
      });
  };

  onChangeTrack = (e) => {
    this.setState({ inputCreateTrack: e.target.value });
  };

  onChangeArtist = (e) => {
    this.setState({ inputCreateArtist: e.target.value });
  };

  onChangeUrl = (e) => {
    this.setState({ inputTrackUrl: e.target.value });
  };
  render() {
    return (
      <EstilosGerais>
        <StyledInput
          type="text"
          placeholder={"Qual é a música?"}
          value={this.state.inputCreateTrack}
          onChange={this.onChangeTrack}
        />
        <StyledInput
          type="text"
          placeholder={"Qual é o artista?"}
          value={this.state.inputCreateArtist}
          onChange={this.onChangeArtist}
        />
        <StyledInput
          type="text"
          placeholder={"Qual é o link?"}
          value={this.state.inputTrackUrl}
          onChange={this.onChangeUrl}
        />
        <StyledButton onClick={this.addTrack}>Cadastrar Músicas</StyledButton>
        <br />
        <StyledButton onClick={this.props.cadastrarPlaylist}>
          Mudar para Playlists
        </StyledButton>
      </EstilosGerais>
    );
  }
}
