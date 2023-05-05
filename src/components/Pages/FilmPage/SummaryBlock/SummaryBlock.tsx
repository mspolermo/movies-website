import React, { FC } from "react";
import './SummaryBlock.scss'
import Icons from "../../../Icons/Icons";
import QualityTag from "../../../UI/Tags/QualityTag/QualityTag";

interface SummaryBlockProps {
    filmName: string;
    year: number;
    movieLength: number;
    type: string;
    ageRating: string;
    country:string;
    genres: string[]
}

const SummaryBlock:FC<SummaryBlockProps> = ({filmName, year, type, ageRating, country, genres, movieLength}) => {
    //ToDO: сделать линки на год, страну, жанры

    let lengthHour = Math.round(movieLength/60)
    let lengthMinutes = movieLength - lengthHour*60;
    let length = `${lengthHour}ч. ${lengthMinutes} мин.`

    return (
        <div className="summaryBlock">
                        <h2 className="summaryBlock__heading">{filmName} ({type} {year})</h2>
                        <p className="summaryBlock__text summaryBlock__text_first">
                            <span>{year} </span>
                            <span> {length} </span>
                            <span>{ageRating}</span>
                        </p>
                        <p className="summaryBlock__text">
                            <span>{country} </span>
                            {genres.map ( (genre) => 
                                <span key={genre}>
                                    <Icons 
                                        className="summaryBlock__svg summaryBlock__svg_circle-flooded"
                                        name="circle-flooded" 
                                        size='4' 
                                        color="gray"
                                    />
                                    {genre} 
                                </span>)}
                        </p>
                        <div className="summaryBlock__additional">
                            <QualityTag quality="FullHD" />
                            <Icons 
                                className="summaryBlock__svg summaryBlock__svg_volume-down"
                                name="volume-down" 
                                size='22' 
                                color="gray"
                            />
                            <p className="summaryBlock__text">Рус</p>
                            <Icons 
                                className="summaryBlock__svg summaryBlock__svg_circle-flooded"
                                name="circle-flooded" 
                                size='4' 
                                color="gray"
                            />
                            <p className="summaryBlock__text">Eng</p>
                            <Icons 
                                className="summaryBlock__svg summaryBlock__svg_keyboard"
                                name="keyboard" 
                                size='18' 
                                color="gray"
                                strokeWidth="2"
                            />
                            <p className="summaryBlock__text">Рус</p>
                            <Icons 
                                className="summaryBlock__svg summaryBlock__svg_circle-flooded"
                                name="circle-flooded" 
                                size='4' 
                                color="gray"
                            />
                            <p className="summaryBlock__text">Eng</p>
                        </div>
                    </div>
    )
}

export default SummaryBlock;