import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class CadastrarEMostrar extends React.Component {
  state = {
    inputCreatePlaylist: "",
    playlists: [],
  };

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
      })
      .catch((err) => {
        console.log(err);
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
        console.log(err.response);
      });
  };
  render() {
    const renderedPlaylists = this.state.playlists.map((play) => {
      return <p key={play.id}>{play.name}</p>;
    });
    return (
      <div>
        <input />
        {renderedPlaylists} <button>X</button>
      </div>
    );
  }
}
