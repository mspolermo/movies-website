import React, { FC, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuSeries.scss'
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";
import { useTranslation } from 'react-i18next';

const HeaderMenuSeries:FC<HeaderMenuProps> = ({id}) => {
    const { t, i18n } = useTranslation();
    
    const hoverActiveListData = [
        [0, 'header.menuSeries.activeList.new', "https://www.ivi.ru/new/series-new"],
        [1, 'header.menuSeries.activeList.reit', 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'],
        [2, 'header.menuSeries.activeList.hd', 'https://www.ivi.ru/collections/series-hd'],
        [3, 'header.menuSeries.activeList.free', 'https://www.ivi.ru/collections/tvshow-free?sort=new'],
        [4, 'header.menuSeries.activeList.amedia', 'https://www.ivi.ru/collections/serialyi-amediateka'],
        [5, 'header.menuSeries.activeList.paramount', 'https://www.ivi.ru/collections/series-paramount-play']
    ];

    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    return(
        <div className="headerMenuSeries headerMenuSeries__hidden" id={id}>
            <div className="headerMenuSeries__column">
                <h3 className="headerMenuSeries__heading">{t('header.menuSeries.genres')}</h3>
                <ul className="headerMenuSeries__list">
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.biography')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.militants')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.military')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.detectives')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.famaly')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.doc')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.dram')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.history')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.comedy')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.criminals')}</p>
                        </a>
                    </div>
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.medical')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.melodrams')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.mystical')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.adventures')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.romantical')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.thrillers')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.turkish')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.horrors')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.fantastic')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.fantasy')}</p>
                        </a>
                    </div>
                </ul>    
            </div>
            <div className="headerMenuSeries__column">
                <h3 className="headerMenuSeries__heading">{t('header.menuSeries.countres')}</h3>
                <ul className="headerMenuSeries__list">
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.russian')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.abroad')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.american')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.ukrain')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.korean')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.turkish')}</p>
                        </a>
                    </div>
                </ul>
                <h3 className="headerMenuSeries__heading">{t('header.menuSeries.years')}</h3>
                <ul className="headerMenuSeries__list">
                    <div className="headerMenuSeries__column">
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.2023')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.2022')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.2021')}</p>
                        </a>
                        <a href="" className="headerMenuSeries__link">
                            <p className="headerMenuSeries__item">{t('header.menuSeries.2020')}</p>
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