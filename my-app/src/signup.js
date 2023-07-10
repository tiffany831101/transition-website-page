import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { userSignup } from "./api";
import { ValidateSignature } from "./utils";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    console.log(this);
    this.state = {
      inputValue: {
        email: "",
        password: "",
        nickname: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // 抓到input框
  handleChange(e) {
    let valueType = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      return {
        inputValue: {
          ...prevState.inputValue,
          [valueType]: value,
        },
      };
    });
  }
  // submit answer to backend
  handleClick(e) {
    e.preventDefault();
    const { cookies } = this.props;

    const params = this.state.inputValue;
    console.log("ppp: ", params);
    const { password, email, nickname } = params;
    if (password === "" || email === "" || nickname === "") {
      alert("please fill in the register data");
      return;
    }
    userSignup(params)
      .then((response) => {
        const { data } = response.data;
        const { id, token } = data;
        console.log("res: ", data);
        if (token === null && id === -1) {
          if (data.reason === "USER_HAS_SIGNED_UP") {
            // redirect to signin page
            alert("email has been registered already");
            window.location = "#/signin";
            // <Redirect to="/signin" />;
          }
        } else {
          localStorage.setItem("token", token);
          localStorage.setItem("token", data.token);
          const payload = ValidateSignature(data.token);
          cookies.set("user", payload.nickname, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000,
          });
          this.setState({
            cookies: payload.nickname,
          });
          window.location = "/";
        }
        // console.log(response);
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
        // ...
      });
    // axios
    //     .post('http://localhost:3001/signup', {
    //         signup: this.state.inputValue,
    //     })
    //     .then(response => {
    //         // 這邊有render出來爬回來的api
    //         console.log(response.data);
    //         // this.setState({
    //         //     result: response.data,
    //         // });
    //         if (response.data === "ok") {
    //             alert("登入成功")
    //             console.log(this);
    //             const { cookies } = this.props;
    //             cookies.set('user', this.state.inputValue.nickname, { path: '/', maxAge: 60000 });
    //             this.setState({
    //                 cookies: this.state.inputValue.nickname,
    //             })
    //         } else if (response.data === "error") {
    //             this.setState({
    //                 caution: "登入失敗"
    //             })
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center mt-5 signin__box">
          <form className="col-lg-6 col-md-8 col-12">
            <h4 className="text-center sigin__title">會員註冊</h4>
            <input
              name="email"
              className="d-block w-75 mx-auto mt-5 signin__input p-2"
              type="email"
              placeholder="請輸入電子信箱"
              value={this.state.inputValue.email}
              onChange={this.handleChange}
            />
            <input
              name="nickname"
              className="d-block w-75 mx-auto mt-4 signin__input p-2"
              type="text"
              placeholder="請輸入暱稱"
              value={this.state.inputValue.nickname}
              onChange={this.handleChange}
            />
            <input
              name="password"
              className="d-block w-75 mx-auto mt-4 signin__input p-2"
              type="password"
              placeholder="請輸入密碼"
              value={this.state.inputValue.password}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="signin__btn w-75 d-block mx-auto mt-5 p-2"
              onClick={this.handleClick}
            >
              註冊
            </button>
          </form>
        </div>
        <div className="signin__box__bottom mt-3 text-center">
          <Link className="d-block" name="home" to="/">
            回到首頁
          </Link>
          <Link className="d-block my-2" name="signup" to="/signup">
            已有帳號？登入點我
          </Link>
          <Link className="d-block" name="forgetpwd" to="/forgetpwd">
            忘記密碼
          </Link>
        </div>
        {/* 如果設置cookie成功就會導到首頁去 */}
        {this.state.cookies && <Redirect to="/" />}
      </div>
    );
  }
}

export default Signup;
