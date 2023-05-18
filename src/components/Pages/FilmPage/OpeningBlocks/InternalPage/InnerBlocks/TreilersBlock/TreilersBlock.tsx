import React, { FC } from "react";
import './TreilersBlock.scss'
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

interface TrailersBlockProps {
trailer: string;
}

const TreilersBlock:FC<TrailersBlockProps> = ({trailer}) => {
    const {t, i18n} = useTranslation();

    return (
        <div className="treilersBlock">
            <h2 className="treilersBlock__heading">{t('internalPage.treilersBlock.trailer')}</h2>

            
            {(trailer) && <div className="treilersBlock__video">
                <ReactPlayer
                    url={trailer}
                    className = 'treilersBlock__videoPlayer'
                    width={280}
                    height={160}
                    controls
                />
            </div>}
            {(!trailer) &&<div className="treilersBlock__text">
                {t('internalPage.treilersBlock.noInfo')}
            </div>}
            
        </div>
    )
}

export default TreilersBlock;