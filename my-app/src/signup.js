import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { userSignup } from "./api";
import { ValidateSignature, isValidPassword } from "./utils";
import isEmail from "validator/lib/isEmail";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import zxcvbn from "zxcvbn";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import TextField from "@mui/material/TextField";
import {
  AccountCircle,
  Key,
  Email,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    console.log(this);
    this.state = {
      inputValue: {
        showPassword: false,
        email: "",
        password: "",
        nickname: "",
        emailFormat: true,
        passwordFormat: true,
        regexPasswordPass: false,
        isLoading: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState((prevState) => {
      return {
        inputValue: {
          ...prevState.inputValue,
          showPassword: !prevState.inputValue.showPassword,
        },
      };
    });
  }
  // 抓到input框
  handleChange(e) {
    let valueType = e.target.name;
    let value = e.target.value;

    if (valueType === "email") {
      const validateEmailFormat = isEmail(value);

      this.setState((prevState) => {
        return {
          inputValue: {
            ...prevState.inputValue,
            [valueType]: value,
            emailFormat: validateEmailFormat,
          },
        };
      });
    } else if (valueType === "password") {
      const validatePasswordFormat = zxcvbn(value);
      const regexPasswordPass = isValidPassword(value);
      const { score } = validatePasswordFormat;

      this.setState((prevState) => {
        return {
          inputValue: {
            ...prevState.inputValue,
            [valueType]: value,
            passwordFormat: score,
            regexPasswordPass: regexPasswordPass,
          },
        };
      });
    } else if (valueType === "nickname") {
      this.setState((prevState) => {
        return {
          inputValue: {
            ...prevState.inputValue,
            [valueType]: value,
          },
        };
      });
    }
  }
  // submit answer to backend
  handleClick(e) {
    e.preventDefault();
    const { cookies } = this.props;

    this.setState((prevState) => {
      return {
        inputValue: {
          ...prevState.inputValue,
          isLoading: true,
        },
      };
    });
    const { email, password, nickname } = this.state.inputValue;
    const params = {
      email,
      password,
      nickname,
    };

    console.log("params: ", params);

    // const { password, email, nickname } = params;
    if (password === "" || email === "" || nickname === "") {
      alert("please fill in the register data");
      this.setState((prevState) => {
        return {
          inputValue: {
            ...prevState.inputValue,
            isLoading: false,
          },
        };
      });
      return;
    }

    if (this.state.inputValue.passwordFormat < 2) {
      alert(`Please change a secure password!, Your Password is under secured`);
      this.setState((prevState) => {
        return {
          inputValue: {
            ...prevState.inputValue,
            isLoading: false,
          },
        };
      });
      return;
    }
    userSignup(params)
      .then((response) => {
        this.setState((prevState) => {
          return {
            inputValue: {
              ...prevState.inputValue,
              isLoading: false,
            },
          };
        });
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
        this.setState((prevState) => {
          return {
            inputValue: {
              ...prevState.inputValue,
              isLoading: false,
            },
          };
        });
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
    const pwdLabelColor = {
      0: "red",
      1: "orange",
      2: "yellow",
      3: "green",
      4: "green",
    };

    const pwdLabelText = {
      0: "Very Weak Password",
      1: "Weak Password",
      2: "Moderate Password",
      3: "Strong Password",
      4: "Very Strong Password",
    };
    console.log("inputValue: ", this.state.inputValue);
    return (
      <div className="container-fluid">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={this.state.inputValue.isLoading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="d-flex justify-content-center mt-5 signin__box">
          <form className="col-lg-6 col-md-8 col-12">
            <h4 className="text-center sigin__title">會員註冊</h4>
            {/* <input
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
 */}
            {/* new email */}
            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ height: "8vh" }}
            >
              <div style={{ width: "30vw" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Email
                    sx={{
                      fontSize: "2rem",
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                    }}
                  />
                  <TextField
                    error={!this.state.inputValue.emailFormat}
                    fullWidth
                    name="email"
                    id="input-with-sx"
                    label={
                      this.state.inputValue.emailFormat
                        ? "Email"
                        : "Invalid Email"
                    }
                    variant="standard"
                    type="email"
                    value={this.state.inputValue.email}
                    onChange={this.handleChange}
                    helperText={
                      this.state.inputValue.emailFormat
                        ? ""
                        : "Please enter valid email address"
                    }
                    // size="normal"
                  />
                </Box>
              </div>
            </div>

            <div
              className="d-flex align-items-center justify-content-center my-4"
              style={{ height: "8vh" }}
            >
              <div style={{ width: "30vw" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{
                      fontSize: "2rem",
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                    }}
                  />
                  <TextField
                    fullWidth
                    name="nickname"
                    id="input-with-sx"
                    label="Nickname"
                    variant="standard"
                    type="text"
                    value={this.state.inputValue.nickname}
                    onChange={this.handleChange}
                  />
                </Box>
              </div>
            </div>

            {/* new pwd */}
            <div
              className="d-flex align-items-center justify-content-center mt-4"
              style={{ height: "8vh" }}
            >
              <div style={{ width: "30vw", position: "relative" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Key
                    sx={{
                      fontSize: "2rem",
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                    }}
                  />
                  {/* <div> */}
                  <TextField
                    error={!this.state.inputValue.regexPasswordPass}
                    InputLabelProps={{
                      style: {
                        color:
                          this.state.inputValue.password === ""
                            ? "#474747"
                            : this.state.inputValue.regexPasswordPass
                            ? pwdLabelColor[
                                this.state.inputValue.passwordFormat
                              ]
                            : "#474747",
                      },
                    }}
                    fullWidth
                    name="password"
                    id="standard-password-input"
                    label={
                      this.state.inputValue.password === ""
                        ? "Password"
                        : this.state.inputValue.regexPasswordPass
                        ? pwdLabelText[this.state.inputValue.passwordFormat]
                        : "Password"
                    }
                    variant="standard"
                    type={
                      this.state.inputValue.showPassword ? "text" : "password"
                    }
                    value={this.state.inputValue.password}
                    onChange={this.handleChange}
                    helperText={
                      this.state.inputValue.regexPasswordPass
                        ? ""
                        : "At least 1 uppercase letter, 1 lowercase letter and [0-9]."
                    }

                    // size="normal"
                  />
                  <IconButton
                    style={{ position: "absolute", right: 0, top: "15%" }}
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {this.state.inputValue.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                  {/* </div> */}
                </Box>
              </div>
            </div>

            {/* <button
              type="submit"
              className="signin__btn w-75 d-block mx-auto mt-5 p-2"
              onClick={this.handleClick}
            >
              註冊
            </button> */}
            <div className="d-flex justify-content-center">
              <Button
                type="submit"
                variant="contained"
                className="mx-auto mt-5 p-2"
                style={{ backgroundColor: "#acd5d3", color: "#474747" }}
                onClick={this.handleClick}
                // size="medium"
              >
                註冊
              </Button>
            </div>
          </form>
        </div>
        <div className="signin__box__bottom mt-1 text-center">
          {/* <Link className="d-block" name="home" to="/">
            <span style={{ fontSize: "10px" }}>回到首頁</span>
          </Link> */}
          <Link className="d-block" name="signin" to="/signin">
            <span style={{ fontSize: "10px" }}>已有帳號？登入點我</span>
          </Link>
          {/* <Link className="d-block" name="forgetpwd" to="/forgetpwd">
            <span style={{ fontSize: "10px" }}>忘記密碼</span>
          </Link> */}
        </div>
        {/* 如果設置cookie成功就會導到首頁去 */}
        {this.state.cookies && <Redirect to="/" />}
      </div>
    );
  }
}

export default Signup;
