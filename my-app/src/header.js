import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { string } from 'prop-types';
class Header extends React.Component {
	constructor(props) {
		super(props);
		const { cookies } = props;
		console.log(cookies.cookies.user);
		this.state = {
			cookie: false,
			friend: null,
			close: true,
		};

		this.cleanCookie = this.cleanCookie.bind(this);
		this.addFriend = this.addFriend.bind(this);
	}

	// 第一次component炫染的時候
	componentDidMount(prevProps, prevState) {
		const { cookies } = this.props;
		console.log(this.state);



		if (cookies.cookies.user === undefined) {//代表沒有設cookie
			this.setState({
				cookie: false,
			})
		} else {

			this.setState({
				cookie: true,
				username: cookies.cookies.user,
			})

			axios
				.post('http://localhost:3001/addfriend', {
					nickname: cookies.cookies.user
				})
				.then(response => {
					console.log(response.data);
					// 這邊有render出來爬回來的api
					if ((response.data[0]) !== undefined) {
						this.setState({
							friend: response.data[0].nickname,
							close: false,
						})
					};

				})
				.catch(function (error) {
					console.log(error);
				});


		}

	}
	// 第一次component炫染的時候，因為它可能不是馬上進網站就登入註冊，所以header可能已經被渲染很多次
	componentDidUpdate(prevProps, prevState) {

		if (!prevState.close && this.state.close) return;
		// if(prevState==this.state){
		// 	console.log("state沒有變走return")
		// }
		const { cookies } = this.props;
		console.log(this.state);
		// console.log(cookies.cookies.user == undefined);
		// console.log(cookies.cookies.user !== undefined);//代表還沒有設cookie
		if (cookies.cookies.user === undefined) {
			console.log("還沒註冊設定cookie")//這邊要顯示註冊登入
		} else {
			this.setState(prevState => {
				if (prevState.cookie) {
					console.log("已經設定過cookie成登入狀態不要設定了！")
					return //代表已經是true了，就不要再設定state了，結束這個無窮迴圈
				} else {
					console.log("設定cookie...")
					return {
						cookie: true,
						username: cookies.cookies.user,
					}//如果是undefined代表還沒設定，所以不用再繼續跑
				}
			})		//這邊要顯示登出
		}

		if (this.state.cookie) {
			// console.log(this.state.friend, prevState.friend);

			// if (this.state.friend !== null) return;
			axios
				.post('http://localhost:3001/addfriend', {
					nickname: cookies.cookies.user
				})
				.then(response => {
					console.log(response.data);
					this.setState(prevState => {
						if (prevState.friend) {
							console.log("已經設定過friend成nickname不要設定了！")
							return //代表已經是true了，就不要再設定state了，結束這個無窮迴圈
						} else {
							console.log("設定朋友ing")
							if (response.data.length !== 0) {
								return {
									friend: response.data[0].nickname,
									close: false,

								}
							} //如果是undefined代表還沒設定，所以不用再繼續跑
						}
					})
					// 這邊有render出來爬回來的api
					// console.log(response);
					// if (response.data.length !== 0) {
					// 	this.setState(prevState => {
					// 		return ({
					// 			friend: response.data[0].nickname,
					// 			close: false,
					// 		})


					// 		// if (prevState == this.state) {
					// 		// 	console.log("state沒有改變")
					// 		// 	return
					// 		// } else {
					// 		// 	return ({
					// 		// 		
					// 		// 	})
					// 	}
					// 	)
					// } else {
					// 	return ({
					// 		friend: null,
					// 		close: true,
					// 	})
					// }
				})
				.catch(function (error) {
					console.log(error);
				});
		}




	}

	addFriend(e) {
		this.setState({
			close: true,
		})

		let answer = e.target.value;
		console.log(e.target.value);//把答案傳回去給後端
		axios
			.post('http://localhost:3001/agreeadd',
				{
					friend: this.state.friend,
					agree: answer,
					nickname: this.state.username,// agree: answer,
				})
			.then(response => {

			})
			.catch(function (error) {
				console.log(error);
			});


		this.setState({
			close: true,
			friend: null,
		})

	}

	cleanCookie() {
		const { cookies } = this.props;
		console.log("start to clean cookie...");
		// 移除cookie
		cookies.remove("user")
		// 把狀態設成還沒登入，cookie is false
		this.setState({
			cookie: false,
			username: "",
		})
	}

	render() {
		console.log(this.state)

		return (
			<div className="headerBox flex-nowrap">
				<div className="mx-auto col-lg-12 col-md-12 headerBox__title">
					<p className="py-1 my-0 text-center">成為您的幫手，陪伴您重新出發</p>
				</div>
				<div className="px-3 mx-auto mt-3 headerBox__logo d-flex justify-content-between col-lg-12 col-md-12 align-items-center flex-wrap">
					<div className="px-0 headerBox__logo__right d-flex justify-content-between col-lg-3 col-md-6 col-6 py-1">
						<div className="search">搜尋</div>
						<p className="my-0 search__icon">
							<i className="fas fa-search" />
						</p>
					</div>
					<div className="headerBox__logo__middle col-lg-3 col-md-8 col-12">
						<h1 className="text-center">TRANSITION</h1>
					</div>
					<div className="headerBox__logo__left col-lg-3 col-md-6 col-6 d-flex justify-content-between">
						<div className="d-flex justify-content-between col-lg-8 col-md-8 col-8">
							<div className="signin__box col-lg-6 col-md-6 col-6 text-center px-0">
								{!this.state.cookie && <Link className="nav-link px-0 main__color" name="signin" to="/signin">
									登入
								</Link>}

								{this.state.cookie == true && <span className="nav-link px-0 user__name">
									{this.state.username}
								</span>}
							</div>

							<div className="signup__box col-lg-6 col-md-6 col-6 text-center px-0">
								{!this.state.cookie && <Link className="nav-link px-0 main__color" name="singup" to="/signup">
									註冊
								</Link>}
								{this.state.cookie && <Link className="nav-link px-0 main__color" onClick={this.cleanCookie} name="signout" to="/">
									登出
								</Link>}

							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-2 px-0 position-relative account__box">
							<p className="account__profile">
								<i class="far fa-user" />
								<i class="fas fa-caret-down" />
							</p>
							<div className="account__dropdown">
								<Link className="nav-link d-block" name="unemploy" to="/unemploy">
									會員資訊
								</Link>
								<Link className="nav-link d-block" name="income" to="/income">
									津貼帳戶
								</Link>
								<Link className="nav-link d-block" name="special" to="/special">
									課程紀錄
								</Link>
								<Link className="nav-link d-block" name="urgent" to="/urgent">
									履歷表
								</Link>
							</div>
						</div>
					</div>
				</div>


				<div class={"modal " + (this.state.close ? "d-none" : "d-block")} tabindex="-1" role="dialog">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Modal title</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<p>你願意和{this.state.friend}成為朋友嗎？</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" value="yes" onClick={this.addFriend}>確定</button>
								<button type="button" class="btn btn-primary" value="no" onClick={this.addFriend}>不要</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
