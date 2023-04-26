import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../types/headerTypes";
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";
import HeaderAdvertise from "../HeaderAdvertise/HeaderAdvertise";

const HeaderMenuSeries:FC<HeaderMenuProps> = ({id}) => {

    const [activePoint, setActivePoint] = useState('dropDown-series-new');
    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    useEffect( () => {
        document.querySelector(`#${activePoint}`)?.classList.add('dropDownBody__nav-list-item_active');
    }, [activePoint]);
    
    function hoverActivator (e: React.DragEvent<HTMLDivElement>) {
        
        document.querySelector(`#${activePoint}`)?.classList.remove('dropDownBody__nav-list-item_active');
        
        setActivePoint(e.currentTarget.id);

        switch(e.currentTarget.innerText) {
            case "Сериалы Amediateka":
                setHeaderAdvertiseProp('amediateka')
                break;
            default:
                setHeaderAdvertiseProp('ivi')
                break;
        }
    };

    return(
        <div className="dropDownBody__series dropDownBody__series_hidden" id={id}>
            <div className="dropDownBody__block dropDownBody__block_big">
                <div className="dropDownBody__column">
                    <h3 className="dropDownBody__list-head">Жанры</h3>
                    <ul className="dropDownBody__list">
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Биография</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Боевики</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Военные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Детективы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Для всей семьи</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Документальные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Драмы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Исторические</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Комедийные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Криминальные</p>
                            </a>
                        </div>
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Медицинские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Мелодрамы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Мистические</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Приключения</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Романтические</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Триллеры</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Турецкие</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Ужасы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Фантастические</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Фэнтези</p>
                            </a>
                        </div>
                    </ul>    
                </div>
                <div className="dropDownBody__column">
                    <h3 className="dropDownBody__list-head">Страны</h3>
                    <ul className="dropDownBody__list">
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Русские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Зарубежные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Американские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Украинские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Корейские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Турецкие</p>
                            </a>
                        </div>
                    </ul>
                    <h3 className="dropDownBody__list-head">Годы</h3>
                    <ul className="dropDownBody__list">
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Сериалы 2023 года</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Сериалы 2022 года</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Сериалы 2021 года</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Сериалы 2020 года</p>
                            </a>
                        </div>
                    </ul>
                </div>
                <div className="dropDownBody__nav-block">
                    <ul className="dropDownBody__nav-list">
                            <a href="https://www.ivi.ru/new/series-new" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item dropDownBody__nav-list-item_active"
                                    id='dropDown-series-new'
                                    onMouseOver={hoverActivator}
                                >Новинки</p>
                            </a>
                            <a href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-series-reit'
                                    onMouseOver={hoverActivator}    
                                >Иви.Рейтинг</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/series-hd" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-series-HD'
                                    onMouseOver={hoverActivator}
                                >Сериалы в HD</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/tvshow-free?sort=new" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-series-free'
                                    onMouseOver={hoverActivator}
                                >Бесплатные сериалы</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/serialyi-amediateka" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-series-amediateka'
                                    onMouseOver={hoverActivator}
                                >Сериалы Amediateka</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/series-paramount-play" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-series-paramount'
                                    onMouseOver={hoverActivator}
                                >Сериалы Paramount Play</p>
                            </a>
                    </ul>
                </div>    
            </div>
            <HeaderAdvertise variant={headerAdvertiseProp}/>
        </div>
    )
}

export default HeaderMenuSeries;