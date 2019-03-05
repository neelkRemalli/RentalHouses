import React, { Component } from "react";

import { Container } from "semantic-ui-react";
import HeaderNavbar from "./components/Header";
import Features from "./components/features/Features";
import Info from "./components/info/Info";
import Rent from "./components/rent/Rent";
import Map from "./components/Map";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavbar />
        <Features />
        <Container>
          <Info />
          <Rent />
          <Map />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
