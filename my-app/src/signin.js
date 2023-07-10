import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { userSignin, getGoogleAuth } from "./api";
import GoogleButton from "react-google-button";
import { ValidateSignature } from "./utils";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { cookies } = props;
    this.state = {
      inputValue: {
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickGoogleSignin = this.handleClickGoogleSignin.bind(this);
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

  handleClickGoogleSignin() {
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    window.location = `${backendURL}/auth`;
    // getGoogleAuth()
    //   .then(() => {})
    //   .catch((err) => {
    //     console.log("error: ", err);
    //   });
  }
  // submit answer to backend
  handleClick(e) {
    const { cookies } = this.props;
    e.preventDefault();

    const params = this.state.inputValue;
    userSignin(params)
      .then((response) => {
        const { data } = response.data;
        if (data.token === null && data.id === -1) {
          if (data.reason === "INVALID_EMAIL") {
            console.log("email is wrong");
            alert("email 尚未註冊過");
            window.location = "#/signup";
          } else if (data.reason === "INVALID_PWD") {
            alert("密碼錯誤");
          }
        } else {
          localStorage.setItem("token", data.token);
          const payload = ValidateSignature(data.token);
          console.log("payload: ", payload);
          cookies.set("user", payload.nickname, {
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000,
          });
          this.setState({
            cookies: payload.nickname,
          });
          // const payload = ValidateSignature(data.token);
          // console.log("payload: ", payload);

          return;
        }
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
        // ...
      });
    // axios
    //     .post('http://localhost:3001/signin', {
    //         signin: this.state.inputValue,
    //     })
    //     .then(response => {
    //         // 這邊有render出來爬回來的api
    //         console.log(response.data);
    //         if (response.data !== "pwderror" && response.data !== "accerror") {
    //             // 代表登入成功
    //             // 設定cookie
    //             cookies.set('user', response.data, { path: '/', maxAge: 60000 });
    //             this.setState({
    //                 cookies: response.data,
    //             })
    //         } else if (response.data === "pwderror") {
    //             alert("密碼錯誤")
    //         } else if (response.data === "accerror") {
    //             alert("email錯誤")
    //         }
    //         // this.setState({
    //         //     result: response.data,
    //         // });
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center mt-3 signin__box">
          <form className="col-lg-6 col-md-8 col-12">
            <h4 className="text-center sigin__title mb-3">會員登入</h4>
            <div className="d-flex justify-content-center">
              <GoogleButton
                label="使用 Google 帳號登入"
                onClick={() => {
                  return this.handleClickGoogleSignin();
                }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div class="horizontal-line w-75">
                <span class="line"></span>
                <span class="or">or</span>
                <span class="line"></span>
              </div>
            </div>
            <input
              name="email"
              className="d-block w-75 mx-auto signin__input p-2"
              type="email"
              placeholder="請輸入電子信箱"
              value={this.state.inputValue.email}
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
              className="signin__btn w-75 d-block mx-auto mt-3 p-2"
              onClick={this.handleClick}
            >
              登入
            </button>
          </form>
        </div>

        <div className="signin__box__bottom mt-2 text-center">
          {/* <Link className="d-block" name="home" to="/">
            回到首頁
          </Link> */}

          <Link className="d-block my-1" name="signup" to="/signup">
            尚未註冊點我
          </Link>
          <Link className="d-block" name="forgetpwd" to="/forgetpwd">
            忘記密碼
          </Link>
        </div>
        {this.state.cookies && <Redirect to="/" />}
      </div>
    );
  }
}

export default Signin;
