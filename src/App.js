import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Services from "./components/pages/Services";

import "../src/css/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/services" component={Services} />
          <Route path="/team" component={Team} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
