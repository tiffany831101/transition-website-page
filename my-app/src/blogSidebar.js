import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.info.url.match);//如果還沒有登入的時候cookie是undefined
		this.state = {
			clubName: [
				{ english: 'womentalk', chinese: '婦女閒聊' },
				{ english: 'findjob', chinese: '求職心得' },
				{ english: 'carechild', chinese: '育兒心情' },
				{ english: 'jobcomplaint', chinese: '職場抱怨' },
				{ english: 'dailystuff', chinese: '日常瑣事' },
				{ english: 'eldertalk', chinese: '長青閒聊' },
			],
			showClub: false,
			queryClub: '',
		};

		this.handleClick = this.handleClick.bind(this);
		this.showClub = this.showClub.bind(this);
	}

	componentDidMount() {
		if (this.props.info.cookies.cookies.user === undefined) {
			this.setState({
				cookie: false,
				nickname: "",
			})
		} else {
			this.setState({
				cookie: true,
				nickname: this.props.info.cookies.cookies.user,
			})
		}
	}


	handleClick(e) {
		let clubname = e.target.dataset.name;
		// axios.post("api",clubname).then

		this.setState({
			queryClub: clubname,
			// response:抓回來的response
		});
		console.log(this.state.queryClub);
	}

	showClub(e) {
		console.log(e.target);
		console.log(this.state);
		this.setState({
			showClub: !this.state.showClub,
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className="col-lg-2 col-md-3 col-6 club__name__box">
				<div className="post__article__box mt-3">
					{(this.state.cookie && this.props.info.url.match.path !== "/editBlog") && <Link to="/editBlog" className="px-3 py-2 post__article__btn">
						<i className="fas fa-pen mr-2" />
						發文
					</Link>}
					{!this.state.cookie && <Link to="/signin" className="px-3 py-2 post__article__btn">
						<i className="fas fa-pen mr-2" />
						登入
					</Link>}
				</div>
				<p className="mb-0 mt-3" onClick={this.showClub}>
					<i
						className={
							'mr-2 club__triangle fas ' + (this.state.showClub ? 'fa-caret-down' : 'fa-caret-right')
						}
					/>
					分類看板
				</p>
				<ul className={'p-2 ' + (this.state.showClub ? 'd-block' : 'd-none')}>
					{this.state.clubName.map(name => (
						<Link to={'/blog/' + name.english} className="category__link">
							<li data-name={name.chinese} className="py-2 club__name px-1" onClick={this.handleClick}>
								{name.chinese}
							</li>
						</Link>
					))}
				</ul>
			</div>
		);
	}
}

export default Sidebar;
