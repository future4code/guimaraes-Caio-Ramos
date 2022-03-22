import React from "react";
import Musics from "./Musics";
import styled from "styled-components";
import axios from "axios";
export const headers = {
  headers: {
    Authorization: "caio-ramos-guimaraes",
  },
};
export default class Playlists extends React.Component {
  state = {
    inputCreatePlaylist: "",
    playlists: [],
    change: false,
    selectedPlaylist: "",
  };
  renderChange = (showPlaylist) => {
    this.setState({ change: true, selectedPlaylist: showPlaylist });
  };

  renderPlaylistPage = () => {
    this.setState({ change: false });
  };
  componentDidMount() {
    this.getAllPlaylists();
  }

  componentDidUpdate() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
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
        headers
      )
      .then((res) => {
        alert("Playlist criada com sucesso!");
        this.setState({ inputCreatePlaylist: "" });
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
        headers
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
  onChangeCreatePlaylist = (e) => {
    this.setState({ inputCreatePlaylist: e.target.value });
  };

  render() {
    if (this.state.change) {
      return (
        <Musics
          selectedPlaylist={this.state.selectedPlaylist}
          renderPlaylistPage={this.renderPlaylistPage}
        />
      );
    }

    const renderedPlaylists = this.state.playlists.map((play, i) => {
      return (
        <div>
          <p key={play.id}>
            {play.name}{" "}
            <button onClick={() => this.renderChange(play)}>+</button>
          </p>
          <button
            onClick={() => {
              if (window.confirm("Delete Playlist?")) {
                this.deletePlaylist(play.id);
              }
            }}
          >
            {" "}
            X
          </button>
        </div>
      );
    });

    return (
      <div>
        <h3>Criar Playlists</h3>
        <input
          type="text"
          placeholder="Digite o nome da sua Playlist..."
          value={this.state.inputCreatePlaylist}
          onChange={this.onChangeCreatePlaylist}
        />
        <button onClick={this.createPlaylist}>Criar</button>
        {renderedPlaylists}
        <button onClick={this.props.backToLogin}>Sair</button>
      </div>
    );
  }
}
