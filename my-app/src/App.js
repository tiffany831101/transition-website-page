import React, { Component } from 'react';
import './App.css';
import Header from "./header.js";
import Nav from "./Nav.js";
import Home from "./home";
import Signin from "./signin";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Unemploy from "./unemploy";
import Courses from "./courses";
import Signup from "./signup"
import Blog from "./blog";
import Income from "./income";
class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <Nav />
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/unemploy" component={Unemploy} />
            <Route path="/signup" component={Signup} />
            {/* <Route exact path="/jobs" component={Job} /> */}
            <Route exact path="/courses" component={Courses} />
            <Route path="/income" component={Income} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
