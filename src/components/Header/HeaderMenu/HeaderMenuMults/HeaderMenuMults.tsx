import React, { FC, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuMults.scss'
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";
import { useTranslation } from 'react-i18next';

const HeaderMenuMults:FC<HeaderMenuProps> = ({id}) => {
    const { t, i18n } = useTranslation();
    
    const hoverActiveListData = [
        [0, 'header.menuMults.activeList.new', "https://www.ivi.ru/new/animation-new"],
        [1, 'header.menuMults.activeList.hd', 'https://www.ivi.ru/collections/cartoons-hd'],
        [2, 'header.menuMults.activeList.paramount', 'https://www.ivi.ru/collections/animation-paramount-play'],
        [3, 'header.menuMults.activeList.dreamworks', 'https://www.ivi.ru/collections/dreamworks-cartoons'],
        [4, 'header.menuMults.activeList.ctc', 'https://www.ivi.ru/collections/ctc-kids']
    ];

    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    return(
        <div className="headerMenuMults headerMenuMults__hidden" id={id}>
            <div className="headerMenuMults__column">
                <h3 className="headerMenuMults__heading">{t('header.menuMults.genres')}</h3>
                <ul className="headerMenuMults__list">
                    <div className="headerMenuMults__column">
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.anime')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.militants')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.detectives')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.adult')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.famaly')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.child')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.dram')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.history')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.comedy')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.criminals')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.musical')}</p>
                        </a>
                    </div>
                    <div className="headerMenuMults__column">
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.full')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.adventures')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.educational')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.series')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.sport')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.thrillers')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.horrors')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.fantastic')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.fantasy')}</p>
                        </a>
                    </div>
                </ul>    
            </div>
            <div className="headerMenuMults__column">
                <h3 className="headerMenuMults__heading">{t('header.menuMults.countres')}</h3>
                <ul className="headerMenuMults__list">
                    <div className="headerMenuMults__column">
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.ussr')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.russian')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.american')}</p>
                        </a>
                        <a href="" className="headerMenuMults__link">
                            <p className="headerMenuMults__item">{t('header.menuMults.abroad')}</p>
                        </a>
                    </div>
                </ul>
                <h3 className="headerMenuMults__heading">{t('header.menuMults.years')}</h3>
                    <ul className="headerMenuMults__list">
                        <div className="headerMenuMults__column">
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">{t('header.menuMults.2023')}</p>
                            </a>
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">{t('header.menuMults.2022')}</p>
                            </a>
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">{t('header.menuMults.2021')}</p>
                            </a>
                            <a href="" className="headerMenuMults__link">
                                <p className="headerMenuMults__item">{t('header.menuMults.2020')}</p>
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