import React from "react";

export default class Musics extends React.Component {
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
    return <div>Musics</div>;
  }
}
