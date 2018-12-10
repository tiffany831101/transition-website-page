import React from "react";
class Signin extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex justify-content-center mt-5 signin__box">
                    <form className="col-lg-6 col-md-8 col-12">
                        <h4 className="text-center sigin__title">會員登入</h4>
                        <input className="d-block w-75 mx-auto mt-5 signin__input p-2" type="email" placeholder="請輸入電子信箱" />
                        <input className="d-block w-75 mx-auto mt-4 signin__input p-2" type="password" placeholder="請輸入密碼" />

                        <button type="submit" className="signin__btn w-75 d-block mx-auto mt-5 p-2">登入</button>
                    </form>
                </div>

            </div>


        )
    }

}

export default Signin;