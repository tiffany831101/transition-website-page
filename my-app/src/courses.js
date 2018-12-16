import React from "react";
import axios from "axios";


class Courses extends React.Component {
    constructor() {
        super();
        this.state = {
            result: null,
            defaultResult: [{
                "education": "國中(含)以上",
                "insert_at": "2018-12-15 20:12:48",
                "job_name": "機械製圖員",
                "regis_time": "2018/02/01 00:00:00│2018/03/16 00:00:00",
                "train_class": "電腦輔助機械製圖班(SolidWorks) 第01期",
                "train_location": "彰化縣",
                "train_period": "假日",
                "train_place": "勞動力發展署中彰投分署",
                "train_property": "在職訓練",
                "train_time": "2019/04/13│2019/06/15"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:53",
                "job_name": "業務助理",
                "regis_time": "2018/05/08 12:00:00│2018/12/18 16:00:00",
                "train_class": "辦公室圖文整合應用班 第01期",
                "train_location": "臺南市",
                "train_period": "日間(上午及下午)",
                "train_place": "群偉國際有限公司",
                "train_property": "職前訓練",
                "train_time": "2018/12/28│2019/03/21"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:53",
                "job_name": "自動化機械加工技術人員",
                "regis_time": "2018/05/24 00:00:00│2019/01/11 23:59:00",
                "train_class": "機電自動化設計人才培訓班 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "南亞科技學校財團法人南亞技術學院",
                "train_property": "職前訓練",
                "train_time": "2019/01/29│2019/04/12"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "美容技術員",
                "regis_time": "2018/08/07 00:00:00│2018/12/18 17:00:00",
                "train_class": "俏睫熱蠟美膚養成班 第01期",
                "train_location": "新北市",
                "train_period": "日間(上午及下午)",
                "train_place": "社團法人中華美容技藝促進協會附設職業訓練中心",
                "train_property": "職前訓練",
                "train_time": "2018/12/27│2019/03/13"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "西點、麵包烘焙人員",
                "regis_time": "2018/08/07 08:30:00│2018/12/04 17:00:00",
                "train_class": "烘焙食品人員培訓班 第01期",
                "train_location": "南投縣",
                "train_period": "日間(上午或下午)",
                "train_place": "社團法人台灣職場技能協進會",
                "train_property": "職前訓練",
                "train_time": "2018/12/17│2019/02/25"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "西點、麵包烘焙人員",
                "regis_time": "2018/09/07 00:00:00│2018/12/10 16:00:00",
                "train_class": "烘焙證照暨手作西點創業班(融合式專班) 第01期",
                "train_location": "雲林縣",
                "train_period": "日間(上午及下午)",
                "train_place": "社團法人雲林縣勞工職業技能促進會",
                "train_property": "職前訓練",
                "train_time": "2018/12/24│2019/03/14"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "資訊設備管制人員",
                "regis_time": "2018/09/17 00:00:00│2018/12/17 23:59:00",
                "train_class": "網路架設實務應用(泰山) 第01期",
                "train_location": "新北市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署北基宜花金馬分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/17│2019/07/12"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "其它機械操作工",
                "regis_time": "2018/09/18 00:00:00│2018/12/20 23:59:00",
                "train_class": "電腦模具設計(泰山)  第01期",
                "train_location": "新北市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署北基宜花金馬分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/16│2019/07/22"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "電機技術人員",
                "regis_time": "2018/09/21 00:00:00│2018/12/25 23:59:00",
                "train_class": "電機設計維修(泰山)  第01期",
                "train_location": "新北市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署北基宜花金馬分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/21│2019/07/16"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "電機技術人員",
                "regis_time": "2018/09/21 09:00:00│2018/12/05 17:30:00",
                "train_class": "家庭水電配線及節能家電維修技術班 第01期",
                "train_location": "嘉義市",
                "train_period": "日間(上午或下午)",
                "train_place": "民眾科技有限公司",
                "train_property": "職前訓練",
                "train_time": "2018/12/17│2019/03/11"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:54",
                "job_name": "網路管理工程師",
                "regis_time": "2018/09/25 00:00:00│2018/12/03 23:59:00",
                "train_class": "網路工程師實務應用(五股)  第01期",
                "train_location": "新北市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署北基宜花金馬分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/02│2019/07/06"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "車縫／裁縫類人員",
                "regis_time": "2018/09/25 00:00:00│2018/12/17 17:00:00",
                "train_class": "皮革工藝技術與製版應用班(融合式臺南市專班) 第01期",
                "train_location": "臺南市",
                "train_period": "日間(上午及下午)",
                "train_place": "社團法人台南市復健青年勵進會",
                "train_property": "職前訓練",
                "train_time": "2018/12/28│2019/04/17"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "製鞋類人員",
                "regis_time": "2018/09/25 09:00:00│2018/12/17 17:30:00",
                "train_class": "製鞋及皮革工藝班 第01期",
                "train_location": "嘉義市",
                "train_period": "日間(上午及下午)",
                "train_place": "社團法人嘉義市多元產業推廣協會",
                "train_property": "職前訓練",
                "train_time": "2018/12/27│2019/03/21"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "中/西餐烹飪廚師",
                "regis_time": "2018/10/01 00:00:00│2018/11/27 23:59:00",
                "train_class": "中餐烹調專業（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/03/28"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "其他類廚師",
                "regis_time": "2018/10/01 00:00:00│2018/11/27 23:59:00",
                "train_class": "時尚飲料輕食專業（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/03/28"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "西點、麵包烘焙人員",
                "regis_time": "2018/10/01 00:00:00│2018/11/27 23:59:00",
                "train_class": "烘焙食品專業（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/08│2019/05/06"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "電機技術人員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "智慧型機器人與圖控整合應用（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "水電配線技術員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "智慧節能水電自動控制(桃園) 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "空調冷凍技術人員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "冷凍空調節能（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:55",
                "job_name": "空調冷凍技術人員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "空調機電實務(中高年齡專班) （桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:70",
                "job_name": "服裝設計師",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "服裝樣版設計（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "成衣製作打版人員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "服飾創意實務（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "影片製作專業人員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "多媒體特效後製（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "建築製圖員",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "室內設計實務（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "裝潢工",
                "regis_time": "2018/10/01 00:00:00│2018/12/04 23:59:00",
                "train_class": "室內裝潢木工實務（桃園） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/03│2019/06/25"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "軟(韌)體設計工程師",
                "regis_time": "2018/10/01 00:00:00│2018/12/11 23:59:00",
                "train_class": "嵌入式Android系統（幼獅） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/07│2019/06/27"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "軟(韌)體設計工程師",
                "regis_time": "2018/10/01 00:00:00│2018/12/13 23:59:00",
                "train_class": "Java系統設計（幼獅） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/08│2019/05/06"
            },
            {
                "education": "高中/職(含)以上",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "通訊軟體工程師",
                "regis_time": "2018/10/01 00:00:00│2018/12/13 23:59:00",
                "train_class": "iOS手機程式開發（幼獅） 第01期",
                "train_location": "桃園市",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/08│2019/05/06"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:71",
                "job_name": "西點、麵包烘焙人員",
                "regis_time": "2018/10/01 00:00:00│2018/12/13 23:59:00",
                "train_class": "手感人氣烘焙飲料實務(西點蛋糕)(新竹) 第01期",
                "train_location": "新竹縣",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/15│2019/05/13"
            },
            {
                "education": "不限",
                "insert_at": "2018-12-15 20:12:72",
                "job_name": "中/西餐烹飪廚師",
                "regis_time": "2018/10/01 00:00:00│2018/12/13 23:59:00",
                "train_class": "活力早午餐實務（苗栗） 第01期",
                "train_location": "苗栗縣",
                "train_period": "日間(上午及下午)",
                "train_place": "勞動力發展署桃竹苗分署",
                "train_property": "職前訓練",
                "train_time": "2019/01/17│2019/05/15"
            }],
            filters: [
                // top
                { id: "chinesecook", label: "輕食", type: "course" },
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
        console.log(this.state.filters
            .filter(item => item.isActive)
            .map(item => item.label));
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
                .post("https://9500836e.ngrok.io/course", {
                    keyword: this.state.filters
                        .filter(item => item.isActive)
                        .map(item => item.label)
                })
                .then(response => {
                    console.log(response.data.result);
                    this.setState({
                        result: response.data.result,
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(this.state.result);
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
        console.log(this.state.result);
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
                    {!this.state.result && this.state.defaultResult.map(course => (
                        <div className="mb-3 course__box d-flex flex-wrap">
                            <div className="course__pic col-lg-4 col-md-4 col-12">
                                {/* {<Chart />} */}
                                {/* 放圖表的地方 */}
                                <img className="img-fluid" src="http://t.wsgxsp.com/uploads/150431955713113.png" alt="" />

                            </div>
                            <div className="course__details col-lg-8 col-md-8 col-12 py-2">
                                <h4 className="course__name">{course.train_class}</h4>
                                <p className="course__place"><i className="fas fa-map-marked-alt mr-2"></i>{course.train_place}</p>
                                <p className="sub__title course__time mb-0"><i className="fas fa-calendar-alt mr-2"></i>{course.train_time}</p>
                                <p className="sub__title course__period mb-0"><i className="fas fa-school mr-2"></i>{course.train_period}</p>
                                <p className="sub__title course__job__name mb-0"><i className="fas fa-tags mr-2"></i>{course.job_name}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.result && this.state.result.map(course => (
                        <div className="mb-3 course__box d-flex flex-wrap">
                            <div className="course__pic col-lg-4 col-md-4 col-12">
                                {/* {<Chart />} */}
                                {/* 放圖表的地方 */}
                                <img className="img-fluid" src="http://t.wsgxsp.com/uploads/150431955713113.png" alt="" />

                            </div>
                            <div className="course__details col-lg-8 col-md-8 col-12 py-2">
                                <h4 className="course__name">{course.train_class}</h4>
                                <p className="course__place"><i className="fas fa-map-marked-alt mr-2"></i>{course.train_place}</p>
                                <p className="sub__title course__time mb-0"><i className="fas fa-calendar-alt mr-2"></i>{course.train_time}</p>
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
