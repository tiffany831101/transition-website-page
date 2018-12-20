import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Nav from './Nav.js';
import Home from './home';
import Signin from './signin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Unemploy from './unemploy';
import Courses from './courses';
import Signup from './signup';
import Blog from './blog';
import Income from './income';
import Articles from './blogArticles';
import Posts from './posts';
import Post from './post';
import BlogEdit from './BlogEdit';
import { withCookies } from 'react-cookie';
import { CookiesProvider, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
class App extends Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
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
							<Route exact path="/" render={() => <Home cookies={this.props.cookies} />} />
							<Route path="/signin" render={() => <Signin cookies={this.props.cookies} />} />
							<Route path="/unemploy" render={() => <Unemploy cookies={this.props.cookies} />} />
							<Route path="/signup" render={() => <Signup cookies={this.props.cookies} />} />
							{/* <Route exact path="/jobs" component={Job} /> */}
							<Route exact path="/courses" render={() => <Courses cookies={this.props.cookies} />} />
							<Route path="/income" render={() => <Income cookies={this.props.cookies} />} />
							{/* blog首頁，可以render最新的幾筆就好 */}
							<Route exact path="/blog" render={() => <Blog cookies={this.props.cookies} />} />
							{/* category首頁 */}
							<Route
								exact
								path="/blog/:category"
								render={() => <Articles cookies={this.props.cookies} />}
							/>
							{/* 類別的第幾頁 */}
							<Route
								exact
								path="/blog/:category/:page"
								render={() => <Posts cookies={this.props.cookies} />}
							/>
							{/* render哪一篇文章：/blog/posts/:id*/}
							<Route
								exact
								path="/blog/whole/posts/:id"
								render={() => <Post cookies={this.props.cookies} />}
							/>
							<Route exact path="/editBlog" render={() => <BlogEdit cookies={this.props.cookies} />} />
						</div>
					</div>
				</Router>
			</CookiesProvider>
		);
	}
}

export default withCookies(App);
