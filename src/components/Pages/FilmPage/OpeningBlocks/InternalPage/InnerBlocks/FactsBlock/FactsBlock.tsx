import React, { FC } from "react";
import './FactsBlock.scss'

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
    return (
        <div className="factsBlock">
            <h2 className="factsBlock__heading">Факты о фильме</h2>
            {(fact) && <p className="factsBlock__text">{fact.value}</p>}  
            {(!fact) && <p className="factsBlock__text">К сожалению мы ничего не знаем</p>}   

        </div>
    )
}

export default FactsBlock;
