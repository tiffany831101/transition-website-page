import React from "react";
class Blog extends React.Component {
    constructor() {
        super()
        this.state = {
            clubName: ["婦女閒聊", "求職心得", "育兒心情", "職場抱怨", "日常瑣事", "長青閒聊"],
            showClub: false,
            queryClub: "",
        }

        this.handleClick = this.handleClick.bind(this);
        this.showClub = this.showClub.bind(this);
    }


    handleClick(e) {


        let clubname = (e.target.dataset.name);
        // axios.post("api",clubname).then


        this.setState({
            queryClub: clubname,
            // response:抓回來的response
        })
        console.log(this.state.queryClub);
    }

    showClub(e) {
        console.log(e.target);
        console.log(this.state);
        this.setState({
            showClub: !this.state.showClub,
        })
    }

    render() {
        return (
            <div className="red col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3 blog__box">
                <div className="col-lg-2 col-md-3 col-6 club__name__box">
                    <p className="mb-0 mt-3" onClick={this.showClub}><i className={"mr-2 club__triangle fas " + (this.state.showClub ? "fa-caret-down" : "fa-caret-right")}></i>分類看板</p>
                    <ul className={"p-2 " + (this.state.showClub ? "d-block" : "d-none")}>
                        {this.state.clubName.map(name => (
                            <li data-name={name} className="py-2 club__name px-1" onClick={this.handleClick}>{name}</li>
                        ))}
                    </ul>

                </div>
                <div className="mt-3 red col-lg-7 col-md-7 col-12 post__box">文章在這裡
                </div>
                <div className="mt-2 col-lg-3 col-md-3 col-6 ad__box">
                    <img className="img-fluid mt-3" src="https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <img className="img-fluid mt-3" src="https://images.pexels.com/photos/623046/pexels-photo-623046.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />


                </div>


            </div>
        )
    }

}


export default Blog;