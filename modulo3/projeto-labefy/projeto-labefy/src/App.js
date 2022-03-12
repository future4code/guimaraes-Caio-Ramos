import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Parâmetros Gerais */
const headers = {
  headers: {
    Authorization: "caio-ramos-guimaraes",
  },
};
const urlTodasPlaylists =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

/* Estilizações */
const FullBody = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 20vh 70vh 10vh;
`;
const StyledMain = styled.main`
  margin: 0;
  padding: 0;
  background-color: #0cca4a;
  border: 8px solid #9fa4a9;
  padding: 0.8vh 0.36603221083455345vw;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
`;
const StyledAside = styled.aside`
  margin: 0;
  padding: 0;
  background-color: #0cca4a;
  border: 8px solid #9fa4a9;
  padding: 0.8vh 0.36603221083455345vw;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const Styled2Aside = styled.aside`
  margin: 0;
  padding: 0;
  background-color: #0cca4a;
  border: 8px solid #9fa4a9;
  padding: 0.8vh 0.36603221083455345vw;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
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
const StyledList = styled.p`
  font-family: "Work Sans", sans-serif;
`;

/* Código */
export default class App extends React.Component {
  state = {
    inputCreatePlaylist: "",
    playlists: [],
    inputCreateTrack: "",
    tracks: [],
    inputCreateArtist: "",
    artists: [],
    inputTrackUrl: "",
    urls: [],
    pageDetail: false,
    playListSelect: "",
  };

  componentDidMount() {
    console.log("O component foi montado");
    this.showPlaylist();
    this.getPlaylistTracks();
  }

  /* componentDidUpdate(prevProps, prevState) {
    if (this.state.tracks !== prevState.tracks) {
      console.log("O component foi atualizado");
      this.getPlaylistTracks(); */

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
        this.showPlaylist();
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

  getPlaylistTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.playListSelect.id}/tracks`,
        { headers: { Authorization: "caio-ramos-guimaraes" } }
      )
      .then((res) => {
        this.setState({ tracks: res.data.result.tracks });
      })
      .catch((err) => {
        alert("I AM ERROR");
        console.log(err.response.data.message);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId.id}`,
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

  renderPageDetail = (selectPlaylist) => {
    this.setState({ pageDetail: true, playListSelect: selectPlaylist });
  };
  renderPageBack = () => {
    this.setState({ pageDetail: false });
  };

  addTrack = () => {
    const body = {
      name: this.state.inputCreateTrack,
      artist: this.state.inputCreateArtist,
      url: this.state.inputTrackUrl,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.playListSelect.id}/tracks`,
        body,
        { headers: { Authorization: "caio-ramos-guimaraes" } }
      )
      .then((res) => {
        alert("Música adicionada com sucesso");
        console.log(res.data.result.list);
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

  onChangePlaylist = (e) => {
    this.setState({ inputCreatePlaylist: e.target.value });
  };

  render() {
    if (this.state.pageDetail) {
      return (
        <div>
          <button onClick={this.renderPageBack}></button>
        </div>
      );
    }

    const renderedPlaylists = this.state.playlists.map((play) => {
      return (
        <div>
          <StyledList key={play.id}>{play.name}</StyledList>
          <StyledButton onClick={() => this.deletePlaylist(play.id)}>
            {" "}
            X
          </StyledButton>
        </div>
      );
    });

    const renderedTracks = this.state.tracks.map((track) => {
      return (
        <div>
          <p>{track.name}</p>
          <p>{track.artist}</p>
          <p>
            <audio controls src={track.url} />
          </p>
          {/* conferir se está tudo certo com a tag audop */}
          <button>Dá o Play!</button>
        </div>
      );
    });

    return (
      <FullBody>
        <Header />

        <StyledAside>
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
        </StyledAside>
        <Styled2Aside>
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
          <StyledButton onClick={this.addTrack}>Adicionar Música</StyledButton>
        </Styled2Aside>
        <StyledMain>
          {renderedPlaylists}
          {renderedTracks}
        </StyledMain>

        <Footer />
      </FullBody>
    );
  }
}
