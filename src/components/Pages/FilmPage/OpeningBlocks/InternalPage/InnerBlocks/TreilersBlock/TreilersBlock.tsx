import React, { FC } from "react";
import './TreilersBlock.scss'

interface TrailersBlockProps {

}

const TreilersBlock:FC<TrailersBlockProps> = () => {
    return (
        <div className="treilersBlock">
            <h2 className="treilersBlock__heading">Трейлеры</h2>
            <div className="treilersBlock__text">
                Трейлеров к фильму не найдено
            </div>
        </div>
    )
}

export default TreilersBlock;