import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';
class BlogEdit extends React.Component {
	constructor() {
		super();
		this.state = {
			clubName: [
				{ english: 'womentalk', chinese: '婦女閒聊' },
				{ english: 'findjob', chinese: '求職心得' },
				{ english: 'carechild', chinese: '育兒心情' },
				{ english: 'jobcomplaint', chinese: '職場抱怨' },
				{ english: 'dailystuff', chinese: '日常瑣事' },
				{ english: 'eldertalk', chinese: '長青閒聊' },
			],
		};
	}

	render() {
		return (
			<div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
				<Sidebar />
				<div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">
					<div className="blog__banner">
						<img src="" alt="" />
						<p className="mb-0 edit__title">文章標題</p>
						<input type="text" className="px-2 py-1 mb-3 edit__input col-lg-4 col-md-4 col-6" />
						<p className="mb-0 edit__title">分類看板</p>
						<select name="category" className="mb-3 income__location col-lg-4 col-md-4 col-6">
							{/* <option value="" disabled selected /> */}
							{this.state.clubName.map(category => (
								<option value={category.english}>{category.chinese}</option>
							))}
						</select>
						<p className="mb-0 edit__title">文章內容</p>
						<textarea className="mb-5 edit__input" cols="50" rows="8" />
					</div>
				</div>

				{/* 這邊測試可否到達單頁頁面ok的，之後單頁頁面要設成/blog/whole/posts/2這樣的路徑 */}

				{/* <Link to="/blog/whole/posts/2">點我</Link> */}
				<Advertise />
			</div>
		);
	}
}
export default BlogEdit;
