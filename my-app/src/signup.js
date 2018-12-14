import React from "react";
import { Link, withRouter } from "react-router-dom";
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: {
                email: "",
                pwd: ""
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    // 抓到input框
    handleChange(e) {
        let valueType = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            return ({
                inputValue: {
                    ...prevState.inputValue,
                    [valueType]: value,
                }
            })
        })
    }
    // submit answer to backend
    handleClick(e) {
        console.log(this.state.inputValue);
        // axios.post("api",{
        //     user:this.state.inputValue
        // }).then()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex justify-content-center mt-5 signin__box">
                    <form className="col-lg-6 col-md-8 col-12">
                        <h4 className="text-center sigin__title">會員註冊</h4>
                        <input name="email" className="d-block w-75 mx-auto mt-5 signin__input p-2" type="email" placeholder="請輸入電子信箱" value={this.state.inputValue.email} onChange={this.handleChange} />
                        <input name="pwd" className="d-block w-75 mx-auto mt-4 signin__input p-2" type="password" placeholder="請輸入密碼" value={this.state.inputValue.pwd} onChange={this.handleChange} />
                        <button type="submit" className="signin__btn w-75 d-block mx-auto mt-5 p-2" onClick={this.handleClick}>註冊</button>
                    </form>


                </div>
                <div className="signin__box__bottom mt-3 text-center">
                    <Link className="d-block" name="home" to="/">回到首頁</Link>
                    <Link className="d-block my-2" name="signup" to="/signup">已有帳號？登入點我</Link>
                    <Link className="d-block" name="forgetpwd" to="/forgetpwd">忘記密碼</Link>


                </div>


            </div>


        )
    }

}

export default Signup;