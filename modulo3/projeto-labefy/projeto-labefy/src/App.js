import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Playlists from "./components/Playlists";

export default class App extends React.Component {
  state = {
    screen: "login",
  };

  selectScreen = () => {
    switch (this.state.screen) {
      case "login":
        return <Login goToPlaylists={this.goToPlaylists} />;
      case "playlists":
        return <Playlists backToLogin={this.backToLogin} />;
      default:
        return <p>Opa, algo deu errado</p>;
    }
  };

  goToPlaylists = () => {
    this.setState({ screen: "playlists" });
  };

  backToLogin = () => {
    this.setState({ screen: "login" });
  };

  render() {
    console.log(this.selectScreen);
    return (
      <div>
        <Header />

        {this.selectScreen()}

        <Footer />
      </div>
    );
  }
}
