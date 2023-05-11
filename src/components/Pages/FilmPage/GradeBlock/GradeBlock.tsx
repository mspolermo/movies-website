import React from "react";
import './GradeBlock.scss'
import Icons from "../../../Icons/Icons";

const GradeBlock = () => {
    return (
        <div className="gradeBlock gradeBlock__hidden">
            <div className="gradeBlock__close">
                <Icons className="" name="cross" size="30"/>    
            </div>
            <div className="gradeBlock__modal"> 
                <h2 className="gradeBlock__heading">Ваша оценка</h2>
                <p className="gradeBlock__text">Оценки улучшают рекомендации</p>
                <div className="gradeBlock__optionSelector">
                    <div className="gradeBlock__box">
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">1</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">2</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">3</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">4</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">5</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">6</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">7</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">8</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">9</div>
                                </div>
                        </div>
                        <div className="gradeBlock__optionWrapper">
                                <div className="gradeBlock__option">
                                    <div className="gradeBlock__option-caption">10</div>
                                </div>
                        </div>
                    </div>
                    <div className="gradeBlock__labelBlock">
                        <div className="gradeBlock__label gradeBlock__label_left">очень плохо</div>
                        <div className="gradeBlock__label gradeBlock__label_right">отлично</div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default GradeBlock;
