import React, { Component } from "react";
import TeamList from "../common/Team";
import Header from "../common/Header";
import image from "../assets/img/2.jpg";

class Team extends Component {
  render() {
    return (
      <div>
        <Header
          title="Team members"
          subtitle="Without their contribution we are nothing"
          buttonText="Learn more about members"
          link="/services"
          showButton={false}
          image={image}
        />
        <TeamList />
      </div>
    );
  }
}
export default Team;
