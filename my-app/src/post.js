// 每一篇文章
// which category which page
import React from 'react';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';
import axios from 'axios';
class Post extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		const { cookies } = props.cookies
		const { match } = props.url;
		this.state = {
			blogContent: [],
			parent_id: match.params.id,
			nickname: cookies.user,
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidUpdate() {
	// 	const { match } = this.props.url;
	// 	axios
	// 		.post('http://localhost:3001/eacharticle', {
	// 			id: match.params.id,
	// 		})
	// 		.then(response => {
	// 			console.log(response.data);
	// 			this.setState(prevState => {
	// 				if (prevState.blogContent.length === 0) {
	// 					console.log("改ing")
	// 					return ({
	// 						blogContent: response.data,
	// 					})

	// 				} else {
	// 					console.log("不用改")
	// 					return
	// 				}
	// 			})
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});

	// 	axios
	// 		.post('http://localhost:3001/get_child_cmmt', {
	// 			id: match.params.id,
	// 		})
	// 		.then(response => {
	// 			console.log(response.data);
	// 			this.setState(prevState => {
	// 				console.log(prevState.child_cmmt, this.state.child_cmmt);
	// 				if (prevState.child_cmmt.length === this.state.child_cmmt.length) {
	// 					console.log("一樣不用改")
	// 					return
	// 				} else {
	// 					console.log("改ing...")
	// 					return ({
	// 						child_cmmt: response.data,
	// 					})
	// 				}
	// 			})
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});

	// }


	componentDidMount() {
		const { match } = this.props.url;
		axios
			.post('http://localhost:3001/eacharticle', {
				id: match.params.id,
			})
			.then(response => {
				console.log(response.data);
				this.setState({
					blogContent: response.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			});

		axios
			.post('http://localhost:3001/get_child_cmmt', {
				id: match.params.id,
			})
			.then(response => {
				console.log(response.data);
				this.setState({
					child_cmmt: response.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	handleChange(e) {
		this.setState({
			childInput: e.target.value,
		})
	}




	handleClick(e) {
		const { match } = this.props.url;
		e.preventDefault();
		axios
			.post('http://localhost:3001/child_cmmt', {
				child_cmmt: this.state.childInput,
				parent_id: this.state.parent_id,
				nickname: this.state.nickname
			})
			.then(response => {
				console.log(response.data);
				axios
					.post('http://localhost:3001/get_child_cmmt', {
						id: match.params.id,
					})
					.then(response => {
						console.log(response.data);
						this.setState({
							child_cmmt: response.data,
						})
					})
					.catch(function (error) {
						console.log(error);
					});
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	render() {
		const changeDate = (date) => {
			let newDATE = "";
			for (let i = 5; i < 10; i++) {
				newDATE += date[i];
			}
			return (newDATE.replace("-", "月") + "日");
		}
		console.log(this.state);
		return (
			//要調整版面
			<div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
				<Sidebar info={this.props} />
				<div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">
					<div className="blog__banner">
						<img src="" alt="" />
					</div>
					{/* {父留言區塊} */}
					{this.state.blogContent && this.state.blogContent.map((article) => (
						<div>
							<h4>{article.title}</h4>
							<p>{"作者：" + article.nickname}</p>
							<p>{changeDate(article.time)}</p>
							<p>{article.comment}</p>

						</div>
					))}
					{/* {子留言區塊} */}
					<div className="child__cmmt__box green py-3">{this.state.child_cmmt && this.state.child_cmmt.map((child_cmmt, index) => (
						<div className="">

							<p>{child_cmmt.nickname}</p>
							<span>{"B" + (++index)}</span>
							<span>{" " + changeDate(child_cmmt.time)}</span>
							<p>{child_cmmt.comment}</p>
						</div>
					))}</div>
					<div>
						<input type="text" onChange={this.handleChange} value={this.state.childInput} />
						<button onClick={this.handleClick}>送出留言</button>
					</div>
				</div>
				<Advertise />
			</div>
		);
	}
}

export default Post;
