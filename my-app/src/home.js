import React from "react";
class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="home__banner d-flex justify-content-center py-3">
                    <div className="home__banner__box col-lg-4 col-md-6 col-12">
                        <div className="mt-3 text-center title">
                            <h2>Take Me</h2>
                            <h2>Anywhere</h2>
                        </div>
                        <div className="slogan col-lg-12 col-md-12 col-12 flex-wrap text-center">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit obcaecati natus dolorem blanditiis possimus distinctio doloribus accusamus provident ad, quia et, quo ut optio, harum voluptatum. Necessitatibus animi corrupti cum?</p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-md-12 text-center d-flex justify-content-center">
                            <button className="home__banner__btn p-2">Shop Sweet & Single</button>
                        </div>
                    </div>
                </div>
                <div className="home__info py-5 d-flex justify-content-center flex-wrap">
                    <div className="text-center home__info__title my-3 col-lg-12 col-md-12 col-12">CANDY FOR YOUR SKIN</div>
                    <div className="text-center home__info__content my-3 col-lg-8 col-md-8 col-8">Lorem ipsum dolor sit </div>
                    <div className="col-lg-10 col-md-10 col-10 d-flex justify-content-between flex-wrap">
                        <div className="mt-3 col-lg-5 col-md-5 col-12 flex-wrap justify-content-center">
                            <img className="img-fluid" src="https://aeolidia.com/wp-content/uploads/2018/05/bonblissity-photography-sweetsingle-satsuma-615x410@2x.jpg" alt="" />
                            <p className="img__intro col-lg-8 col-md-8 col-8 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                                <button className="p-2 home__info__btn">SWEET SINGLE CANDY SCRUP</button>
                            </div>
                        </div>
                        <div className="mt-3 col-lg-5 col-md-5 col-12 flex-wrap justify-content-center">
                            <img className="img-fluid" src="https://aeolidia.com/wp-content/uploads/2018/05/bonblissity-photography-lavenderpedi-615x410@2x.jpg" alt="" />
                            <p className="img__intro col-lg-8 col-md-8 col-8 mx-auto"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                                <button className="p-2 home__info__btn">SWEET SINGLE CANDY SCRUP</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__bottom py-5 d-flex justify-content-around px-4 flex-wrap">
                    <div className="col-lg-5 col-md-4 col-12 home__bottom__left">
                        <div className="stamp__box col-lg-6"></div>
                        <div className="home__bottom__img mt-5 mx-5 col-lg-12 col-md-12 col-12">
                            <img className="mt-3" src="//cdn.shopify.com/s/files/1/2654/7138/files/SweetSingle_Heart_0467_800x800.jpg?v=1542799726" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-12 home__bottom__right">
                        <div className="mt-5">
                            <p>Subscribe to our newsletter for exclusive discounts, new product launches, and some sweet Bonblissity news!
                        </p>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Home;