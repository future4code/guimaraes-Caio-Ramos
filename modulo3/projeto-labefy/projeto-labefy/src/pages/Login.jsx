import React from "react";

export default class Login extends React.Component {
  render() {
    console.log(this.props.goToPlaylists);
    return (
      <div>
        <h3>Boas-vindas ao Labefy.</h3>
        <h4> Suas músicas favoritas em um só lugar!</h4>
        <button onClick={this.props.goToPlaylists}>Entrar</button>
      </div>
    );
  }
}
