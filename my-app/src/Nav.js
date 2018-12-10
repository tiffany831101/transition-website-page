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
                        <li className={"nav-item " + (pathname === '/' && 'active')}>
                            <Link className="nav-link" name="home" to="/">關於我們</Link>
                        </li>
                        <li className={"nav-item " + (pathname === '/about' && 'active')}>
                            <Link className="nav-link " name="about" to="/about">失業專區</Link>
                        </li>
                        <li className={"nav-item " + (pathname === '/blog' && 'active')}>
                            <Link className="nav-link" name="blog" to="/blog">參與社群</Link>
                        </li>
                        <li className={"nav-item " + (pathname === '/jobs' && 'active')}>
                            <Link className="nav-link" name="jobs" to="/jobs">查詢職缺</Link>
                        </li>
                        <li className={"nav-item " + (pathname === '/courses' && 'active')}>
                            <Link className="nav-link" name="courses" to="/courses">培訓課程</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav);