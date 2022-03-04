import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const FullBody = styled.div`
  margin: 0px;
  padding: 0px;
`;

export default class App extends React.Component {
  render() {
    return (
      <FullBody>
        <Header />
        <main></main>
        <Footer />
      </FullBody>
    );
  }
}
