import React, { FC } from "react";
import './FactsBlock.scss'
import { useTranslation } from "react-i18next";

interface FactsBlockProps {
    fact: {
        id: number,
        value: string,
        type: string,
        spoiler: boolean,
        filmId: number
    }
}

const FactsBlock:FC<FactsBlockProps> = ({fact}) => {
    const {t, i18n} = useTranslation();
    return (
        <div className="factsBlock">
            <h2 className="factsBlock__heading">{t('internalPage.factsBlock.facts')}</h2>
            {(fact) && <p className="factsBlock__text">{fact.value}</p>}  
            {(!fact) && <p className="factsBlock__text">{t('internalPage.factsBlock.noInfo')}</p>}   

        </div>
    )
}

export default FactsBlock;
