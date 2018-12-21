import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';
import axios from 'axios';
import { Redirect } from "react-router-dom";
class BlogEdit extends React.Component {
	constructor(props) {
		super(props);
		const { cookies } = this.props.cookies;
		console.log(cookies);
		this.state = {
			clubName: [
				{ english: 'womentalk', chinese: '婦女閒聊' },
				{ english: 'findjob', chinese: '求職心得' },
				{ english: 'carechild', chinese: '育兒心情' },
				{ english: 'jobcomplaint', chinese: '職場抱怨' },
				{ english: 'dailystuff', chinese: '日常瑣事' },
				{ english: 'eldertalk', chinese: '長青閒聊' },
			],
			answer: {
				nickname: cookies.user,
				category: "womentalk",//設一個default值
				//name存button裡面的name，value存button裡面的innerHTML
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		console.log(e.target.value);
		let answer = e.target.value;
		this.setState({
			answer: {
				...this.state.answer,
				[e.target.name]: answer,
			}
		})
		console.log(this.state.answer);
	}

	handleClick(e) {
		e.preventDefault();
		// console.log(this.state.answer);
		axios
			.post('http://localhost:3001/blogEdit', {
				comment: this.state.answer,
			})
			.then(response => {
				console.log(response.data);
				this.setState({
					edited: this.state.answer.category,//結束之後把他導到那個版
				})

			})
			.catch(function (error) {
				console.log(error);
			});

	}

	render() {
		return (
			<div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
				<Sidebar info={this.props} />
				<div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">
					<div className="blog__banner">
						<img src="" alt="" />
						<p className="mb-0 edit__title">文章標題</p>
						<input type="text" name="title" className="px-2 py-1 mb-3 edit__input col-lg-4 col-md-4 col-6" onChange={this.handleChange} value={this.state.answer.title} />
						<p className="mb-0 edit__title">分類看板</p>
						<select name="category" className="mb-3 income__location col-lg-4 col-md-4 col-6" onClick={this.handleChange}>
							{/* <option value="" disabled selected /> */}
							{this.state.clubName.map(category => (
								<option value={category.english}>{category.chinese}</option>
							))}
						</select>
						<p className="mb-0 edit__title">文章內容</p>
						<textarea name="comment" className="mb-5 edit__input" cols="50" rows="8" onChange={this.handleChange} value={this.state.answer.content} />
						<button className="px-2 py-1 d-block mb-3 blog__edit__submit" onClick={this.handleClick}>發表文章</button>
					</div>
				</div>

				{/* 這邊測試可否到達單頁頁面ok的，之後單頁頁面要設成/blog/whole/posts/2這樣的路徑 */}

				{/* <Link to="/blog/whole/posts/2">點我</Link> */}
				<Advertise />
				{this.state.edited && <Redirect to={"/blog/" + this.state.edited} />}
			</div>
		);
	}
}
export default BlogEdit;
