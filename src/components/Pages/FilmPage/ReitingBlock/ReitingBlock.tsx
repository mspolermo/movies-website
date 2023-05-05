import React, { FC } from "react";
import './ReitingBlock.scss'
import Button from "../../../UI/Buttons/Button/Button";

interface ReitingBlockProps {
    ratingKp: number;
    votesKP: number
}

const ReitingBlock:FC<ReitingBlockProps> = ({ratingKp , votesKP}) => {
    let reiting = (Math.round(ratingKp! * 10)/10);
 
    return (
        <div className="reitingBlock">
            <div className="reitingBlock__inner">
                <div className="reitingBlock__reiting">
                    <p className="reitingBlock__count">{reiting}</p>
                </div>
                <div className="reitingBlock__info">
                    <p className="reitingBlock__heading">Рейтинг Иви</p>
                    <p className="reitingBlock__text">Интересный сюжет</p>
                    <p className="reitingBlock__text reitingBlock__text_reit">{votesKP} оценки</p>
                </div> 
            </div>
            <div className="reitingBlock__btn">
                <Button color="transparent" onClick={() => {}} title={['Оценить']}/>    
            </div>
        </div>
    )
}

export default ReitingBlock;