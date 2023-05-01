import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

import './Header.scss';
import Button from "../UI/Buttons/Button/Button";
import Icons from "../Icons/Icons";

import HeaderMenuFilms from "./HeaderMenu/HeaderMenuFilms/HeaderMenuFilms";
import HeaderMenuSeries from "./HeaderMenu/HeaderMenuSeries/HeaderMenuSeries";
import HeaderMenuMults from "./HeaderMenu/HeaderMenuMults/HeaderMenuMults";
import HeaderMenuTv from "./HeaderMenu/HeaderMenuTv/HeaderMenuTv";
import HeaderMenuSubscribe from "./HeaderMenu/HeaderMenuSubscribe/HeaderMenuSubscribe";
import HeaderMenuNotify from "./HeaderMenu/HeaderMenuNotify/HeaderMenuNotify";
import HeaderMenuLogin from "./HeaderMenu/HeaderMenuLogin/HeaderMenuLogin";

import OpenUrl from "../../hooks/OpenUrl";
import LanguageChanger from "./LanguageChanger/LanguageChanger";

const Header = () => {
    const { t, i18n } = useTranslation();

    const dropDown = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const[dropDownVariant, setDropDownVariant] = useState ( 'headerMenuFilms' );
    const[variantID, setVariatnID] = useState( '#drop-down-films' );
    
    const[chosenVariant, setChosenVariant] = useState('');
    let block = null;
     
    useEffect( () => {

        document.querySelector(`${variantID}`)?.classList.add(`${dropDownVariant}__hidden`);

        //workaroud для отображения пунктов выпадающего списка
        let variant='';

        if ( (chosenVariant == 'Фильмы') || (chosenVariant == 'Movies') ) {
            variant = 'films'
        } else if ( (chosenVariant == 'Сериалы') || (chosenVariant == 'Series') ) {
            variant = 'series'
        } else if ( (chosenVariant == 'Мультфильмы') || (chosenVariant == 'Cartoons') ) {
            variant = 'cartoons'
        } else if (chosenVariant.includes('notification')) {
            variant = 'notification'
        } else if(chosenVariant.includes('person')) {
            variant = 'person'
        }else if( (chosenVariant.includes('дней')) || (chosenVariant.includes('days'))) {
            variant = 'subscribe'
        } else {variant=chosenVariant};

        switch(variant) {
            case ("films" ):
                block = document.querySelector('#drop-down-films')
                block?.classList.remove('headerMenuFilms__hidden')
                setVariatnID('#drop-down-films')
                setDropDownVariant('headerMenuFilms')
                break;
            case "series":
                block = document.querySelector('#drop-down-series')
                block?.classList.remove('headerMenuSeries__hidden')
                setVariatnID('#drop-down-series')
                setDropDownVariant('headerMenuSeries')
                break;
            case "cartoons":
                block = document.querySelector('#drop-down-mults')
                block?.classList.remove('headerMenuMults__hidden')
                setVariatnID('#drop-down-mults')
                setDropDownVariant('headerMenuMults')
                break;
            case 'TV+':
                block = document.querySelector('#drop-down-tv')
                block?.classList.remove('headerMenuTv__hidden')
                setVariatnID('#drop-down-tv')
                setDropDownVariant('headerMenuTv')
                break;
            case ('notification'):
                block = document.querySelector('#drop-down-notify')
                block?.classList.remove('headerMenuNotify__hidden')
                setVariatnID('#drop-down-notify')
                setDropDownVariant('headerMenuNotify')
                break;
            case ('subscribe'):
                block = document.querySelector('#drop-down-subscribe')
                block?.classList.remove('headerMenuSubscribe__hidden')
                setVariatnID('#drop-down-subscribe')
                setDropDownVariant('headerMenuSubscribe')
                break;
            case ('person'):
                block = document.querySelector('#drop-down-login')
                block?.classList.remove('headerMenuLogin__hidden')
                setVariatnID('#drop-down-login')
                setDropDownVariant('headerMenuLogin')
                break;
        };
    }, [chosenVariant]);

    const hoverListener = (e: React.DragEvent<HTMLDivElement>) => {
        let checkWidth = parseInt(width.replace(/[^\d]/g, ''))

        if ( checkWidth > 1099 ) {

            const dropdownBlock = document.querySelector('#drop-down-block');
            const headerTop = document.querySelector('#header-top');

            dropdownBlock?.classList.remove('header__dropDownBody_hidden');
            headerTop?.classList.add('header__container_active');

            //Условие для workaround (длина выпадающего списка всегда >1000, длина кнопок меню <300)
            if (e.currentTarget.innerHTML.length < 300) {
                setChosenVariant(e.currentTarget.innerHTML); 
            };

        };
    };

    const leaveListener = (e: React.DragEvent<HTMLDivElement>) => {
        const dropdownBlock = document.querySelector('#drop-down-block');
        const headerTop = document.querySelector('#header-top');

        dropdownBlock?.classList.add('header__dropDownBody_hidden');
        headerTop?.classList.remove('header__container_active');
    };

    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    const GetElementWidth = () => {
        
        const [width, setWidth] = useState<null | number>(null);
     
        const observer = useRef(
          new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            //24 - sum of paddings
            setWidth(width + 24);
          })
        );
       
        useEffect( () => {
          observer.current.observe(ref.current);
        }, [ref, observer]);
     
        return  width;
    };

    let width = `${GetElementWidth()}px`;
    
    return (
        <div className='header'>
            <LanguageChanger />
            <div className="header__body">
                <div  className="container header__container" ref={ref} id='header-top'>                 
                    <div className="header__content">
                        <div className="header__block">
                            <div className="header__img">
                                <img src='https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg' alt="Логотип Иви" onClick={() => OpenUrl('https://www.ivi.ru/')}/>
                            </div>
                            <div className="header__headerMenu">
                                <nav className="headerMenu__navigation">
                                    <ul className="headerMenu__list">
                                        <li className="headerMenu__listItem">
                                            <a href="https://www.ivi.ru/" title="Мой Иви" className="headerMenu__link">
                                                <p className="headerMenu__text">{t('header.myIvi')}</p>
                                            </a>
                                        </li>
                                        <li className="headerMenu__listItem">
                                            <a href="https://www.ivi.ru/new" title="Что нового" className="headerMenu__link">
                                                <p className="headerMenu__text">{t('header.new')}</p>
                                            </a>
                                        </li>
                                        <li className="headerMenu__listItem">
                                            <a href="" title="Фильмы" className="headerMenu__link">
                                                <p 
                                                    className="headerMenu__text"
                                                    onMouseOver={hoverListener}
                                                    onMouseLeave={leaveListener}
                                                >{t('header.films')}</p>
                                            </a>
                                        </li>
                                        <li className="headerMenu__listItem">
                                            <a href="" title="Сериалы" className="headerMenu__link">
                                                <p 
                                                    className="headerMenu__text"
                                                    onMouseOver={hoverListener}
                                                    onMouseLeave={leaveListener}
                                                >{t('header.series')}</p>
                                            </a>
                                        </li>
                                        <li className="headerMenu__listItem">
                                            <a href="" title="Мультфильмы" className="headerMenu__link">
                                                <p 
                                                    className="headerMenu__text"
                                                    onMouseOver={hoverListener}
                                                    onMouseLeave={leaveListener}
                                                >{t('header.mults')}</p>
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
                            <div 
                                className="header__btn-block"
                                onMouseOver={hoverListener}
                                onMouseLeave={leaveListener}
                            >
                                <Button 
                                    title={['button.header.menuSubscribe.adv']} 
                                    color="red"
                                    onClick={() => OpenUrl('https://www.ivi.ru/subscribe')}
                                />   
                            </div>
                            <div className="header__btn-block header__btn-block_search">
                                <Icons className="header__svg header__svg_search" name='search' color='gray' size='20' strokeWidth="2"/>
                                <p className="header__text">{t('header.search')}</p>
                            </div>
                            <div 
                                className="header__btn-block header__btn-block_notification"
                                onMouseOver={hoverListener}
                                onMouseLeave={leaveListener}
                                onClick={() => OpenUrl('https://www.ivi.ru/profile/pull_notifications')}
                            > 
                                <Icons className="header__svg header__svg_notification" name='notification' color='#fff' size='16'/>
                            </div>
                            <div 
                                className="header__btn-block header__btn-block_login"
                                onMouseOver={hoverListener}
                                onMouseLeave={leaveListener}
                                onClick={() => OpenUrl('https://www.ivi.ru/profile')}
                            >
                                <div className="header__svg-border">
                                    <Icons className="header__svg header__svg_login" name='person' color='#fff' size='20' strokeWidth="3"/> 
                                </div> 
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
                        <HeaderMenuFilms id='drop-down-films'/>
                        <HeaderMenuSeries id='drop-down-series'/>
                        <HeaderMenuMults id="drop-down-mults"/>
                        <HeaderMenuTv id="drop-down-tv"/>
                        <HeaderMenuSubscribe id="drop-down-subscribe"/>
                        <HeaderMenuNotify id="drop-down-notify"/>
                        <HeaderMenuLogin id="drop-down-login"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;