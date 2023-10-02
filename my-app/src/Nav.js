import React from "react";
import { Link, withRouter } from "react-router-dom";
class Nav extends React.Component {
  render() {
    const { location } = this.props;
    console.log(location);
    const { pathname } = location;
    return (
      <nav className="navbar navbar-expand-lg navbar-light py-0 mt-2 mb-2">
        <div className="mx-auto col-lg-10 col-md-10 col-10" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-between">
            <li className={"nav-item " + (pathname === "/" && "active")}>
              <Link className="nav-link" name="home" to="/">
                關於我們
              </Link>
            </li>
            <li className={"nav-item " + (pathname === "/resume" && "active")}>
              <Link className="nav-link" name="resume" to="/resume">
                履歷專區
              </Link>
            </li>
            <li
              className={
                "nav-item li__box " + (pathname === "/unemploy" && "active")
              }
            >
              <Link
                className="nav-link umemploy"
                name="unemploy"
                to="/unemploy"
              >
                名片專區
              </Link>
              <div className="umemploy__box col-lg-2 col-md-2 col-6">
                <Link
                  className="nav-link d-block"
                  name="unemploy"
                  to="/unemploy"
                >
                  津貼試算
                </Link>
                <Link className="nav-link d-block" name="income" to="/income">
                  低收入戶
                </Link>
                <Link className="nav-link d-block" name="special" to="/special">
                  特境家庭
                </Link>
                <Link className="nav-link d-block" name="urgent" to="/urgent">
                  急難救助
                </Link>
              </div>
            </li>
            <li className={"nav-item " + (pathname === "/blog" && "active")}>
              <Link className="nav-link" name="blog" to="/blog">
                參與社群
              </Link>
            </li>
            {/* <li className={"nav-item " + (pathname === '/jobs' && 'active')}>
                            <Link className="nav-link" name="jobs" to="/jobs">查詢職缺</Link>
                        </li> */}
            <li className={"nav-item " + (pathname === "/courses" && "active")}>
              <Link className="nav-link" name="courses" to="/courses">
                培訓課程
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
