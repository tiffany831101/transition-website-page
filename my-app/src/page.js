import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class Page extends React.Component {
    constructor(props) {
        super(props);
        const { match } = props.url;
        console.log(match);
        this.state = {
            // totalPage: 0,
        }
    }

    componentDidMount() {
        const { match } = this.props.url;
        const category = match.params.category;
        axios
            .post('http://localhost:3001/pagination', {
                category: category,
            })
            .then(response => {
                this.setState(prevState => {
                    let totalPage = (Math.ceil(response.data[0]["COUNT(title)"] * 100 / 100 / 5));
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


    render() {
        const { match } = this.props.url;
        const category = match.params.category;
        console.log(this.state);
        return (
            <div>
                {this.state.page && this.state.page.map((page, index) => <Link to={"/blog/" + category + "/" + (++index)}>{index}</Link>)}
            </div>
        )
    }
}


export default Page;