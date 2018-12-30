import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class Page extends React.Component {
    constructor(props) {
        super(props);
        const { match } = props.url;
        console.log(match);
        this.state = {
            page: [],
        }
    }

    componentDidMount() {
        const { match } = this.props.url;
        const category = match.params.category;
        console.log("didmount");
        this.setState({
            category: category,
        })
        axios
            .post('http://localhost:3001/pagination', {
                category: category,
            })
            .then(response => {
                this.setState(prevState => {
                    let totalPage = (Math.ceil(response.data[0]["COUNT(title)"] * 100 / 100 / 5));
                    if (totalPage == 0) {
                        console.log("沒有資料")
                        return;

                    }
                    const pageArr = [];
                    for (let i = 1; i <= totalPage; i++) {
                        pageArr.push(i)
                        if (i == totalPage) {
                            return ({
                                page: pageArr,
                            })
                        }
                    }

                    // totalPage = (Math.ceil(response.data[0]["COUNT(title)"] * 100 / 100 / 5))
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    componentDidUpdate(prevProps, prevState) {
        const { match } = this.props.url;
        const category = match.params.category;
        // console.log(category);

        console.log(prevProps.url.match.params.category, prevState.category);
        if (prevProps.url.match.params.category === prevState.category) return;
        if (prevProps.url.match.params.category !== prevState.category) {
            axios
                .post('http://localhost:3001/pagination', {
                    category: prevProps.url.match.params.category,
                })
                .then(response => {
                    this.setState(prevState => {

                        console.log("update")
                        // if (prevState.category == this.state.category) return
                        console.log(prevState.category, this.state.category)
                        console.log("here")
                        let totalPage = (Math.ceil(response.data[0]["COUNT(title)"] * 100 / 100 / 5));
                        if (totalPage == 0) {
                            return ({
                                page: 0,
                                category: category,
                            })
                        } else {
                            const pageArr = [];
                            for (let i = 1; i <= totalPage; i++) {
                                pageArr.push(i)
                                if (i == totalPage) {
                                    return ({
                                        page: pageArr,
                                        category: category,
                                    })
                                }
                            }
                        }
                        // totalPage = (Math.ceil(response.data[0]["COUNT(title)"] * 100 / 100 / 5))
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });

            console.log("change category");
        } else {
            return;
        }
        // this.setState(prevState => {
        //     if (prevState.category == category) {
        //         console.log(prevState.category, this.state.category);
        //         console.log("same category");
        //         return
        //     } else {
        //         console.log(category);
        //         return ({
        //             category: category,
        //         })
        //     }

        // })


        // console.log()


    }

    render() {
        const { match } = this.props.url;
        const category = match.params.category;
        console.log(this.state);
        return (
            <div className="mt-3">
                {this.state.page !== 0 && this.state.page.map((page, index) => <Link className="blog__pagination px-2" to={"/blog/" + category + "/" + (++index)}>{index}</Link>)}
                {!this.state.page && <p>目前暫無貼文</p>}
            </div>
        )
    }
}


export default Page;