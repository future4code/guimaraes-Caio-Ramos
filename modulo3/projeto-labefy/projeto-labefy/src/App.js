import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Playlists from "./components/Playlists";

export default class App extends React.Component {
  state = {
    screen: "login",
  };

  chooseScreen = () => {
    switch (this.state.screen) {
      case "login":
        return <Login goToPlaylists={this.goToPlaylists} />;
      case "playlists":
        return <Playlists />;
      default:
        return <p>Meu deus, deu tudo errado!</p>;
    }
  };

  goToPlaylists = () => {
    this.setState({ screen: "playlist" });
  };

  render() {
    console.log(this.chooseScreen);
    return (
      <div>
        <Header />

        {this.chooseScreen()}

        <Footer />
      </div>
    );
  }
}
