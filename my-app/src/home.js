import React from "react";
class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="home__banner d-flex justify-content-center">
          <div className="course__banner__shadow"></div>
          <div className="home__banner__box col-lg-4 col-md-6 col-12 mt-3">
            <div className="mt-3 text-center title">
              <h2>Transition 14</h2>
            </div>
            <div className="slogan col-lg-12 col-md-12 col-12 flex-wrap text-center">
              <p>
                這樣的故事可能發生在你我身旁，他們可能孤立無援，面對迷茫的人生手足無措，而我們期望作為照亮昏暗的亮燈，使其能有更明確的方向，充實自己
                飛向人生的下個春天
              </p>
            </div>
            <div className="col-lg-12 col-md-12 col-md-12 text-center d-flex justify-content-center">
              <button className="home__banner__btn p-2 mb-3">
                to be continued
              </button>
            </div>
          </div>
        </div>
        <div className="home__info py-5 d-flex justify-content-center flex-wrap">
          <div className="text-center home__info__title my-3 col-lg-12 col-md-12 col-12">
            我只是暫時失去方向，一定會找到回去的路
          </div>
          <div className="text-center home__info__content my-3 col-lg-8 col-md-8 col-8">
            堅強飛向人生的下個春天{" "}
          </div>
          <div className="col-lg-10 col-md-10 col-10 d-flex justify-content-between flex-wrap">
            <div className="mt-3 col-lg-5 col-md-5 col-12 flex-wrap justify-content-center">
              <img
                className="img-fluid"
                src="https://trello-attachments.s3.amazonaws.com/5c1474d6853d5649f4a2f898/5c14d0656cb11845a18a9494/77cf5afe2450d06cb4fa96fb70bc8f46/AllImage-02.png"
                alt=""
              />
              <p className="img__intro col-lg-8 col-md-8 col-8 mx-auto">
                第一個春天 懵懵懂懂的接下第一份工作
              </p>
              <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                <button className="p-2 home__info__btn">前往職訓課程</button>
              </div>
            </div>
            <div className="mt-3 col-lg-5 col-md-5 col-12 flex-wrap justify-content-center">
              <img
                className="img-fluid"
                src="https://trello-attachments.s3.amazonaws.com/5c1474d6853d5649f4a2f898/5c14d0656cb11845a18a9494/030f482947e54a5cc585d8f11d2a0761/AllImage-04.png"
                alt=""
              />
              <p className="img__intro col-lg-8 col-md-8 col-8 mx-auto">
                憂愁的秋天 面對人生的轉折而被迫妥協
              </p>
              <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                <button className="p-2 home__info__btn">失業津貼試算</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home__bottom py-5 d-flex justify-content-around px-4 flex-wrap">
          <div className="col-lg-5 col-md-4 col-12 home__bottom__left">
            <div className="stamp__box col-lg-6"></div>
            <div className="home__bottom__img mt-5 mx-5 col-lg-12 col-md-12 col-12">
              <img
                className="mt-3"
                src="https://trello-attachments.s3.amazonaws.com/5c1474d6853d5649f4a2f898/5c14d0656cb11845a18a9494/64b729034f71242ee70034e308012937/AllImage-03.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-12 home__bottom__right">
            <div className="mt-5">
              <p>
                想到達明天 現在就要啟程 只有你能帶我走向未來的旅程 想到達明天
                現在就要啟程 你能讓我看見 黑夜過去 天開始明亮的 過程
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
