import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        return (
            <div className="headerBox flex-nowrap">
                <div className="mx-auto col-lg-12 col-md-12 headerBox__title">
                    <p className="py-1 my-0 text-center">成為您的幫手，陪伴您重新出發</p>
                </div>
                <div className="px-3 mx-auto mt-3 headerBox__logo d-flex justify-content-between col-lg-12 col-md-12 align-items-center flex-wrap">
                    <div className="px-0 headerBox__logo__right d-flex justify-content-between col-lg-3 col-md-6 col-6 py-1">
                        <div className="search">搜尋</div>
                        <p className="my-0 search__icon"><i class="fas fa-search"></i></p>
                    </div>
                    <div className="headerBox__logo__middle col-lg-3 col-md-8 col-12">
                        <h1 className="text-center">Byyourside</h1>
                    </div>
                    <div className="headerBox__logo__left col-lg-3 col-md-6 col-6 d-flex justify-content-between">
                        <div className="d-flex justify-content-between col-lg-8 col-md-8 col-8">
                            <div className="signin__box col-lg-6 col-md-6 col-6 text-center px-0">
                                <Link className="nav-link px-0 main__color" name="signin" to="/signin">登入</Link>
                            </div>

                            <div className="signup__box col-lg-6 col-md-6 col-6 text-center px-0">
                                <Link className="nav-link px-0 main__color" name="singup" to="/signup">註冊</Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-2 px-0">
                            <p className="account__profile">
                                <i class="far fa-user"></i>
                                <i class="fas fa-caret-down"></i>
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        )
    }

}

export default Header;