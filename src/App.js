import React, { Component } from 'react';
import './css/landing.css';
import { Navbar, Text, Iframe, Box, LinkedIn } from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: "home"
    };
  }

  render() {
    return (
      <Router>
        <section className="hero is-info is-fullheight">
          <Navbar navigation={this.navigation} />

          <div className="hero-body">
            <Route exact path="/" component={Text} />
            <Route path="/projects/:project" component={Iframe} />
            <Route exact path="/contact" component={LinkedIn} />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;