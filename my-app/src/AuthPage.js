import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { userSignup } from "./api";
import { ValidateSignature } from "./utils";
import { getGoogleAuthStatus } from "./api";
class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    console.log(this);
    this.state = {
      successStatus: 0,
    };
  }
  // 抓到input框

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const loginSuccess = searchParams.get("login_success");
    console.log("Login Success:", loginSuccess);
    this.setState({
      successStatus: loginSuccess,
    });
    // Perform further actions based on the value of loginSuccess
  }

  componentDidUpdate(prevProps, prevState) {
    const { successStatus } = this.state;
    if (prevState.successStatus !== successStatus) {
      // Make API request, set cookie, and redirect to home page
      getGoogleAuthStatus()
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    console.log(this.state);
    return <div className="container-fluid">test for auth page</div>;
  }
}

export default withRouter(AuthPage);
