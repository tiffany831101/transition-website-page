import React from "react";
import axios from "axios";

class Courses extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [
                {
                    "train_class": "智慧節能水電自動控制(桃園) 第01期",
                    "train_place": "勞動力發展署桃竹苗分署",
                    "train_location": "桃園市",
                    "job_name": "水電配線技術員",
                    "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                    "train_time": "2019/01/03│2019/06/25",
                    "train_period": "日間(上午及下午)",
                    "education": "高中/職(含)以上",
                    "train_property": "職前訓練",
                    "insert_at": "2018-12-15 20:12:55"
                },
                {
                    "train_class": "智慧節能水電自動控制(桃園) 第01期",
                    "train_place": "勞動力發展署桃竹苗分署",
                    "train_location": "桃園市",
                    "job_name": "水電配線技術員",
                    "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                    "train_time": "2019/01/03│2019/06/25",
                    "train_period": "日間(上午及下午)",
                    "education": "高中/職(含)以上",
                    "train_property": "職前訓練",
                    "insert_at": "2018-12-15 20:12:55"
                }
            ],
            filters: [
                // top
                { id: "chinesecook", label: "中餐", type: "course" },
                { id: "foreigncook", label: "西餐", type: "course" },
                { id: "baking", label: "烘焙", type: "course" },
                { id: "cake", label: "西式蛋糕", type: "course" },
                { id: "engineer", label: "焊接", type: "course" },
                { id: "webdesign", label: "網頁設計", type: "course" },
                { id: "interior-design", label: "室內裝潢", type: "course" },
                { id: "front-end-engineer", label: "前端工程師", type: "course" },
                // middle-right這個是location(職訓局的位置)
                { id: "北基宜花", label: "北基宜花金馬分署", type: "location" },
                { id: "桃竹苗", label: "桃竹苗分署", type: "location" },
                { id: "中彰投", label: "中彰投分署", type: "location" },
                { id: "雲嘉南", label: "雲嘉南分署", type: "location" },
                { id: "高屏澎東", label: "高屏澎東分署", type: "location" },
                // fullday
                { id: "fullday", label: "職前訓練", type: "fullday" },
                { id: "halfday", label: "在職訓練", type: "fullday" }
            ],
            selectTitle: [
                { id: "上課地點", isActive: false },
                { id: "上課性質", isActive: false },
                { id: "技術標籤", isActive: false }
            ],
            inputValue: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.showSelect = this.showSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.state.filters.filter(item => item.isActive).map(item => item.label)
                .length === 0
        ) {
            console.log("empty");
        } else {
            if (this.state.filters == prevState.filters) return;
            console.log("not empty");
            // keyword: this.state.filters.filter(item => item.isActive).map((item) => item.label)
            const config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
            };

            axios
                .post("http://127.0.0.1:5000/", {
                    keyword: this.state.filters
                        .filter(item => item.isActive)
                        .map(item => item.label)
                })
                .then(response => {
                    //console.log(response);
                    this.setState({
                        result: response.data
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(this.state);
        }
    }

    handleClick(e) {
        let jobId = e.target.name; //取得按到的按紐的 id
        this.setState({
            filters: this.state.filters.map(item =>
                item.id !== jobId
                    ? item
                    : {
                        ...item,
                        isActive: !item.isActive
                    }
            )
        });

        // console.log(this.state.filters.filter(job => job.isActive).map(job => job.id));
    }

    handleKey(event) {
        console.log([...this.state.filters]);
        if (event.key == "Enter") {
            console.log("its enter");
            this.setState({
                filters: [
                    ...this.state.filters,
                    {
                        id: this.state.inputValue,
                        label: this.state.inputValue,
                        type: "",
                        isActive: true
                    }
                ]
            });

            this.setState(prevState => ({
                inputValue: ""
            }));
            // console.log(this.state.filters);
        }
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        });
    }

    showSelect(e) {
        // console.log(e.target);
        let titlename = e.target.dataset.name; //取得按到的按紐的 id
        // console.log(titlename);
        this.setState({
            selectTitle: this.state.selectTitle.map(item =>
                item.id !== titlename
                    ? {
                        ...item,
                        isActive: false
                    }
                    : {
                        ...item,
                        isActive: !item.isActive
                    }
            )
        });
        // console.log(this.state.selectTitle);
    }
    render() {
        return (
            <div onClick={this.showSelect}>
                <div className="course__banner d-flex justify-content-center">
                    <div className="course__banner__shadow" />
                    <div className="home__banner__box col-lg-5 col-md-6 col-12">
                        <div className="slogan col-lg-12 col-md-12 col-12 flex-wrap text-center mt-5">
                            <h4 className="py-5">
                                我們改變不了上天發給我們的牌 只能決定怎麼打這手牌。
              </h4>
                        </div>
                        <div className="mt-5 col-lg-12 col-md-12 col-md-12 text-center d-flex justify-content-center">
                            <button className="course__banner__btn p-2 mb-5">
                                前往性向測驗
                <i className="fas fa-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* 上面的 */}
                <div className="mt-5 keyword__box col-lg-8 col-md-8 col-12 px-0">
                    <div className="px-0 courses__title col-lg-12 col-md-12 col-12">
                        {/* <p>熱門類別</p> */}
                        <h4 className="p-2 mb-0">熱門類別</h4>
                        <div className="triangle" />
                    </div>

                    <div className="col-lg-12 col-md-12 col-12 top__keyword__box py-3">
                        {this.state.filters
                            .filter(job => job.type === "course")
                            .map(job => {
                                return (
                                    <button
                                        className={
                                            "mt-3 mx-2 px-2 tagbtn " +
                                            (job.isActive ? "clicked" : "unclick")
                                        }
                                        name={job.id}
                                        onClick={this.handleClick}
                                    >
                                        {job.label}
                                        {job.isActive ? <i className="fas fa-times delete" /> : ""}
                                    </button>
                                );
                            })}
                    </div>
                </div>
                {/* 中間的 */}
                <div className="px-0 mt-5 flex-wrap middlepart__keyword__box col-lg-8 col-md-8 col-12 d-flex justify-content-between">
                    <div className="middleright__keyword__box col-lg-4 col-md-6 col-12">
                        <div className="choose__location ">
                            <div
                                className="col-lg-12 col-md-12 col-12 keyword__select__title px-2 py-1"
                                onClick={this.showSelect}
                                data-name="上課地點"
                            >
                                上課地點
                <i className="fas fa-caret-down triangle__point float-right" />
                            </div>
                            <div
                                className={
                                    "py-3 col-lg-12 col-md-12 col-12 d-flex flex-wrap justify-content-between keyword__select " +
                                    (this.state.selectTitle[0].isActive ? "" : "d-none")
                                }
                            >
                                {this.state.filters
                                    .filter(job => job.type === "location")
                                    .map(job => {
                                        return (
                                            <button
                                                className={
                                                    "mt-3 mx-2 px-2  tagbtn " +
                                                    (job.isActive ? "clicked" : "unclick")
                                                }
                                                name={job.id}
                                                onClick={this.handleClick}
                                            >
                                                {job.label}
                                                {job.isActive ? (
                                                    <i className="fas fa-times delete" />
                                                ) : (
                                                        ""
                                                    )}
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>

                    <div className="middleright__keyword__box col-lg-3 col-md-6 col-12">
                        <div className="choose__fulltime">
                            <div
                                className="col-lg-12 col-md-12 col-12 keyword__select__title px-2 py-1"
                                onClick={this.showSelect}
                                data-name="上課性質"
                            >
                                上課性質
                <i className="fas fa-caret-down triangle__point float-right" />
                            </div>
                            <div
                                className={
                                    "py-3 col-lg-12 col-md-12 col-12 d-flex flex-wrap justify-content-between keyword__select " +
                                    (this.state.selectTitle[1].isActive ? "" : "d-none")
                                }
                            >
                                {this.state.filters
                                    .filter(job => job.type === "fullday")
                                    .map(job => {
                                        return (
                                            <button
                                                className={
                                                    "mt-3 mx-2 px-2  tagbtn " +
                                                    (job.isActive ? "clicked" : "unclick")
                                                }
                                                name={job.id}
                                                onClick={this.handleClick}
                                            >
                                                {job.label}
                                                {job.isActive ? (
                                                    <i className="fas fa-times delete" />
                                                ) : (
                                                        ""
                                                    )}
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="middleright__keyword__box col-lg-5 col-md-6 col-12">
                        <div className="input__keyword d-flex py-1">
                            <i className="ml-1 fas fa-search" />
                            <input
                                className="ml-3"
                                type="text"
                                placeholder="關鍵字"
                                value={this.state.inputValue}
                                onChange={this.handleChange}
                                onKeyPress={this.handleKey}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <p>您目前搜尋關鍵字：</p>
                    {this.state.filters
                        .filter(job => job.isActive)
                        .map(job => {
                            return (
                                <button
                                    className="mx-2 px-2  tagbtn clicked"
                                    name={job.id}
                                    onClick={this.handleClick}
                                >
                                    {job.label}
                                    <i
                                        className="fas fa-times delete"
                                        onClick={this.handleClick}
                                    />
                                </button>
                            );
                        })}
                </div>

                <div className="p-2 mt-3 course__result__box col-lg-12 col-md-12 col-12">
                    {this.state.result.map(course => (
                        <div className="mb-3 course__box d-flex flex-wrap">
                            <div className="course__pic col-lg-4 col-md-4 col-12">
                                123
                            {/* 放圖表的地方 */}
                            </div>
                            <div className="course__details col-lg-8 col-md-8 col-12 py-2">
                                <h4 className="course__name">{course.train_class}</h4>
                                <p className="course__place"><i className="fas fa-map-marked-alt mr-2"></i>{course.train_place}</p>
                                <p className="sub__title course__time mb-0"><i className="fas fa-calendar-alt mr-2"></i>{course.train_time.replace("│", "~")}</p>
                                <p className="sub__title course__period mb-0"><i className="fas fa-school mr-2"></i>{course.train_period}</p>
                                <p className="sub__title course__job__name mb-0"><i className="fas fa-tags mr-2"></i>{course.job_name}</p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        );
    }
}
export default Courses;
