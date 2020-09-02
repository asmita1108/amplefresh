import React, { Component } from "react";
import Header from "../common/Header";

import Service from "../common/Service";
import Portfolio from "../common/Portfolio";
import Footer from "../common/footer";
import Team from "../common/Team";
import Timeline from "../common/Timeline";

import image from "../assets/back.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome to AmpleFresh"
          subtitle="It's a nyc place to shop"
          buttonText="Tell Me More"
          link="/services"
          showButton={true}
          image={image}
        />
        <Service />
        <Portfolio />
        <Timeline />
        <Team />

        <Footer />
      </div>
    );
  }
}

export default Home;
