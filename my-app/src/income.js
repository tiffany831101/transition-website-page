import React from "react";
import axios from "axios";
class Income extends React.Component {
    constructor() {
        super()
        this.state = {
            location: ["台北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "基隆市", "新竹市", "嘉義市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", '澎湖縣'],
            questionNumber: 1,//原本在第一題
            step: 1,
            answer: {
                //name存button裡面的name，value存button裡面的innerHTML
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.lastStep = this.lastStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.showInput = this.showInput.bind(this);
        this.sendFirstStep = this.sendFirstStep.bind(this);
    }
    // 回上一頁
    lastStep(e) {
        console.log(e);
        this.setState({
            questionNumber: (this.state.questionNumber - 1),
        })
    }

    showInput(e) {
        console.log(e);
        this.setState({
            showInput: !this.state.showInput,
        })
    }

    sendFirstStep(e) {
        console.log(e);
        console.log(this.state.answer);
         axios.post("http://127.0.0.1:5000/", {
             result: this.state.answer
         }).then(response => {
             this.setState({
                 result: response.data
             })

         })
             .catch(function (error) {
                 console.log(error);
             });
    }


    // 去下一頁的
    nextStep(e) {
        console.log(e);
        // if (Object.values(this.state.answer).length !== (this.state.questionNumber)) {
        //     alert("請確實填寫")
        //     return;//挑出這個函式
        // }
        if (this.state.questionNumber < 8) {
            this.setState({
                questionNumber: (this.state.questionNumber + 1),
            })
        } else {
            return;
        }



    }


    // 偵測改變的
    handleChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        let answer = e.target.value;
        this.setState({
            answer: {
                ...this.state.answer,
                [e.target.name]: answer,
            }
        })
        console.log(this.state.answer);

    }

    render() {
        return (
            <div className="col-lg-12 col-md-12 col-12 p-3">
                {/* questionairebox */}
                <div className="col-lg-8 col-md-8 col-12 mx-auto px-0 questionaire__box">
                    {/* {第一步} */}
                    {/* q1 */}
                    {this.state.questionNumber === 1 &&
                        (<div className="d-flex">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您的戶籍地為？</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center">
                                        <select name="location" className="income__location col-lg-12 col-md-12 col-12" onClick={this.handleChange}>
                                            <option value="" disabled selected></option>
                                            {this.state.location.map(place => (
                                                <option value={place}>{place}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-center">
                                        <button className="next__btn d-block py-1 px-4" onClick={this.nextStep}>下一步</button>
                                    </div>
                                </div>
                            </div>


                        </div>)}
                    {/* q2 */}
                    {this.state.questionNumber === 2 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您的全家家庭收入?</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center">
                                        <input className="mx-auto d-block signin__input p-1" name="totalmoney" type="text" placeholder="請填寫家庭總收入" value={this.state.answer.totalmoney} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn  py-1 px-3" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn py-1 px-3" onClick={this.nextStep}>下一步</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }
                    {this.state.questionNumber === 3 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您的家庭成員人數?</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center">
                                        <input className="mx-auto d-block signin__input p-1" name="people" type="text" placeholder="請填寫家庭人數" value={this.state.answer.people} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn py-1 px-3" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn py-1 px-3" onClick={this.nextStep}>下一步</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }
                    {this.state.questionNumber === 4 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您全家動產金額為多少?(動產：含存款本金、利息、有價證券、投資合
計、汽車價值)</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center">
                                        <input className="mx-auto d-block signin__input p-1" name="realestate" type="text" placeholder="動產金額" value={this.state.answer.realestate} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn  py-1 px-3" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn  py-1 px-3" onClick={this.nextStep}>下一步</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }

                    {this.state.questionNumber === 5 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您全家不動產金額為多少?(土地公告現值及房屋評定標準價格合計)</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center">
                                        <input className="mx-auto d-block signin__input p-1" name="nomovemoney" type="text" placeholder="不動產金額" value={this.state.answer.nomovemoney} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn  py-1 px-3" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn py-1 px-3" onClick={this.nextStep}>下一步</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }

                    {this.state.questionNumber === 6 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您是否最近1年居住國內超過183日?</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center d-flex justify-content-center">
                                        <button className={"select__btn d-block py-3 px-3 mx-1 " + (this.state.answer.staydays === "yes" && "btn__selected")} name="staydays" value="yes" onClick={this.handleChange}>是</button>
                                        <button className={"select__btn d-block py-3 px-3 mx-1 " + (this.state.answer.staydays === "no" && "btn__selected")} name="staydays" value="no" onClick={this.handleChange}>否</button>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn  py-1 px-2" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn  py-1 px-2" onClick={this.nextStep}>下一步</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }

                    {this.state.questionNumber === 7 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您家中是否有扶養15歲以下之小孩?</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center d-flex justify-content-center">
                                        <input className="mx-auto d-block signin__input p-1" name="haveChildBelow15" type="text" placeholder="請輸入小孩數量" value={this.state.answer.haveChildBelow15} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn  py-1 px-2" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn  py-1 px-2" onClick={this.nextStep}>{(Object.keys(this.state.answer).indexOf("haveChildBelow15") == (-1) || this.state.answer.haveChildBelow15 === "") ? "跳過" : "下一步"}</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }

                    {this.state.questionNumber === 8 && (
                        <div className="d-flex box__2">
                            {/* 放圖片的地方 */}
                            <div className="col-lg-4 col-md-4 red px-0 pic__box">
                                <img className="img-fluid income__pic__height" src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            {/* {放問題的地方} */}
                            <div className="col-lg-8 col-md-8 question__box pt-5">
                                <div className="text-center col-lg-8 col-md-8 col-10 d-flex flex-wrap mx-auto mt-5">
                                    <h4 className="mx-auto">請問您家中是否有就讀高中職以上之學生?</h4>
                                    <div className="col-lg-12 col-md-12 col-12 mt-3 text-center d-flex justify-content-center">
                                        <input className="mx-auto d-block signin__input p-1" name="haveChildHighSchool" type="text" placeholder="請輸入小孩數量" value={this.state.answer.haveChildHighSchool} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap mx-auto mt-5 btn__box justify-content-between">
                                        <button className="last__btn  py-1 px-2" onClick={this.lastStep}>上一步</button>
                                        <button className="next__btn  py-1 px-2" onClick={this.sendFirstStep}>{(Object.keys(this.state.answer).indexOf("haveChildHighSchool") == (-1) || this.state.answer.haveChildHighSchool === "") ? "跳過" : "完成"}</button>
                                    </div>
                                </div>
                            </div>


                        </div>)

                    }

                </div>
                {/* {this.state.step === 1 &&
                    
                } */}

                {/* {第二步} */}




                {/* {放條狀的地方} */}
                <div className="mx-auto mt-5">
                    <p className="mb-0 text-center mx-auto">{this.state.questionNumber + " of " + "8"}</p>
                    <div className="mt-1 mx-auto capsule__box red" style={{ width: "100px", height: "10px" }}>
                        <div className="capsule__inside green" style={{ height: "10px", width: (this.state.questionNumber / 8 * 100 + "%") }}></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Income;
