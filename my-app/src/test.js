import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Test extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
		// this.state = {
		// 	category: { match },
		// };
	}
	// const { match } = this.props;
	render() {
		console.log(this.props);
		return (
			// <Router>
			//     <Route path="/blog/womentalk" component={Test} />
			// </Router>
			<div className="green">
				<Link className="category__link" to="/blog/womentalk">
					12345
				</Link>
			</div>
		);
	}
}

export default Test;
