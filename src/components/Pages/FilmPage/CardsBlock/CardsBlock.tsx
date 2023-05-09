import React, { FC, useEffect, useState } from "react";
import './CardsBlock.scss'
import Card from "../../../UI/Buttons/Card/Card";
import { array } from "prop-types";

interface CardsBlockProps {
    ratingKp: number,
    creators: {
        id: number,
        photoUrl: string,
        nameRu: string,
        nameEn: string,
        professions: [
            {
                id: number,
                name: string,
                PersonProfession: {
                    "A": number,
                    "B": number
                }
            }
        ]
    } []
}

const CardsBlock:FC<CardsBlockProps> = ({ratingKp, creators}) => {
   
    const [actors, setActors] = useState(creators.slice(0,5));

    useEffect( () => {
        setActors(creators.slice(0,5))
    },[creators])
    
    return (
        <div className="cardsBlock">
            <div className="cardsBlock__card">
                <Card 
                    type="reit"
                    raitingKP={ratingKp}
                />    
            </div>
            {actors.map( actor => 
                <div className="cardsBlock__card" key={actor?.id}>
                    <Card 
                        type="small"
                        title={actor?.nameRu}
                        photoUrl={actor?.photoUrl}
                    />
                </div>
                )}
        
        </div>
    )
}

export default CardsBlock;