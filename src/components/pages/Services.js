import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/2.jpg";
import Service from "../common/Service";

class Services extends Component {
  render() {
    return (
      <div>
        <Header
          title="Services That We Provide"
          subtitle="You can explore our mobile app for better experience"
          buttonText="Download Amplefresh App"
          link="https://play.google.com/store/apps/details?id=com.amplefreshapp"
          showButton={true}
          image={image}
        />
        <Service />
      </div>
    );
  }
}
export default Services;
