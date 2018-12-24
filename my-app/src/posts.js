// 類別的第幾頁
// which category which page
import React from 'react';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';

class Posts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { match } = this.props.url;
		console.log(this.props);
		// 讓你知道你在哪一頁
		// post給server他在哪一個類別的第幾頁
		// server傳回來
		// title設成<Link to="/blog/posts(這個用他的id，存在mysql那邊的id)">
		console.log('the category is : ' + match.params.category, 'the page is : ' + match.params.page);
		return <div className="red">123</div>;
	}
}

export default Posts;
