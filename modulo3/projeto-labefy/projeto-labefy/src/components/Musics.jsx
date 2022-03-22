import React from "react";
import styled from "styled-components";
import axios from "axios";
export const headers = {
  headers: {
    Authorization: "caio-ramos-guimaraes",
  },
};

export default class Musics extends React.Component {
  state = {
    showMePlaylists: [],
    inputCreateTrack: "",
    inputCreateArtist: "",
    inputTrackUrl: "",
  };

  componentDidMount() {
    this.openPlaylist();
  }
  componentDidUpdate() {
    this.openPlaylist();
  }

  onChangeTrack = (e) => {
    this.setState({ inputCreateTrack: e.target.value });
  };

  onChangeArtist = (e) => {
    this.setState({ inputCreateArtist: e.target.value });
  };

  onChangeUrl = (e) => {
    this.setState({ inputTrackUrl: e.target.value });
  };

  openPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedPlaylist.id}/tracks`,
        headers
      )
      .then((res) => {
        this.setState({ showMePlaylists: res.data.result.tracks });
      })
      .catch((err) => {
        alert("Algo deu errado");
      });
  };
  createMusic = () => {
    const body = {
      name: this.state.inputCreateTrack,
      artist: this.state.inputCreateArtist,
      url: this.state.inputTrackUrl,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`,
        body,
        headers
      )
      .then((res) => {
        this.setState({
          inputCreateTrack: "",
          inputCreateArtist: "",
          inputTrackUrl: "",
        });
        this.openPlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteMusic = (music) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedPlaylist.id}/tracks/${music}`,
        headers
      )
      .then((res) => {
        alert("Música deletada com sucesso!");
        console.log(music);
      })
      .catch((err) => {
        console.log(music);
      });
  };
  render() {
    const renderedMusics = this.state.showMePlaylists.map((music, i) => {
      return (
        <div>
          <div key={music.id}>
            <p>{music.inputCreateTrack}</p>
            <p>{music.artist}</p>
            <audio controls>
              <source src={music.url} type={"audio/mp3"}></source>
            </audio>
            <button
              onClick={() => {
                if (window.confirm("Delete track?")) {
                  this.deleteMusic(music.id);
                }
              }}
            >
              X
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome da Música"
            value={this.state.inputCreateTrack}
            onChange={this.onChangeTrack}
          />
          <br />
          <input
            type="text"
            placeholder="Nome do Artista"
            value={this.state.inputCreateArtist}
            onChange={this.onChangeArtist}
            Artist
          />
          <br />
          <input
            type="text"
            placeholder="Insira o link"
            value={this.state.inputTrackUrl}
            onChange={this.onChangeUrl}
          />
        </div>
        <button onClick={this.createMusic}>Adicionar Música</button>
        <div>{renderedMusics}</div>
        <button onClick={this.props.renderPlaylistPage}>Voltar</button>
      </div>
    );
  }
}
