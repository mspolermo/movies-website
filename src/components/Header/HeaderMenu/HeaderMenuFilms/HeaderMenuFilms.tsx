import React, { FC, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuFilms.scss';
import HeaderAdvertise from "../../HeaderAdvertise/HeaderAdvertise";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";
import { useTranslation } from 'react-i18next';

const HeaderMenuFilms:FC<HeaderMenuProps> = ({id}) => {
    const { t, i18n } = useTranslation();
    const hoverActiveListData = [
        [0, 'header.menuFilms.activeList.new', "https://www.ivi.ru/new/movie-new"],
        [1, 'header.menuFilms.activeList.collect', 'https://www.ivi.ru/collections'],
        [2, 'header.menuFilms.activeList.reit', "https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready"],
        [3, 'header.menuFilms.activeList.soon', 'https://www.ivi.ru/new/soon-ivi'],
        [4, 'header.menuFilms.activeList.trailers', 'https://www.ivi.ru/trailers'],
        [5, 'header.menuFilms.activeList.see', 'https://www.ivi.ru/goodmovies'],
        [6, 'header.menuFilms.activeList.hd', 'https://www.ivi.ru/collections/movies-hd'],
        [7, 'header.menuFilms.activeList.choice', 'https://www.ivi.ru/collections/vyibor-ivi'],
        [8, 'header.menuFilms.activeList.newSub', 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection'],
        [9, 'header.menuFilms.activeList.amedia', 'https://www.ivi.ru/collections/filmyi-amediateka'],
        [10, 'header.menuFilms.activeList.popular', 'https://www.ivi.ru/collections/best-movies'],
        [11, 'header.menuFilms.activeList.iviFilms', 'https://www.ivi.ru/collections/ivi-originals']
    ];

    const [headerAdvertiseProp, setHeaderAdvertiseProp] = useState('ivi');

    return(
        <div className="headerMenuFilms" id={id}>
            <div className="headerMenuFilms__column">
                <h3 className="headerMenuFilms__heading">{t('header.menuFilms.genres')}</h3>
                <ul className="headerMenuFilms__list">
                    <div className="headerMenuFilms__column">
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.arthouse')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.militants')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.western')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.military')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.detectives')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.famaly')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.child')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.doc')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.dram')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.history')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.catastrophes')}</p>
                        </a>
                    </div>
                    <div className="headerMenuFilms__column">
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.comedy')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.criminals')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.melodrams')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.mystical')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.comics')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.adventures')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.sport')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.thrillers')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.horrors')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.fantastic')}</p>
                        </a>
                        <a href="" className="headerMenuFilms__link">
                            <p className="headerMenuFilms__item">{t('header.menuFilms.fantasy')}</p>
                        </a>
                    </div>
                </ul>    
            </div>
            <div className="headerMenuFilms__column">
                    <h3 className="headerMenuFilms__heading">{t('header.menuFilms.countres')}</h3>
                    <ul className="headerMenuFilms__list">
                        <div className="headerMenuFilms__column">
                            <a href="" className="headerMenuFilms__link">
                                <p className="headerMenuFilms__item">{t('header.menuFilms.russian')}</p>
                            </a>
                            <a href="" className="headerMenuFilms__link">
                                <p className="headerMenuFilms__item">{t('header.menuFilms.abroad')}</p>
                            </a>
                            <a href="" className="headerMenuFilms__link">
                                <p className="headerMenuFilms__item">{t('header.menuFilms.ussr')}</p>
                            </a>
                        </div>
                    </ul>
                    <h3 className="headerMenuFilms__heading">{t('header.menuFilms.years')}</h3>
                        <ul className="headerMenuFilms__list">
                            <div className="headerMenuFilms__column">
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">{t('header.menuFilms.2023')}</p>
                                </a>
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">{t('header.menuFilms.2022')}</p>
                                </a>
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">{t('header.menuFilms.2021')}</p>
                                </a>
                                <a href="" className="headerMenuFilms__link">
                                    <p className="headerMenuFilms__item">{t('header.menuFilms.2020')}</p>
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