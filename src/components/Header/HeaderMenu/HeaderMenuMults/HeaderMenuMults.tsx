import React, { FC, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuMults.scss'
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";

const HeaderMenuMults:FC<HeaderMenuProps> = ({id}) => {
    const hoverActiveListData = [
        [0, 'Новинки', "https://www.ivi.ru/new/animation-new"],
        [1, 'Мультики в HD', 'https://www.ivi.ru/collections/cartoons-hd'],
        [2, 'Мультфильмы Paramount Play / Nickelodeon', 'https://www.ivi.ru/collections/animation-paramount-play'],
        [3, 'Мульфильмы Dreamworks', 'https://www.ivi.ru/collections/dreamworks-cartoons'],
        [4, 'Мульфильмы СТС Kids', 'https://www.ivi.ru/collections/ctc-kids']
    ];

    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    return(
        <div className="headerMenuMults headerMenuMults__hidden" id={id}>
            <div className="headerMenuMults__column">
                <h3 className="headerMenuMults__heading">Жанры</h3>
                <ul className="headerMenuMults__list">
                    <div className="headerMenuMults__column">
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Аниме</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Боевик</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Детектив</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Для взрослых</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Для всей семьи</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Для детей</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Драма</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">История</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Комендия</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Криминальные</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Мюзикл</p>
                        </a>
                    </div>
                    <div className="headerMenuMults__column">
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Полнометражные</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Приключения</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Развивающие</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Сериалы</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Спорт</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Триллер</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Ужасы</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Фантастика</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Фэнтези</p>
                        </a>
                    </div>
                </ul>    
            </div>
            <div className="headerMenuMults__column">
                <h3 className="headerMenuMults__heading">Страны</h3>
                <ul className="headerMenuMults__list">
                    <div className="headerMenuMults__column">
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Советские</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Русские</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Американские</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">Зарубежные</p>
                        </a>
                    </div>
                </ul>
                <h3 className="headerMenuMults__heading">Годы</h3>
                    <ul className="headerMenuMults__list">
                        <div className="headerMenuMults__column">
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">Мультики 2023 года</p>
                            </a>
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">Мультики 2022 года</p>
                            </a>
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">Мультики 2021 года</p>
                            </a>
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">Мультики 2020 года</p>
                            </a>
                        </div>
                    </ul>
            </div>
            <div className="headerMenuMults__block">
                <HeaderActiveList dataArray={hoverActiveListData} prefixForId="HeaderMenuSeries" onHoverChange={setHeaderAdvertiseProp}/>
            </div>
            <HeaderAdvertise variant={headerAdvertiseProp}/>
            
        </div>
    );
};

export default HeaderMenuMults;