import React, {FC, PropsWithChildren} from 'react';
import {useTranslation} from "react-i18next";
import './breadcrumbs.scss'
import {useNavigate} from "react-router-dom";

interface BreadProps {
    film?: boolean,
    filters?: string,
    onClick?: () => void
}

const Breadcrumbs: FC<PropsWithChildren<BreadProps>> = ({film= false, filters, onClick}) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    return (
        <div className='Breadcrumbs'>
            <div className="Breadcrumbs__content">

                <div className="Breadcrumbs__title title">
                    {film ?
                        (<div className="title__films"
                              onClick={() => navigate('/movies-website/films/')}
                        >
                            {t('breadcrumbs.films')}
                        </div>) :
                        (<div className="title__composite">
                                <div className="title__home"
                                     onClick={() => navigate('/movies-website/')}
                                >
                                    {t('breadcrumbs.home')}
                                </div>
                                /
                                {filters ?
                                    (<div className="title__films"
                                                 onClick={onClick}>
                                    {t('breadcrumbs.films')}</div>) :
                                    (<div className="title__films_notActive"
                                    >
                                        {t('breadcrumbs.films')}</div>)
                                }
                            </div>
                        )
                    }
                </div>
                {film ?
                    (<div className="Breadcrumbs__subtitle_genre"
                          onClick={() => navigate('/movies-website/films/genre/' + filters)}
                    >
                        {filters && ('/ ' + filters)}
                    </div>) :
                    (<div className="Breadcrumbs__subtitle">
                        {filters && ('/ ' + filters)}
                    </div>)

                }
            </div>
        </div>
    );
};

export default Breadcrumbs;