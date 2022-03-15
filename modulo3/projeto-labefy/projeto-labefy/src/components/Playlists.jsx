import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class Playlists extends React.Component {
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
  onChangePlaylist = (e) => {
    this.setState({ inputCreatePlaylist: e.target.value });
  };

  render() {
    const renderedPlaylists = this.state.playlists.map((play) => {
      return (
        <div>
          <li key={play.id}>{play.name}</li>
          <button onClick={() => this.deletePlaylist(play.id)}> X</button>
        </div>
      );
    });

    return (
      <div>
        <h4>Playlists</h4>
      </div>
    );
  }
}
