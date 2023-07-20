// 類別的第幾頁
// which category which page
import React from "react";
import Sidebar from "./blogSidebar";
import Advertise from "./blogAdvertise";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Page from "./page";
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogContent: [],
    };
  }

  componentDidMount() {
    const { match } = this.props.url;
    const category = match.params.category;
    const page = match.params.page;
    console.log(category); //可以拿到最新的url類別
    axios
      .post("http://localhost:3001/otherpage", {
        category: category,
        page: page,
      })
      .then((response) => {
        console.log(response.data);
        this.setState((prevState) => {
          if (prevState.blogContent.length == 0) {
            console.log("還沒新增過");
            this.setState({
              blogContent: response.data,
            });
          } else {
            console.log("已經有資料了不要再新增了！");
            return;
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps == this.props) return;
    console.log("run update");
    const { match } = this.props.url;
    const category = match.params.category;
    const page = match.params.page;
    axios
      .post("http://localhost:3001/otherpage", {
        category: category,
        page: page,
      })
      .then((response) => {
        this.setState((prevState) => ({
          blogContent: response.data,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { match } = this.props.url; //傳參數要小心
    console.log(this.props);
    console.log(
      "the category is : " + match.params.category,
      "the page is : " + match.params.page
    );
    return (
      <div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
        <Sidebar info={this.props} />
        <div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">
          <div className="blog__banner">
            <img src="" alt="" />
          </div>
          {this.state.blogContent.map((content) => (
            <div className="mt-3">
              <Link to={"/blog/whole/posts/" + content.id}>
                {content.title}
              </Link>
              <p>{content.time}</p>
              <p>{content.comment}</p>
              <div className="d-flex likebox pb-3">
                <i className="fas fa-heart" style={{ color: "red" }} />
                <p className="ml-1">81000000</p>
                <p className="ml-3">回應</p>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <Page url={this.props.url} />
          </div>
        </div>
        <Advertise />
      </div>
    );
  }
}

export default Posts;
