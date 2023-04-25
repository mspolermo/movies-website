import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../types/types";
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";
import HeaderAdvertise from "../HeaderAdvertise/HeaderAdvertise";

const HeaderMenuFilms:FC<HeaderMenuProps> = ({id}) => {

    const [activePoint, setActivePoint] = useState('dropDown-film-new');
    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    useEffect( () => {
        document.querySelector(`#${activePoint}`)?.classList.add('dropDownBody__nav-list-item_active');
    }, [activePoint]);
    
    function hoverActivator (e: React.DragEvent<HTMLDivElement>) {

        document.querySelector(`#${activePoint}`)?.classList.remove('dropDownBody__nav-list-item_active');
        
        setActivePoint(e.currentTarget.id);
        
        switch(e.currentTarget.innerText) {
            case "Фильмы Amediateka":
                setHeaderAdvertiseProp('amediateka')
                break;
            default:
                setHeaderAdvertiseProp('ivi')
                break;
        }
    };

    return(
        <div className="dropDownBody__films" id={id}>
            <div className="dropDownBody__block dropDownBody__block_big">
                <div className="dropDownBody__column">
                    <h3 className="dropDownBody__list-head">Жанры</h3>
                    <ul className="dropDownBody__list">
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Артхаус</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Боевики</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Вестерн</p>
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
                                <p className="dropDownBody__list-item">Для детей</p>
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
                                <p className="dropDownBody__list-item">Катастрофы</p>
                            </a>
                        </div>
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Комедии</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Криминальные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Мелодрамы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Мистические</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">По комиксам</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Приключения</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Спорт</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Триллеры</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Ужасы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Фантастика</p>
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
                                <p className="dropDownBody__list-item">Советское кино</p>
                            </a>
                        </div>
                    </ul>
                    <h3 className="dropDownBody__list-head">Годы</h3>
                        <ul className="dropDownBody__list">
                            <div className="dropDownBody__list-column">
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Фильмы 2023 года</p>
                                </a>
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Фильмы 2022 года</p>
                                </a>
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Фильмы 2021 года</p>
                                </a>
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Фильмы 2020 года</p>
                                </a>
                            </div>
                        </ul>
                </div>
                <div className="dropDownBody__nav-block">
                    <ul className="dropDownBody__nav-list">
                            <a href="https://www.ivi.ru/new/movie-new" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item dropDownBody__nav-list-item_active"
                                    id='dropDown-film-new'
                                    onMouseOver={hoverActivator}
                                >Новинки</p>
                            </a>
                            <a href="https://www.ivi.ru/collections" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-list'
                                    onMouseOver={hoverActivator}
                                >Подборки</p>
                            </a>
                            <a href="https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-reit'
                                    onMouseOver={hoverActivator}
                                >Иви.Рейтинг</p>
                            </a>
                            <a href="https://www.ivi.ru/new/soon-ivi" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-soon'
                                    onMouseOver={hoverActivator}
                                >Скоро на Иви</p>
                            </a>
                            <a href="https://www.ivi.ru/trailers" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-treilers'
                                    onMouseOver={hoverActivator}
                                >Трейлеры</p>
                            </a>
                            <a href="https://www.ivi.ru/goodmovies" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-suggest'
                                    onMouseOver={hoverActivator}
                                >Что посмотреть</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/movies-hd" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-hd'
                                    onMouseOver={hoverActivator}
                                >Фильмы в HD</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/vyibor-ivi" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-chose'
                                    onMouseOver={hoverActivator}
                                >Выбор Иви</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-update'
                                    onMouseOver={hoverActivator}
                                >Новинки подписки</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/filmyi-amediateka" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-amediafilms'
                                    onMouseOver={hoverActivator}
                                >Фильмы Amediateka</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/best-movies" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-popular'
                                    onMouseOver={hoverActivator}
                                >Популярные фильмы</p>
                            </a>
                            <a href="https://www.ivi.ru/collections/ivi-originals" className="dropDownBody__list-link">
                                <p 
                                    className="dropDownBody__nav-list-item"
                                    id='dropDown-film-movies'
                                    onMouseOver={hoverActivator}
                                >Фильмы Иви</p>
                            </a>
                    </ul>
                </div>    
            </div>
            <HeaderAdvertise variant={headerAdvertiseProp}/>
        </div>
    )
 }

 export default HeaderMenuFilms;