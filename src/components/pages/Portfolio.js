import React, { Component } from "react";
import PortfolioList from "../common/Portfolio";
import Header from "../common/Header";
import image from "../assets/img/2.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header
          title="Portfolio"
          subtitle="You can order our product by Category"
          buttonText="Explore More"
          link="/services"
          showButton={false}
          image={image}
        />
        <PortfolioList />
      </div>
    );
  }
}
export default Portfolio;
