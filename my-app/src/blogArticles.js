import React from 'react';
import Sidebar from './blogSidebar';
import Advertise from './blogAdvertise';
class Articles extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			blogContent: [
				{
					title: '小事公益七天挑戰賽 Day 1',
					content:
						'在五週年的時候，Dcard 的特別企劃「無痕飲食」和卡友們一起透過說故事和實際行動發揮了影響力。我們相信，改變世界不僅僅是一個人做了很多事，而是和一群人一起做了很多小事。2018 年 12 月 16 日，我們即將迎接 Dcard 成立七週年！',
					date: '2011 年 12 月 16日',
				},
				{
					title: '每天努力一點點',
					content:
						'從小到大我都不是個善於上台報告的人或許跟我的成長經歷有關係也或許跟我的個性有關係這樣的情況一直沒有改變直到有一天我遇見一位老師他，改變了我',
					date: '2011 年 12 月 16日',
				},
				{
					title: '最大的後盾—陪伴',
					content:
						'我本身就是一名精神疾病患者除了最近診斷出來的憂鬱還有一直以來都有的恐慌症但是在我精神狀態正常的時候知道有許多許多像我一樣水深火熱中的患者或許 他們積極治療想要康復或許 他們正陷入最低潮籌劃著自殺或許 他們痛苦的發作卻沒有人陪伴著雖然我嘴笨 不太會安慰人',
					date: '2011 年 12 月 16日',
				},
			],
		};
	}
	// const { match } = this.props;
	render() {
		// 點到哪個category就render那個種類的文章，用componentdidmount
		// 要sidebar跟廣告bar
		console.log(this.props.match.params.category);
		return (
			<div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
				<Sidebar />
				<div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">
					<div className="blog__banner">
						<img src="" alt="" />
					</div>
					{this.state.blogContent.map(content => (
						<div className="mt-3">
							<h4>{content.title}</h4>
							<p>{content.date}</p>
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
