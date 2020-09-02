import React, { Component } from "react";

import Header from "../common/Header";
import Timeline from "../common/Timeline";
import image from "../assets/img/2.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="About Us"
          subtitle="It's really a great story"
          buttonText="Tell Me More"
          link="/services"
          showButton={false}
          image={image}
        />
        <Timeline />
      </div>
    );
  }
}
export default About;
