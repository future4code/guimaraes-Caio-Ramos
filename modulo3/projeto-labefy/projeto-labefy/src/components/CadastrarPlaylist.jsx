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

export default class CadastrarPlaylist extends React.Component {
  state = {
    inputCreatePlaylist: "",
    playlists: [],
  };

  componentDidMount() {
    this.showPlaylist();
  }

  /* componentDidUpdate() {
    this.showPlaylist();
  } */

  showPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "caio-ramos-guimaraes",
          },
        }
      )
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
        console.log(res.data.result.list);
        // this.showPlaylist();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputCreatePlaylist,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        { headers: { Authorization: "caio-ramos-guimaraes" } }
      )
      .then((res) => {
        alert("Playlist criada com sucesso!");
        this.showPlaylist();
      })
      .catch((err) => {
        alert("I AM ERROR");
        console.log(err.response.data.message);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        { headers: { Authorization: "caio-ramos-guimaraes" } }
      )
      .then((res) => {
        alert("Playlist deletada com sucesso!");
        console.log(res);
      })
      .catch((err) => {
        alert("Algo de estranho aconteceu");
        console.log(err.response);
      });
  };

  onChangePlaylist = (e) => {
    this.setState({ inputCreatePlaylist: e.target.value });
  };

  render() {
    const renderedPlaylists = this.state.playlists.map((play) => {
      return (
        <div>
          <p key={play.id}>{play.name}</p>
          <StyledButton onClick={() => this.deletePlaylist(play.id)}>
            {" "}
            X
          </StyledButton>
        </div>
      );
    });

    return (
      <EstilosGerais>
        <StyledInput
          type="text"
          placeholder={"Crie sua playlist dos sonhos"}
          value={this.state.inputCreatePlaylist}
          onChange={this.onChangePlaylist}
        />

        <br />
        <StyledButton onClick={this.createPlaylist}>
          Criar Playlist
        </StyledButton>
        <br />

        {/* {renderedPlaylists} */}
      </EstilosGerais>
    );
  }
}
