import React, { FC, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuFilms.scss';
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";

const HeaderMenuFilms:FC<HeaderMenuProps> = ({id}) => {
    const hoverActiveListData = [
        [0, 'Новинки', "https://www.ivi.ru/new/movie-new"],
        [1, 'Подборки', 'https://www.ivi.ru/collections'],
        [2, 'Иви.Рейтинг', "https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"],
        [3, 'Скоро на Иви', 'https://www.ivi.ru/new/soon-ivi'],
        [4, 'Трейлеры', 'https://www.ivi.ru/trailers'],
        [5, 'Что посмотреть', 'https://www.ivi.ru/goodmovies'],
        [6, 'Фильмы в HD', 'https://www.ivi.ru/collections/movies-hd'],
        [7, 'Выбор Иви', 'https://www.ivi.ru/collections/vyibor-ivi'],
        [8, 'Новинки подписки', 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection'],
        [9, 'Фильмы Amediateka', 'https://www.ivi.ru/collections/filmyi-amediateka'],
        [10, 'Популярные фильмы', 'https://www.ivi.ru/collections/best-movies'],
        [11, 'Фильмы Иви', 'https://www.ivi.ru/collections/ivi-originals']
    ];

    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    return(
        <div className="headerMenuFilms" id={id}>
            <div className="headerMenuFilms__column">
                <h3 className="headerMenuFilms__heading">Жанры</h3>
                <ul className="headerMenuFilms__list">
                    <div className="headerMenuFilms__column">
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Артхаус</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Боевики</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Вестерн</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Военные</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Детективы</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Для всей семьи</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Для детей</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Документальные</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Драмы</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Исторические</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Катастрофы</p>
                        </a>
                    </div>
                    <div className="headerMenuFilms__column">
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Комедии</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Криминальные</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Мелодрамы</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Мистические</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">По комиксам</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Приключения</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Спорт</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Триллеры</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Ужасы</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Фантастика</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">Фэнтези</p>
                        </a>
                    </div>
                </ul>    
            </div>
            <div className="headerMenuFilms__column">
                    <h3 className="headerMenuFilms__heading">Страны</h3>
                    <ul className="headerMenuFilms__list">
                        <div className="headerMenuFilms__column">
                            <a href="" className="headerMenuFilms__link">
                                <p className="headerMenuFilms__item">Русские</p>
                            </a>
                            <a href="" className="headerMenuFilms__link">
                                <p className="headerMenuFilms__item">Зарубежные</p>
                            </a>
                            <a href="" className="headerMenuFilms__link">
                                <p className="headerMenuFilms__item">Советское кино</p>
                            </a>
                        </div>
                    </ul>
                    <h3 className="headerMenuFilms__heading">Годы</h3>
                        <ul className="headerMenuFilms__list">
                            <div className="headerMenuFilms__column">
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">Фильмы 2023 года</p>
                                </a>
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">Фильмы 2022 года</p>
                                </a>
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">Фильмы 2021 года</p>
                                </a>
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">Фильмы 2020 года</p>
                                </a>
                            </div>
                        </ul>
            </div>
            <div className="headerMenuFilms__block">
                <HeaderActiveList dataArray={hoverActiveListData} prefixForId="HeaderMenuFilms" onHoverChange={setHeaderAdvertiseProp}/>
            </div>
            <HeaderAdvertise variant={headerAdvertiseProp}/>
        </div>
    )
 }

 export default HeaderMenuFilms;