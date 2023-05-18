import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './CardsBlock.scss';
import { CardsBlockProps } from "../../../../../types/filmPageTypes";

import Card from "../../../../UI/Buttons/Card/Card";
import LanguageHook from "../../../../../hooks/LanguageHook";
import { useDispatch } from "react-redux";
import { gradeTrue } from "../../../../../store/reducers/gradeReducer";

const CardsBlock:FC<CardsBlockProps> = ({ratingKp, creators}) => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    const [actors, setActors] = useState(creators.slice(0,5));

    useEffect( () => {
        let filtredList = creators.filter(actor => actor.professions[0].name === 'актеры');
        if (filtredList.slice(0,5).length < 5) {
            setActors(creators.slice(0,5));
        } else {
            setActors(filtredList.slice(0,5));    
        }
        
    },[creators]);

    //Redux
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(gradeTrue())
    }
    
    return (
        <div className="cardsBlock" onClick={onIncrement}>
            <div className="cardsBlock__card">
                <Card 
                    type="reit"
                    raitingKP={ratingKp}
                />    
            </div>
            {actors.map( actor => 
                <div 
                    className="cardsBlock__card" 
                    key={actor?.id}
                    onClick={() => navigate (`/movies-website/person/${actor.id}`)}
                >
                    <Card 
                        type="small"
                        title={LanguageHook (actor.nameRu, actor.nameEn, i18n.language)}
                        photoUrl={actor?.photoUrl}
                    />
                </div>
            )}
        </div>
    );
};

export default CardsBlock;