import React, {FC, PropsWithChildren} from 'react';
import './Filmography.scss'
import CreateEnd from "../../../UI/CreateEnding/CreateEnd";
import {useTranslation} from "react-i18next";

interface FilmographyProps {
    'movies': number,
}

const Filmography: FC<PropsWithChildren<FilmographyProps>> = ({ movies}) => {
    const { t, i18n } = useTranslation();

    return (
        <div className='filmography'>
            <div className="filmography__content">

                <div className="filmography__header">
                    <div className="filmography__title">
                        {t('personPage.filmography')}
                    </div>
                    <div className="filmography__subtitle">
                        <CreateEnd number={movies} wordOne='фильм' wordTwo='фильмов' wordThree='фильма' wordEn='films'/>
                    </div>
                </div>

                <div className="filmography__lists">
                    <div className="filmography__role">
                        <div className='filmography__role_active'>
                            {t('personPage.films')}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Filmography;