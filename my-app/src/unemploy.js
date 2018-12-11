import React from "react";
class Unemploy extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 0,
            identity: {
                qualify: null,
                reason: [],
            },
            firstpage: {
                unwill: "yes",
                canwork: "yes",
                isboss: "yes",
                fullyear: "yes",
            },

            // 身分是否合格//這邊送出之後會去做判斷
        }
        this.handleFirstStep = this.handleFirstStep.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.showReason = this.showReason.bind(this);

    }

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

    }

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


    }



    showReason() {
        let reasonArr = this.state.identity.reason;
        console.log(reasonArr);
        return reasonArr.map((reason) => {
            return (<p>{reason}</p>)
        })
    }


    render() {
        return (
            <div className="d-flex justify-content-center mt-1 unemploy__content__bg py-3">
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="py-3 px-0 white mt-3 mx-auto col-lg-8 col-md-8 col-8 d-flex-justify-content-center unemploy__content__box">
                        <div className="py-2  unemploy__content__box__top d-flex justify-content-center">
                            <div className="step__circle mx-1 inprogress"></div>
                            <div className="step__circle mx-1"></div>
                            <div className="step__circle mx-1"></div>
                        </div>
                        <div className="my-3">
                            {/* step1題目部分 */}
                            {this.state.identity.qualify === null && (<div><h4 className="text-center sigin__title">Step 1</h4>
                                <p className="text-center mx-auto">請領資格核對</p>
                                <div className="px-4 question__box mb-3">
                                    <p className="question__title">1. 是否為非自願離職</p>
                                    <input type="radio" name="unwill" value="yes" checked={this.state.firstpage.unwill === 'yes'} onChange={this.handleRadioChange} />是
                                <input className="ml-3" type="radio" name="unwill" value="no" checked={this.state.firstpage.unwill === 'no'} onChange={this.handleRadioChange} />否
                            </div>
                                <div className="px-4 question__box mb-3">
                                    <p className="question__title">2. 是否具有工作能力且願意繼續工作</p>
                                    <input type="radio" name="canwork" value="yes" checked={this.state.firstpage.canwork === 'yes'} onChange={this.handleRadioChange} />是
                                <input className="ml-3" type="radio" name="canwork" value="no" checked={this.state.firstpage.canwork === 'no'} onChange={this.handleRadioChange} />否
                            </div>
                                <div className="px-4 question__box mb-3">
                                    <p className="question__title">3. 是否為自營業者</p>
                                    <input type="radio" name="isboss" value="yes" checked={this.state.firstpage.isboss === 'yes'} onChange={this.handleRadioChange} />是
                                <input className="ml-3" type="radio" name="isboss" value="no" checked={this.state.firstpage.isboss === 'no'} onChange={this.handleRadioChange} />否
                            </div>
                                <div className="px-4 question__box mb-3">
                                    <p className="question__title">4. 離職退保當日，前3年內合計有滿1年年資</p>
                                    <input type="radio" name="fullyear" value="yes" checked={this.state.firstpage.fullyear === 'yes'} onChange={this.handleRadioChange} />是
                                <input className="ml-3" type="radio" name="fullyear" value="no" checked={this.state.firstpage.fullyear === 'no'} onChange={this.handleRadioChange} />否
                            </div>
                                <button className="signin__btn w-25 d-block mx-auto mt-5 p-2" onClick={this.handleFirstStep}>下一步</button></div>)}
                        </div>

                        {this.state.identity.qualify === false && (<div className="red">您資格不符合,因為{this.showReason()}</div>)}
                        {this.state.identity.qualify === true && (<div className="green">passed</div>)}
                    </div>

                </div>


            </div>


        )

    }

}
export default Unemploy;