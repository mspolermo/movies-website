import React, { FC, useEffect, useState } from "react";
import './CreatorsBlock.scss'
import Card from "../../../UI/Buttons/Card/Card";
import LanguageHook from "../../../../hooks/LanguageHook";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface CreatorsBlockProps {
    creators: {
        id: number,
        photoUrl: string,
        nameRu: string,
        nameEn: string,
        professions: [
            {
                id: number,
                name: string,
            }
        ]
    } [];
}

const CreatorsBlock:FC<CreatorsBlockProps> = ({creators}) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const [actors, setActors] = useState(creators.slice(0,11));
    console.log(actors)
    console.log(creators)
    useEffect( () => {
        let filtredList = creators.filter(actor => actor.professions[0].name === 'актеры');
        if (filtredList.slice(0,1).length < 10) {
            setActors(creators.slice(0,10));
        } else {
            setActors(filtredList.slice(0,10));    
        }
    },[creators]);

    
    return (
        <div className="creatorsBlock">
            <h3 className="creatorsBlock__heading">Актеры и создатели</h3>
            <div className="creatorsBlock__body">

                    {actors.map( actor => 
                        <div 
                            className="creatorsBlock__card" 
                            key={actor?.id}
                            onClick={() => navigate (`/movies-website/person/${actor.id}`)}
                        >
                            <Card 
                                type="big"
                                role="актёр"
                                title={LanguageHook (actor.nameRu, actor.nameEn, i18n.language)}
                                photoUrl={actor?.photoUrl}
                            />
                        </div>
                    )}

                    <div className="creatorsBlock__round">
                        <p>Еще</p>    
                    </div> 
                     
            </div>
        </div>
    )
}

export default CreatorsBlock;