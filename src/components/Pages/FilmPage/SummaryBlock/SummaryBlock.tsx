import React, { FC, useEffect, useState } from "react";
import './SummaryBlock.scss'
import Icons from "../../../Icons/Icons";
import QualityTag from "../../../UI/Tags/QualityTag/QualityTag";
import { useTranslation } from "react-i18next";
import LanguageHook from "../../../../hooks/LanguageHook";

interface SummaryBlockProps {
    filmName: string
    year: number;
    movieLength: number;
    ageRating: string;
    countries: {
        id: number,
        countryName: string,
        countryNameEn: string
    } [];
    genres: {
        id: number,
        nameRu: string,
        nameEn: string
    } [] 
}

const SummaryBlock:FC<SummaryBlockProps> = ({filmName, year, ageRating, genres, movieLength, countries}) => {
    //ToDO: сделать линки на год, страну, жанры
    const {t, i18n} = useTranslation();
    const [country, setCountry] = useState ('');
    const [type, setType] = useState ('');

    const [length, setLength] = useState('');
    let lengthHour = Math.trunc(movieLength/60);
    let lengthMinutes = movieLength - lengthHour*60;
    let lengthRu = `${lengthHour}ч. ${lengthMinutes} мин.`;
    let lengthEn = `${lengthHour}h. ${lengthMinutes} min.`;

    function typeChecker (language: string) {
        switch (language) {
            case 'ru':
                if ( genres.find( genre => genre.nameRu == 'мультфильм') ) {
                    return 'Мульфильм'
                } else {
                    return 'Фильм'
                }
            break;
            case 'en':
                if ( genres.find( genre => genre.nameEn == 'cartoon') ) {
                    return 'Cartoon'
                } else {
                    return 'Movie'
                }
            break;
            default: 
            return ''
        }
    }

    useEffect(() => {
        setType( LanguageHook ( typeChecker('ru'), typeChecker('en'), i18n.language) );
        setCountry( LanguageHook (countries[0]?.countryName, countries[0]?.countryNameEn, i18n.language) );
        setLength ( LanguageHook (lengthRu, lengthEn, i18n.language) );
    }, [countries])

    useEffect(() => {
        setType( LanguageHook ( typeChecker('ru'), typeChecker('en'), i18n.language) );
        setCountry( LanguageHook (countries[0]?.countryName, countries[0]?.countryNameEn, i18n.language) );
        setLength ( LanguageHook (lengthRu, lengthEn, i18n.language) );
    }, [i18n.language])
    
    
    

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
                                <span key={genre.id}>
                                    <Icons 
                                        className="summaryBlock__svg summaryBlock__svg_circle-flooded"
                                        name="circle-flooded" 
                                        size='4' 
                                        color="gray"
                                    />
                                    {LanguageHook (genre.nameRu, genre.nameEn, i18n.language)} 
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