import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../types/types";
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";
import HeaderAdvertise from "../HeaderAdvertise/HeaderAdvertise";

const HeaderMenuMults:FC<HeaderMenuProps> = ({id}) => {

    const [activePoint, setActivePoint] = useState('dropDown-mults-new');

    useEffect( () => {
        document.querySelector(`#${activePoint}`)?.classList.add('dropDownBody__nav-list-item_active');
    }, [activePoint]);
    
    function hoverActivator (e: React.DragEvent<HTMLDivElement>) {
        document.querySelector(`#${activePoint}`)?.classList.remove('dropDownBody__nav-list-item_active');
        setActivePoint(e.currentTarget.id);
    };

    return(
        <div className="dropDownBody__mults dropDownBody__mults_hidden" id={id}>
            <div className="dropDownBody__block dropDownBody__block_big">
                <div className="dropDownBody__column">
                    <h3 className="dropDownBody__list-head">Жанры</h3>
                    <ul className="dropDownBody__list">
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Аниме</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Боевик</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Детектив</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Для взрослых</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Для всей семьи</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Для детей</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Драма</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">История</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Комендия</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Криминальные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Мюзикл</p>
                            </a>
                        </div>
                        <div className="dropDownBody__list-column">
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Полнометражные</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Приключения</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Развивающие</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Сериалы</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Спорт</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Триллер</p>
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
                                <p className="dropDownBody__list-item">Советские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Русские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Американские</p>
                            </a>
                            <a href="" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Зарубежные</p>
                            </a>
                        </div>
                    </ul>
                    <h3 className="dropDownBody__list-head">Годы</h3>
                        <ul className="dropDownBody__list">
                            <div className="dropDownBody__list-column">
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Мультики 2023 года</p>
                                </a>
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Мультики 2022 года</p>
                                </a>
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Мультики 2021 года</p>
                                </a>
                                <a href="" className="dropDownBody__list-link">
                                    <p className="dropDownBody__list-item">Мультики 2020 года</p>
                                </a>
                            </div>
                        </ul>
                </div>
                <div className="dropDownBody__nav-block">
                    <ul className="dropDownBody__nav-list">
                        <a href="https://www.ivi.ru/new/animation-new" className="dropDownBody__list-link">
                            <p 
                            className="dropDownBody__nav-list-item dropDownBody__nav-list-item_active"
                            id='dropDown-mults-new'
                            onMouseOver={hoverActivator}    
                        >Новинки</p>
                        </a>
                        <a href="https://www.ivi.ru/collections/cartoons-hd" className="dropDownBody__list-link">
                            <p 
                                className="dropDownBody__nav-list-item"
                                id='dropDown-mults-HD'
                                onMouseOver={hoverActivator} 
                            >Мультики в HD</p>
                        </a>
                        <a href="https://www.ivi.ru/collections/animation-paramount-play" className="dropDownBody__list-link">
                            <p 
                                className="dropDownBody__nav-list-item"
                                id='dropDown-mults-paramount'
                                onMouseOver={hoverActivator} 
                            >Мультфильмы Paramount Play / Nickelodeon</p>
                        </a>
                        <a href="https://www.ivi.ru/collections/dreamworks-cartoons" className="dropDownBody__list-link">
                            <p 
                                className="dropDownBody__nav-list-item"
                                id='dropDown-mults-dreamworks'
                                onMouseOver={hoverActivator} 
                            >Мульфильмы Dreamworks</p>
                        </a>
                        <a href="https://www.ivi.ru/collections/ctc-kids" className="dropDownBody__list-link">
                            <p 
                                className="dropDownBody__nav-list-item"
                                id='dropDown-mults-CTC'
                                onMouseOver={hoverActivator} 
                            >Мульфильмы СТС Kids</p>
                        </a>
                    </ul>
                </div>    
            </div>
            <HeaderAdvertise variant={'ivi'}/>
        </div>
    );
};

export default HeaderMenuMults;