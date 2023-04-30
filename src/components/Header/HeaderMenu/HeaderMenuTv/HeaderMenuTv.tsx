import React, { FC } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuTv.scss';
import Button from "../../../UI/Buttons/Button/Button";
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import { useTranslation } from 'react-i18next';


const HeaderMenuTv:FC<HeaderMenuProps> = ({id}) => {
    const { t, i18n } = useTranslation();
    return(
        <div className="headerMenuTv headerMenuTv__hidden" id={id}>
            <div className="headerMenuTv__block">
                <div className="headerMenuTv__column">
                    <h3 className="headerMenuTv__heading">{t('header.menuTV.online')}</h3>
                    <ul className="headerMenuTv__list">
                        <div className="headerMenuTv__column">
                            <a href="https://www.ivi.ru/tvplus/tvchannels" className="headerMenuTv__link">
                                <p className="headerMenuTv__item">{t('header.menuTV.channels')}</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/razvlekatelnoe" className="headerMenuTv__link">
                                <p className="headerMenuTv__item">{t('header.menuTV.fun')}</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/deti" className="headerMenuTv__link">
                                <p className="headerMenuTv__item">{t('header.menuTV.child')}</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/sport" className="headerMenuTv__link">
                                <p className="headerMenuTv__item">{t('header.menuTV.sportTv')}</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/documentalnoe" className="headerMenuTv__link">
                                <p className="headerMenuTv__item">{t('header.menuTV.doc')}</p>
                            </a>
                        </div>
                    </ul>
                </div>
                <div className="headerMenuTv__column">
                    <Button 
                        title={['button.header.menuTV.program']}
                        onClick={function() {window.location.href = 'https://www.ivi.ru/tvplus/tv-schedule-today'}}
                    />    
                </div>
            </div>
            <div className="headerMenuTv__block headerMenuTv__block_slider">
                <div className="headerMenuTv__slider">
                    <h3 className="headerMenuTv__heading">{t('header.menuTV.federal')}</h3>
                    <div></div>
                </div>
                <div className="headerMenuTv__slider">
                    <h3 className="headerMenuTv__heading">{t('header.menuTV.sport')}</h3>
                    <div></div>
                </div>
            </div>
            <HeaderAdvertise variant={'ivi'}/>
        </div>
    );
}

export default HeaderMenuTv;