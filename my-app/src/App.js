import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header.js";
import Nav from "./Nav.js";
import Home from "./home";
import Signin from "./signin";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Unemploy from "./unemploy";
import Courses from "./courses";
import Signup from "./signup";
import Blog from "./pages/Blog/blog";
import Income from "./income";
import Articles from "./pages/Blog/blogArticles";
import Posts from "./pages/Blog/posts";
import Post from "./pages/Blog/post";
import BlogEdit from "./pages/Blog/BlogEdit";
import { withCookies } from "react-cookie";
import { CookiesProvider, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import AuthPage from "./AuthPage";
import Resume from "./pages/Resume/Resume";
class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <CookiesProvider>
        <Router>
          <div className="container-fluid">
            <Header cookies={this.props.cookies} />
            <Nav />
            <div className="container-fluid">
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                path="/auth_success"
                render={(props) => (
                  <AuthPage cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                path="/signin"
                render={(props) => (
                  <Signin cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                path="/unemploy"
                render={(props) => (
                  <Unemploy cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                path="/signup"
                render={(props) => (
                  <Signup cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                path="/resume"
                render={(props) => (
                  <Resume cookies={this.props.cookies} url={props} />
                )}
              />
              {/* <Route exact path="/jobs" component={Job} /> */}
              <Route
                exact
                path="/courses"
                render={(props) => (
                  <Courses cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                path="/income"
                render={(props) => (
                  <Income cookies={this.props.cookies} url={props} />
                )}
              />
              {/* blog首頁，可以render最新的幾筆就好 */}
              <Route
                exact
                path="/blog"
                render={(props) => (
                  <Blog cookies={this.props.cookies} url={props} />
                )}
              />
              {/* category首頁 */}
              <Route
                exact
                path="/blog/:category"
                render={(props) => (
                  <Articles cookies={this.props.cookies} url={props} />
                )}
              />
              {/* 類別的第幾頁 */}
              <Route
                exact
                path="/blog/:category/:page"
                render={(props) => (
                  <Posts cookies={this.props.cookies} url={props} />
                )}
              />
              {/* render哪一篇文章：/blog/posts/:id*/}
              <Route
                exact
                path="/blog/whole/posts/:id"
                render={(props) => (
                  <Post cookies={this.props.cookies} url={props} />
                )}
              />
              <Route
                exact
                path="/editBlog"
                render={(props) => (
                  <BlogEdit cookies={this.props.cookies} url={props} />
                )}
              />
            </div>
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
