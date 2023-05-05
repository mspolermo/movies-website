import React, { FC } from "react";
import './CardsBlock.scss'
import Card from "../../../UI/Buttons/Card/Card";
import { array } from "prop-types";

interface CardsBlockProps {
    ratingKp: number;
    creators: string[][];
}

const CardsBlock:FC<CardsBlockProps> = ({ratingKp, creators}) => {
    let actors = creators;
    actors.length = 5;
    return (
        <div className="cardsBlock">
            <div className="cardsBlock__card">
                <Card 
                    type="reit"
                    raitingKP={ratingKp}
                />    
            </div>
            {creators.map( actor => 
                <div className="cardsBlock__card" key={actor[0]}>
                    <Card 
                        type="small"
                        title={actor[0]}
                        photoUrl={actor[2]}
                    />
                </div>
                )}
        
        </div>
    )
}

export default CardsBlock;