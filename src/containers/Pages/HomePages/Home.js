import React, { Component } from "react";
import Footer from "../../../components/footer/footer";
import Gabung from "../../../components/Gabung/Content";
import Gambaran from "../../../components/Gambaran/Content";
import Content from "../../../components/Home/Content";
import Navbar from "../../../components/Home/Navbar";
import Tujuan from "../../../components/Tujuan/Content";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Tujuan />
        <Gambaran />
        <Gabung />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
