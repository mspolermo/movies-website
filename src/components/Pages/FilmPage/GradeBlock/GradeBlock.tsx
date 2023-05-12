import React, { useEffect } from "react";
import './GradeBlock.scss'
import Icons from "../../../Icons/Icons";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { gradeFalse } from "../../../../store/reducers/gradeReducer";

const GradeBlock = () => {
    const grades = Array.from({length: 10}, (_, index) => index + 1);

    //Действия для ответа в модальном блоке
    const questionBlock = document.querySelector('#question-block');
    const completeBlock = document.querySelector('#complete-block');

    function getAnswer() {
        questionBlock?.classList.add('gradeBlock__modal_hidden');
        completeBlock?.classList.remove('gradeBlock__modal_hidden');
    }

    //Redux
    const gradeBlock = document.querySelector('#grade-block');
    const {value} = useTypedSelector( state => state.grade);
    const dispatch = useDispatch();

    const onDecrement = () => {
        dispatch(gradeFalse());
        completeBlock?.classList.add('gradeBlock__modal_hidden');
        questionBlock?.classList.remove('gradeBlock__modal_hidden');
    }

    useEffect(() => {
        if (value) {
            gradeBlock?.classList.remove('gradeBlock__hidden');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            window.onscroll = () => { window.scroll(0, 0); };
        } else {
            gradeBlock?.classList.add('gradeBlock__hidden');
            window.onscroll = () => { window.scroll(); };
        }
    },[value])


    return (
        <div className="gradeBlock gradeBlock__hidden" id='grade-block'> 

            <div className="gradeBlock__close" onClick={onDecrement}>
                <Icons className="gradeBlock__svg" name="cross" size="30"/>    
            </div>

            <div className="gradeBlock__modal" id='question-block'> 
                <h2 className="gradeBlock__heading">Ваша оценка</h2>
                <p className="gradeBlock__text">Оценки улучшают рекомендации</p>
                <div className="gradeBlock__optionSelector">
                  
                    <div className="gradeBlock__box">
                        {grades.map ( 
                            (item: any) => 
                                <div className="gradeBlock__optionWrapper" key={item}>
                                    <div className="gradeBlock__option" onClick={getAnswer}>
                                        <div className="gradeBlock__option-caption">{item}</div>
                                    </div>
                                </div>
                            )
                        };
                    </div>

                    <div className="gradeBlock__labelBlock">
                        <div className="gradeBlock__label gradeBlock__label_left">очень плохо</div>
                        <div className="gradeBlock__label gradeBlock__label_right">отлично</div>
                    </div>
                </div>    
            </div>

            <div className="gradeBlock__modal gradeBlock__modal_hidden" id='complete-block'>
                <Icons className="gradeBlock__svg gradeBlock__svg_complete" name="complete" size="68" color="green"/> 
                <h2 className="gradeBlock__heading">Ваша оценка принята</h2>
                <p className="gradeBlock__text">Спасибо,  что поделились своим мнением</p>
            </div>

        </div>
    )
}

export default GradeBlock;
