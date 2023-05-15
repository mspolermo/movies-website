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

    const [actors, setActors] = useState(creators.slice(0,10));

    useEffect( () => {
        let filtredList = creators.filter(actor => actor.professions[0].name === 'актеры');
        if (filtredList.slice(0,10).length < 10) {
            setActors(creators.slice(0,10));
        } else {
            setActors(filtredList.slice(0,10));    
        }
    },[creators]);

    useEffect( () => {
        setActors(creators.slice(0,0));  

        setTimeout( () => {
            let filtredList = creators.filter(actor => actor.professions[0].name === 'актеры');
            if (filtredList.slice(0,10).length < 10) {
                setActors(creators.slice(0,10));
            } else {
                setActors(filtredList.slice(0,10));    
            } 
            }, 100) 
    },[i18n.language]);


    return (
        <div className="creatorsBlock">
            <h3 className="creatorsBlock__heading">{t('filmPage.creatorsBlock.header')}</h3>
            <div className="creatorsBlock__body">

                    {actors.map( actor => 
                        <div 
                            className="creatorsBlock__card" 
                            key={actor?.id}
                            onClick={() => navigate (`/movies-website/person/${actor.id}`)}
                        >
                            <Card 
                                title={LanguageHook (actor.nameRu, actor.nameEn, i18n.language)}
                                type="big"
                                role="актёр"
                                photoUrl={actor?.photoUrl}
                            />
                        </div>
                    )}

                    <div className="creatorsBlock__round">
                        <p>{t('filmPage.creatorsBlock.more')}</p>    
                    </div> 
                     
            </div>
        </div>
    )
}

export default CreatorsBlock;