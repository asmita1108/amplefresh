import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

import image1 from "../assets/img/portfolio/ata.jpg";
import image2 from "../assets/img/portfolio/dal.jpg";
import image3 from "../assets/img/portfolio/edible.jpg";
import image4 from "../assets/img/portfolio/snacks.png";
import image5 from "../assets/img/portfolio/pCare.png";
import image6 from "../assets/img/portfolio/hCare.jpg";

const portfolio = [
  { title: "Ata & flour", subtitle: "hh", image: image1 },
  { title: "Pulses", subtitle: "h", image: image2 },
  { title: "Edible oils", subtitle: "h", image: image3 },
  { title: "Snacks & namkeens", subtitle: "h", image: image4 },
  { title: "Personal Care", subtitle: "h", image: image5 },
  { title: "Home Care", subtitle: "h", image: image6 },
];

class Portfolio extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {portfolio.map((item, index) => {
              return <PortfolioItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
