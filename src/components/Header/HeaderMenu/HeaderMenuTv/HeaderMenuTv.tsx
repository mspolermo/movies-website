import React, { FC } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuTv.scss';
import Button from "../../../UI/Buttons/Button/Button";
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import { useTranslation } from 'react-i18next';
import { Carousel } from "../../../Carousel/Carousel";
import OpenUrl from "../../../../hooks/OpenUrl";


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
                    <h3 className="headerMenuTv__heading headerMenuTv__heading_slider">{t('header.menuTV.federal')}</h3>
                    <Carousel variant='tv'>
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_1" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/1tv')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_russia1" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/russia1')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_matchTv" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/match-tv')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_Ntv" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/ntv')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_5ch" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/5tv')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_rossiaK" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/russia-k')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_rossia24" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/russia24')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_karusel" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/karusel')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_otr" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/otr')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_tvc" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/tvc')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_renTv" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/ren-tv')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_spas" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/spas')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_sts" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/sts')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_domashniy" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/domashniy')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_tv3" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/tv3')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_pyatnica" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/friday')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_zvezda" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/zvezda')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_mir" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/mir')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_tnt" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/tnt')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_muz" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/muz-tv')}} 
                        />
                    </Carousel> 
                </div>
                <div className="headerMenuTv__slider">
                    <h3 className="headerMenuTv__heading headerMenuTv__heading_slider">{t('header.menuTV.sport')}</h3>
                    <Carousel variant='tv'>
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_matchPrem" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/match-premer')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_matchFootball" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/futbol-1')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_matchFootball2" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/futbol-2')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_matchFootball3" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/futbol-3')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_boetc" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/match-boetc')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_khl" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/khl-tv-hd')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_start" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/start')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_khl2" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/khl-tv')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_igra" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/match-igra')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_arena" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/match-arena')}} 
                        />
                        <div 
                            className="headerMenuTv__sliderImg headerMenuTv__sliderImg_strana" 
                            onClick={() => {OpenUrl('https://www.ivi.ru/tvchannels/watch/match-strana')}} 
                        />
                    </Carousel> 
                </div>
            </div>
            <HeaderAdvertise variant={'ivi'}/>
        </div>
    );
}

export default HeaderMenuTv;