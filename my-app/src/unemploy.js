import React from "react";
class Unemploy extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            identity: {
                qualify: null,
                reason: [],
            },
            firstpage: {
                unwill: "yes",
                canwork: "yes",
                isboss: "yes",
                fullyear: "yes",
                salary: null,
                parttime: null,
                parttimeamount: "",
                careothers: null,
                careamount: "",
                getmoney: null,
            },

            // 身分是否合格//這邊送出之後會去做判斷
        }
        this.handleFirstStep = this.handleFirstStep.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.showReason = this.showReason.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSecondStep = this.handleSecondStep.bind(this);
    }

    // 單選題
    handleRadioChange(e) {
        // e.preventDefault();
        // console.log(123);
        let question = e.target.name;
        let answer = e.target.value;
        this.setState(prevState => ({
            firstpage: {
                ...prevState.firstpage,
                [question]: answer,
            }
        })
        )

        console.log(this.state.firstpage);

    }

    // 取得第一步的各選項
    handleChange(e) {
        let question = e.target.name;
        let answer = e.target.value;
        console.log(e.target.value);
        this.setState((prevState) => ({
            firstpage: {
                ...prevState.firstpage,
                [question]: answer,
            }
        }))
        console.log(this.state.firstpage);
    }

    // 第一步的傳送按鈕
    handleFirstStep(e) {
        e.preventDefault();
        console.log("submiting...")
        if (this.state.firstpage.unwill === "no") {
            this.setState(prevState => ({
                identity: {
                    qualify: false,
                    reason: [...prevState.identity.reason, "您非自願離職"]
                }
            }))
        }

        if (this.state.firstpage.canwork === "no") {
            this.setState(prevState => ({
                identity: {
                    qualify: false,
                    reason: [...prevState.identity.reason, "您不具有工作能力或不具備工作意願"]
                }
            }))
        }
        if (this.state.firstpage.isboss === "yes") {
            this.setState(prevState => ({
                identity: {
                    qualify: false,
                    reason: [...prevState.identity.reason, "您為自營業者"]
                }
            }))
        }

        if (this.state.firstpage.fullyear === "no") {
            console.log(this.state.identity.reason);
            this.setState(prevState => ({
                identity: {
                    qualify: false,
                    reason: [...prevState.identity.reason, "您在過去三年之內，年資未滿一年"]
                }
            }))
        }

        if (this.state.firstpage.unwill === "yes" &&
            this.state.firstpage.canwork === "yes" &&
            this.state.firstpage.isboss === "no" &&
            this.state.firstpage.fullyear === "yes"
        ) {
            this.setState(prevState => ({
                identity: {
                    qualify: true,
                }
            }))
        }

        this.setState(prevState => ({
            step: 2,
        }))


    }

    // 顯示不合結果
    showReason() {
        let reasonArr = this.state.identity.reason;
        console.log(reasonArr);
        return reasonArr.map((reason) => {
            return (<p className="text-center">{reason}</p>)
        })
    }


    handleSecondStep(e) {
        e.preventDefault();
        let salaryObj = this.state.firstpage;
        console.log(salaryObj);//顯示這些輸入框的input
        for (let i = 0; i < 9; i++) {
            if (Object.values(salaryObj)[i] === null) {
                alert("尚未填寫完畢")
                return;
            }
        }

        this.setState(prevState => ({
            step: 3,
        }))

        // 沒有兼職收入的情況之下
        if (salaryObj.parttime === "no") {
            if (salaryObj.careothers === "no") {
                this.setState((prevState) => ({
                    firstpage: {
                        ...prevState.firstpage,
                        getmoney: salaryObj.salary * 6 / 10,
                    }
                }))
                console.log(salaryObj.salary * 6 / 10);
            }
            if (salaryObj.careothers === "yes") {
                if (salaryObj.careamount === "one") {

                    this.setState((prevState) => ({
                        firstpage: {
                            ...prevState.firstpage,
                            getmoney: salaryObj.salary * 7 / 10,
                        }
                    }))

                    console.log(salaryObj.salary * 7 / 10);
                } else if (salaryObj.careamount === "two") {
                    this.setState((prevState) => ({
                        firstpage: {
                            ...prevState.firstpage,
                            getmoney: salaryObj.salary * 8 / 10,
                        }
                    }))

                    console.log(salaryObj.salary * 8 / 10);
                }
            }

        }

        // 有兼職收入的情況之下

        if (salaryObj.parttime === "yes") {
            if (salaryObj.parttimeamount === "") {
                alert("請填寫兼職收入")
            } else {
                let result = Math.abs((Number(salaryObj.salary * 6 / 10) + Number(salaryObj.parttimeamount)) - Number(salaryObj.salary * 8 / 10) - Number(salaryObj.salary * 6 / 10))
                if (salaryObj.careothers === "no") {
                    this.setState((prevState) => ({
                        firstpage: {
                            ...prevState.firstpage,
                            getmoney: result,
                        }
                    }))

                    console.log(result);
                }

                if (salaryObj.careothers === "yes") {
                    if (salaryObj.careamount === "one") {
                        this.setState((prevState) => ({
                            firstpage: {
                                ...prevState.firstpage,
                                getmoney: result * 11 / 10,
                            }
                        }))

                        console.log(result * 11 / 10);
                    } else if (salaryObj.careamount === "two") {

                        this.setState((prevState) => ({
                            firstpage: {
                                ...prevState.firstpage,
                                getmoney: result * 12 / 10,
                            }
                        }))
                        console.log(result * 12 / 10);
                    }
                }
            }


        }

        console.log(this.state);
    }
    // handleSelectChange() {
    //     this.setState({
    //         result: event.target.value
    //     })
    // }

    render() {
        return (
            <div className="d-flex justify-content-center mt-1 unemploy__content__bg py-3">
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="py-3 px-0 white mt-3 mx-auto col-lg-8 col-md-8 col-8 d-flex-justify-content-center unemploy__content__box">
                        <div className="py-2  unemploy__content__box__top d-flex justify-content-center">
                            <div className={"step__circle mx-1 " + (this.state.step === 1 && "inprogress")}></div>
                            <div className={"step__circle mx-1 " + (this.state.step === 2 && "inprogress")}></div>
                            <div className={"step__circle mx-1 " + (this.state.step === 3 && "inprogress")}></div>
                        </div>
                        <div className="my-3">
                            {/* 結果部分 */}
                            {this.state.firstpage.getmoney !== null && (
                                <div className="">
                                    <h4 className="text-center">結果</h4>
                                    <p className="text-center">您目前的失業津貼為：</p>
                                    <p className="text-center result__content">{this.state.firstpage.getmoney}元</p>
                                    <button className="signin__btn w-25 d-block mx-auto mt-3 p-2">送出</button>
                                </div>)}
                            {/* step1題目部分 */}
                            {this.state.identity.qualify === null && (
                                <div>
                                    <h4 className="text-center sigin__title">Step 1</h4>
                                    <p className="text-center mx-auto">請領資格核對</p>
                                    <div className="px-4 question__box mb-3">
                                        <p className="question__title">1. 是否為非自願離職</p>
                                        <input type="radio" name="unwill" value="yes" checked={this.state.firstpage.unwill === 'yes'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.unwill === "yes" && "negative__ans"}>是</span>
                                        <input className="ml-3 negative__ans" type="radio" name="unwill" value="no" checked={this.state.firstpage.unwill === 'no'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.unwill === "no" && "negative__ans"}>否</span>
                                    </div>
                                    <div className="px-4 question__box mb-3">
                                        <p className="question__title">2. 是否具有工作能力且願意繼續工作</p>
                                        <input type="radio" name="canwork" value="yes" checked={this.state.firstpage.canwork === 'yes'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.canwork === "yes" && "negative__ans"}>是</span>
                                        <input className="ml-3 negative__ans" type="radio" name="canwork" value="no" checked={this.state.firstpage.canwork === 'no'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.canwork === "no" && "negative__ans"}>否</span>
                                    </div>
                                    <div className="px-4 question__box mb-3">
                                        <p className="question__title">3. 是否為自營業者</p>
                                        <input type="radio" name="isboss" value="yes" checked={this.state.firstpage.isboss === 'yes'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.isboss === "yes" && "negative__ans"}>是</span>
                                        <input className="ml-3" type="radio" name="isboss" value="no" checked={this.state.firstpage.isboss === 'no'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.isboss === "no" && "negative__ans"}>否</span>
                                    </div>
                                    <div className="px-4 question__box mb-3">
                                        <p className="question__title">4. 離職退保當日，前3年內合計有滿1年年資</p>
                                        <input type="radio" name="fullyear" value="yes" checked={this.state.firstpage.fullyear === 'yes'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.fullyear === "yes" && "negative__ans"}>是</span>
                                        <input className="ml-3 negative__ans" type="radio" name="fullyear" value="no" checked={this.state.firstpage.fullyear === 'no'} onChange={this.handleRadioChange} /><span className={this.state.firstpage.fullyear === "no" && "negative__ans"}>否</span>
                                    </div>
                                    <button className="signin__btn w-25 d-block mx-auto mt-5 p-2" onClick={this.handleFirstStep}>下一步</button></div>)}
                        </div>

                        {/* {if not qualified} */}
                        {this.state.identity.qualify === false &&
                            (<div className="pb-5">
                                <h4 className="text-center">結果</h4>
                                <p className="text-center result__box__content">不符合失業津貼領取資格，因為</p>
                                {this.showReason()}
                                <p className="text-center">可另外申請：</p>


                            </div>)
                        }



                        {/* {if qualified} */}
                        {(this.state.identity.qualify === true && this.state.firstpage.getmoney === null) && (
                            <div className="steptwo__box col-lg-12 col-md-12 col-12">
                                <h4 className="text-center sigin__title">Step 2</h4>
                                <p className="text-center mx-auto">申請金額試算</p>
                                <div className="col-lg-12 col-md-12 col-12">
                                    <p className="my-0">1. 月投保薪資</p>
                                    <input className="d-block w-75 signin__input p-1" name="salary" type="text" placeholder="請填寫月投保薪資" value={this.state.firstpage.salary} onChange={this.handleChange} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 mt-3">
                                    <p className="my-0">2. 是否有兼職收入</p>
                                    <input type="radio" name="parttime" value="yes" checked={this.state.firstpage.parttime === 'yes'} onChange={this.handleRadioChange} />是
                                    <input className="ml-2" type="radio" name="parttime" value="no" checked={this.state.firstpage.parttime === 'no'} onChange={this.handleRadioChange} />否
                                </div>
                                {this.state.firstpage.parttime === "yes" && (
                                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                                        <p className="my-0">(承上題)兼職收入</p>
                                        <input className="d-block w-75 signin__input p-1" name="parttimeamount" type="text" placeholder="請填寫兼職收入" value={this.state.firstpage.parttimeamount} onChange={this.handleChange} />
                                    </div>)}
                                <div className="col-lg-12 col-md-12 col-12 mt-3">
                                    <p className="my-0">3. 是否有撫養親屬</p>
                                    <input type="radio" name="careothers" value="yes" checked={this.state.firstpage.careothers === 'yes'} onChange={this.handleRadioChange} />是
                                    <input className="ml-2" type="radio" name="careothers" value="no" checked={this.state.firstpage.careothers === 'no'} onChange={this.handleRadioChange} />否
                                </div>
                                {this.state.firstpage.careothers === "yes" && (
                                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                                        <p className="my-0">(承上題)扶養幾位親屬</p>
                                        <select name="careamount" className="pagetwo__careamount" onClick={this.handleChange}>
                                            <option value="" disabled selected></option>
                                            <option value="one">1位</option>
                                            <option value="two">2位(含以上)</option>
                                        </select>
                                    </div>)}

                                <button className="signin__btn w-25 d-block mx-auto mt-3 p-2" onClick={this.handleSecondStep}>看結果</button>
                            </div>

                        )}
                    </div>

                </div>


            </div>


        )

    }

}
export default Unemploy;