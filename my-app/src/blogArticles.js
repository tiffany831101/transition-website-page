import React from 'react';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';
import axios from 'axios';
class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogContent: [],
		};
	}
	componentDidUpdate() {
		const { match } = this.props.url;
		const category = (match.params.category);
		console.log(category);//可以拿到最新的url類別
		axios
			.post('http://localhost:3001/firstpage', {
				category: category,
			})
			.then(response => {
				console.log(response.data);
				this.setState((prevState) => {
					if (prevState.blogContent.length == this.state.blogContent.length) {
						console.log("跑到這行了")
						// 不改變state
						return
					} else {
						console.log("有改道")
						return {
							blogContent: response.data,
						}
					}


				})

			})
			.catch(function (error) {
				console.log(error);
			});
	}
	render() {
		console.log(this.state.blogContent);
		return (
			<div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
				<Sidebar info={this.props} />
				<div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">
					<div className="blog__banner">
						<img src="" alt="" />
					</div>
					{this.state.blogContent.map(content => (
						<div className="mt-3">
							<h4>{content.title}</h4>
							<p>{content.time}</p>
							<p>{content.content}</p>
							<div className="d-flex likebox pb-3">
								<i className="fas fa-heart" style={{ color: 'red' }} />
								<p className="ml-1">81000000</p>
								<p className="ml-3">回應</p>
							</div>
						</div>
					))}
				</div>
				<Advertise />
			</div>
		);
	}
}

export default Articles;
