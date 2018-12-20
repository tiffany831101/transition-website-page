// 每一篇文章
// which category which page
import React from 'react';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';

class Post extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { match } = this.props;
		// 讓你知道你在哪一頁
		// post給server他在哪一個類別的第幾頁
		// server傳回來
		// title設成<Link to="/blog/posts(這個用他的id，存在mysql那邊的id)">
		console.log('這篇文章的id是： ' + match.params.id);
		return <div className="green">嗨嗨我是單篇文章</div>;
	}
}

export default Post;
