import React, { useEffect, useRef, useState } from "react";
import './Header.scss';
import Button from "../UI/Buttons/Button/Button";
import Icons from "../Icons/Icons";

const Header = () => {

    const dropDown = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const[dropDownVariant, setDropDownVariant] = useState ('dropDownBody__films');
    const[variantID, setVariatnID] = useState('#drop-down-films');
    
    const[chosenVariant, setChosenVariant] = useState('');
    let block=null;

    // useEffect( () => {
    //     document.querySelector(`${variantID}`)?.classList.add(`${dropDownVariant}_hidden`);
    // },[])

     
    useEffect( () => {
        
        // console.log(chosenVariant.length)
        // console.log(variantID)
        // console.log(dropDownVariant)

        document.querySelector(`${variantID}`)?.classList.add(`${dropDownVariant}_hidden`);

        switch(chosenVariant) {
            case "Фильмы":
                block = document.querySelector('#drop-down-films')
                block?.classList.remove('dropDownBody__films_hidden')
                setVariatnID('#drop-down-films')
                setDropDownVariant('dropDownBody__films')
                break;
            case "Сериалы":
                block = document.querySelector('#drop-down-series')
                block?.classList.remove('dropDownBody__series_hidden')
                setVariatnID('#drop-down-series')
                setDropDownVariant('dropDownBody__series')
                break;
            case "Мультфильмы":
                block = document.querySelector('#drop-down-mults')
                block?.classList.remove('dropDownBody__mults_hidden')
                setVariatnID('#drop-down-mults')
                setDropDownVariant('dropDownBody__mults')
                break;
            case 'TV+':
                block = document.querySelector('#drop-down-tv')
                block?.classList.remove('dropDownBody__TV_hidden')
                setVariatnID('#drop-down-tv')
                setDropDownVariant('dropDownBody__TV')
                break;
        }
        
    }, [chosenVariant])

    const hoverListener = (e: React.DragEvent<HTMLDivElement>) => {
        const dropdownBlock = document.querySelector('#drop-down-block');
        const headerTop = document.querySelector('#header-top');

        dropdownBlock?.classList.remove('header__dropDownBody_hidden');
        headerTop?.classList.add('header__container_active');

        if (e.currentTarget.innerHTML.length < 20) {
            setChosenVariant(e.currentTarget.innerHTML); 
        };
    }

    const leaveListener = (e: React.DragEvent<HTMLDivElement>) => {
        const dropdownBlock = document.querySelector('#drop-down-block');
        const headerTop = document.querySelector('#header-top');

        dropdownBlock?.classList.add('header__dropDownBody_hidden');
        headerTop?.classList.remove('header__container_active');
    }

    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>

    const GetElementWidth = () => {
        
        const [width, setWidth] = useState<null | number>(null);
     
        const observer = useRef(
          new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            //24 - sum of paddings
            setWidth(width + 24);
          })
        );
       
        useEffect(() => {
          observer.current.observe(ref.current);
        }, 
        [ref, observer]);
     
        return  width;
    };

    let width = `${GetElementWidth()}px`;
    //console.log(GetElementWidth());  
    
    return <div className='header'>
        <div className="header__body">
            <div  className="container header__container" ref={ref} id='header-top'>
                <div className="header__content">
                    <div className="header__block">
                        <div className="header__img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="56" viewBox="0 0 77 56" fill="none"><path d="M40.5122 30.7942C38.6214 47.2738 34.6849 50.4018 18.2045 48.5117C1.72562 46.6208 -1.40076 42.6835 0.487791 26.2039C2.37864 9.72428 6.31594 6.5979 22.7956 8.48875C39.2752 10.3781 42.4031 14.3154 40.5122 30.795V30.7942Z" fill="url(#paint0_linear_606_157)"/><path d="M73.0194 18.5526C71.3745 18.5526 70.0064 19.2102 68.708 21.1846L63.5314 28.9933L63.9989 22.8992C64.1721 20.6136 62.735 18.5534 60.1727 18.5534C57.7837 18.5534 56.3121 20.1637 56.1734 22.1895L55.3594 33.3223C55.1693 36.1267 56.6056 37.6849 58.961 37.6849C61.3163 37.6849 62.666 36.0746 63.7046 34.5164L68.708 26.9507L68.2581 33.3223C68.068 35.9367 69.4354 37.6849 71.9977 37.6849C74.3699 37.6849 75.8936 36.2823 76.0492 34.17L76.88 22.8984C77.0356 20.7171 75.9626 18.5526 73.0194 18.5526ZM53.3168 32.3167C53.3168 29.7713 51.3776 28.1264 48.8154 27.7976C51.2044 27.2956 53.2999 25.7198 53.2999 23.1575C53.2999 20.3178 51.1009 18.7082 47.0671 18.7251H38.8951C35.1211 18.7251 33.7184 20.2488 33.4241 24.4038L32.9389 31.364C32.6101 36.0386 33.943 37.5102 38.5487 37.5102H46.3742C50.8756 37.5102 53.3168 35.6577 53.3168 32.3159V32.3167ZM45.5947 31.8146C45.5947 33.425 44.3484 34.1868 42.2706 34.1868L40.0678 34.1692C40.0678 34.1692 40.4134 31.902 40.6357 29.6333H42.6515C44.3829 29.6333 45.5947 30.343 45.5947 31.8146ZM45.6813 24.1968C45.6813 25.5818 44.5562 26.4126 42.5649 26.4126H40.9078C40.9078 26.4126 41.0734 23.8872 40.9653 22.0668H42.7895C44.6075 22.0668 45.6805 22.8463 45.6805 24.196L45.6813 24.1968Z" fill="#fff"/><path d="M27.2668 18.5826C25.6051 18.5826 24.2753 19.2472 22.9463 21.2047L17.7765 28.9965L18.2563 22.94C18.4043 20.6505 16.9641 18.5826 14.4156 18.5826C12.0519 18.5826 10.5749 20.1707 10.427 22.2019L9.61453 33.3546C9.42981 36.1246 10.87 37.7119 13.1594 37.7119C15.4488 37.7119 16.889 36.0502 17.9605 34.5357L22.9455 26.9654L22.5025 33.3538C22.281 35.9391 23.6844 37.7111 26.2321 37.7111C28.5959 37.7111 30.1464 36.3078 30.2943 34.2031L31.1068 22.94C31.2915 20.7241 30.2208 18.5826 27.2661 18.5826H27.2668Z" fill="url(#paint1_linear_606_157)"/><path d="M18.2485 22.9453L17.7687 29.0019L17.9527 34.5411C16.8812 36.0556 15.441 37.7173 13.1516 37.7173C10.8622 37.7173 9.422 36.1299 9.60671 33.36L10.4192 22.2072C10.5671 20.1761 12.0441 18.588 14.4078 18.588C16.9563 18.588 18.3965 20.6559 18.2485 22.9453Z" fill="url(#paint2_linear_606_157)"/><path d="M18.2642 22.6242C18.2642 20.5119 16.8984 18.5812 14.3867 18.5812C11.875 18.5812 10.418 20.4644 10.418 22.4955C10.418 24.6745 12.0528 26.373 14.3422 26.373C16.6316 26.373 18.2642 24.8025 18.2642 22.6242Z" fill="#fff"/><defs><linearGradient id="paint0_linear_606_157" x1="44.965" y1="73.64" x2=".021" y2="6.412" gradientUnits="userSpaceOnUse"><stop offset=".798" stopColor="#F30745"/><stop offset=".977" stopColor="#FFBCCE"/></linearGradient><linearGradient id="paint1_linear_606_157" x1="19.513" y1="28.053" x2="11.525" y2="27.039" gradientUnits="userSpaceOnUse"><stop offset=".15" stopColor="#fff"/><stop offset=".62" stopColor="#fff" stopOpacity=".6"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient><linearGradient id="paint2_linear_606_157" x1="12.146" y1="37.572" x2="14.313" y2="25.753" gradientUnits="userSpaceOnUse"><stop offset=".15" stopColor="#fff"/><stop offset=".62" stopColor="#fff" stopOpacity=".6"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs></svg>
                        </div>
                        <div className="header__headerMenu">
                            <nav className="headerMenu__navigation">
                                <ul className="headerMenu__list">
                                    <li className="headerMenu__listItem">
                                        <a href="https://www.ivi.ru/" title="Мой Иви" className="headerMenu__link">
                                            <p className="headerMenu__text">Мой Иви</p>
                                        </a>
                                    </li>
                                    <li className="headerMenu__listItem">
                                        <a href="https://www.ivi.ru/new" title="Что нового" className="headerMenu__link">
                                            <p className="headerMenu__text">Что нового</p>
                                        </a>
                                    </li>
                                    <li className="headerMenu__listItem">
                                        <a href="" title="Фильмы" className="headerMenu__link">
                                            <p 
                                                className="headerMenu__text"
                                                onMouseOver={hoverListener}
                                                onMouseLeave={leaveListener}
                                            >Фильмы</p>
                                        </a>
                                    </li>
                                    <li className="headerMenu__listItem">
                                        <a href="" title="Сериалы" className="headerMenu__link">
                                            <p 
                                                className="headerMenu__text"
                                                onMouseOver={hoverListener}
                                                onMouseLeave={leaveListener}
                                            >Сериалы</p>
                                        </a>
                                    </li>
                                    <li className="headerMenu__listItem">
                                        <a href="" title="Мультфильмы" className="headerMenu__link">
                                            <p 
                                                className="headerMenu__text"
                                                onMouseOver={hoverListener}
                                                onMouseLeave={leaveListener}
                                            >Мультфильмы</p>
                                        </a>
                                    </li>
                                    <li className="headerMenu__listItem">
                                        <a href="" title="TV+" className="headerMenu__link">
                                            <p 
                                                className="headerMenu__text"
                                                onMouseOver={hoverListener}
                                                onMouseLeave={leaveListener}
                                            >TV+</p>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header__block">
                        <Button title={['Смотреть 30 дней за 1 ₽']} color="red"/>
                        <div className="header__btn-block header__btn-block_search">
                            <Icons className="header__svg header__svg_search" name='search' color='gray' size='20' strokeWidth="2"/>
                            <p className="header__text">Поиск</p>
                        </div>
                        <div 
                            className="header__btn-block header__btn-block_notification"
                            onMouseOver={hoverListener}
                            onMouseLeave={leaveListener}
                        >
                            <Icons className="header__svg header__svg_notification" name='notification' color='#fff' size='16'/>   
                        </div>
                        <div 
                            className="header__btn-block header__btn-block_login"
                            onMouseOver={hoverListener}
                            onMouseLeave={leaveListener}
                        >
                            <Icons className="header__svg header__svg_login" name='person' color='#fff' size='20' strokeWidth="3"/> 
                        </div>
                    </div>
                </div>
            </div>
            <div 
                    className="header__dropDownBody header__dropDownBody_hidden"
                    id='drop-down-block'
                    style={{'width': width}} 
                    onMouseOver={hoverListener}
                    onMouseLeave={leaveListener}
                >
                    <div className="dropDownBody__body" id='drop-down-body' ref={dropDown}>
                        <div className="dropDownBody__films" id='drop-down-films'>
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
                                    <ul className="dropDownBody__list">
                                        <div className="dropDownBody__list-column">
                                            <a href="https://www.ivi.ru/new/movie-new" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Новинки</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Подборки</p>
                                            </a>
                                            <a href="https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Иви.Рейтинг</p>
                                            </a>
                                            <a href="https://www.ivi.ru/new/soon-ivi" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Скоро на Иви</p>
                                            </a>
                                            <a href="https://www.ivi.ru/trailers" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Трейлеры</p>
                                            </a>
                                            <a href="https://www.ivi.ru/goodmovies" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Что посмотреть</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/movies-hd" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Фильмы в HD</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/vyibor-ivi" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Выбор Иви</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Новинки подписки</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/filmyi-amediateka" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Фильмы Amediateka</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/best-movies" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Популярные фильмы</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/ivi-originals" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Фильмы Иви</p>
                                            </a>
                                        </div>
                                    </ul>
                                </div>    
                            </div>
                            <div className="dropDownBody__block dropDownBody__block_subscribe">
                                <div className="dropDownBody__adv">
                                    <h4>Подписка Ivi</h4>   
                                </div>
                                <Button 
                                    svg={<Icons name='smartTV' color='#fff' size='20'/>}
                                    color="gray"
                                    title={['Смотрите на Smart TV']}
                                    onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                            />
                            </div>
                        </div>
                        <div className="dropDownBody__series dropDownBody__series_hidden" id='drop-down-series'>
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
                                    <ul className="dropDownBody__list">
                                        <div className="dropDownBody__list-column">
                                            <a href="https://www.ivi.ru/new/series-new" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Новинки</p>
                                            </a>
                                            <a href="https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Иви.Рейтинг</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/series-hd" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Сериалы в HD</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/tvshow-free?sort=new" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Бесплатные сериалы</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/serialyi-amediateka" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Сериалы Amediateka</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/series-paramount-play" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Сериалы Paramount Play</p>
                                            </a>
                                        </div>
                                    </ul>
                                </div>    
                            </div>
                            <div className="dropDownBody__block dropDownBody__block_subscribe">
                                <div className="dropDownBody__adv">
                                    <h4>Подписка Ivi</h4>   
                                </div>
                                <Button 
                                    svg={<Icons name='smartTV' color='#fff' size='20'/>}
                                    color="gray"
                                    title={['Смотрите на Smart TV']}
                                    onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                            />
                            </div>
                        </div>
                        <div className="dropDownBody__mults dropDownBody__mults_hidden" id="drop-down-mults">
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
                                    <ul className="dropDownBody__list">
                                        <div className="dropDownBody__list-column">
                                            <a href="https://www.ivi.ru/new/animation-new" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Новинки</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/cartoons-hd" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Мультики в HD</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/animation-paramount-play" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Мультфильмы Paramount Play / Nickelodeon</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/dreamworks-cartoons" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Мульфильмы Dreamworks</p>
                                            </a>
                                            <a href="https://www.ivi.ru/collections/ctc-kids" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Мульфильмы СТС Kids</p>
                                            </a>
                                        </div>
                                    </ul>
                                </div>    
                            </div>
                            <div className="dropDownBody__block dropDownBody__block_subscribe">
                                <div className="dropDownBody__adv">
                                    <h4>Подписка Ivi</h4>   
                                </div>
                                <Button 
                                    svg={<Icons name='smartTV' color='#fff' size='20'/>}
                                    color="gray"
                                    title={['Смотрите на Smart TV']}
                                    onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                            />
                            </div>
                        </div>
                        <div className="dropDownBody__TV dropDownBody__TV_hidden" id="drop-down-tv">
                            <div className="dropDownBody__block">
                                <div className="dropDownBody__column">
                                    <h3 className="dropDownBody__list-head">ТВ онлайн</h3>
                                    <ul className="dropDownBody__list">
                                        <div className="dropDownBody__list-column">
                                            <a href="https://www.ivi.ru/tvplus/tvchannels" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">ТВ-каналы</p>
                                            </a>
                                            <a href="https://www.ivi.ru/tvplus/razvlekatelnoe" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Развлекательное</p>
                                            </a>
                                            <a href="https://www.ivi.ru/tvplus/deti" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Дети</p>
                                            </a>
                                            <a href="https://www.ivi.ru/tvplus/sport" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Спортивное ТВ</p>
                                            </a>
                                            <a href="https://www.ivi.ru/tvplus/documentalnoe" className="dropDownBody__list-link">
                                                <p className="dropDownBody__list-item">Документальное</p>
                                            </a>
                                        </div>
                                    </ul>
                                    <Button 
                                        color="gray"
                                        title={['Телепрограмма']}
                                        onClick={function() {window.location.href = 'https://www.ivi.ru/tvplus/tv-schedule-today'}}
                                    />
                                </div>
                            </div>
                            <div className="dropDownBody__block dropDownBody__block_subscribe">
                                <div className="dropDownBody__adv">
                                    <h4>Подписка Ivi</h4>   
                                </div>
                                <Button 
                                    svg={<Icons name='smartTV' color='#fff' size='20'/>}
                                    color="gray"
                                    title={['Смотрите на Smart TV']}
                                    onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                            />
                            </div>
                        </div>
                        <div className="dropDownBody__variant">
                            <div className="dropDownBody__block"></div>
                            <div className="dropDownBody__block"></div>
                            <div className="dropDownBody__block"></div>
                        </div>
                        <div className="dropDownBody__variant">
                            <div className="dropDownBody__block"></div>
                            <div className="dropDownBody__block"></div>
                            <div className="dropDownBody__block"></div>
                        </div>
                        <div className="dropDownBody__variant">
                            <div className="dropDownBody__block"></div>
                            <div className="dropDownBody__block"></div>
                            <div className="dropDownBody__block"></div>
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
}

export default Header;