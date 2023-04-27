import React, { FC, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuSeries.scss'
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";

const HeaderMenuSeries:FC<HeaderMenuProps> = ({id}) => {
    const hoverActiveListData = [
        [0, 'Новинки', "https://www.ivi.ru/new/series-new"],
        [1, 'Иви.Рейтинг', 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'],
        [2, 'Сериалы в HD', 'https://www.ivi.ru/collections/series-hd'],
        [3, 'Бесплатные сериалы', 'https://www.ivi.ru/collections/tvshow-free?sort=new'],
        [4, 'Сериалы Amediateka', 'https://www.ivi.ru/collections/serialyi-amediateka'],
        [5, 'Сериалы Paramount Play', 'https://www.ivi.ru/collections/series-paramount-play']
    ];

    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    return(
        <div className="headerMenuSeries headerMenuSeries__hidden" id={id}>
            <div className="headerMenuSeries__column">
                <h3 className="headerMenuSeries__heading">Жанры</h3>
                <ul className="headerMenuSeries__list">
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Биография</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Боевики</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Военные</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Детективы</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Для всей семьи</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Документальные</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Драмы</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Исторические</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Комедийные</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Криминальные</p>
                        </a>
                    </div>
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Медицинские</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Мелодрамы</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Мистические</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Приключения</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Романтические</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Триллеры</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Турецкие</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Ужасы</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Фантастические</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Фэнтези</p>
                        </a>
                    </div>
                </ul>    
            </div>
            <div className="headerMenuSeries__column">
                <h3 className="headerMenuSeries__heading">Страны</h3>
                <ul className="headerMenuSeries__list">
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Русские</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Зарубежные</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Американские</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Украинские</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Корейские</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Турецкие</p>
                        </a>
                    </div>
                </ul>
                <h3 className="headerMenuSeries__heading">Годы</h3>
                <ul className="headerMenuSeries__list">
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Сериалы 2023 года</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Сериалы 2022 года</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Сериалы 2021 года</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">Сериалы 2020 года</p>
                        </a>
                    </div>
                </ul>
            </div>
            <div className="headerMenuSeries__block">
                <HeaderActiveList dataArray={hoverActiveListData} prefixForId="HeaderMenuMults" onHoverChange={setHeaderAdvertiseProp}/>
            </div>
            <HeaderAdvertise variant={headerAdvertiseProp}/>
        </div>
    )
}

export default HeaderMenuSeries;