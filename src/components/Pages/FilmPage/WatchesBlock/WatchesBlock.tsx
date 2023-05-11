import React, { FC } from "react";
import './WatchesBlock.scss'
import Button from "../../../UI/Buttons/Button/Button";
import imageTv from '../../../../static/img/FilmPage/tv-without-poster.png'
import imageTablet from '../../../../static/img/FilmPage/ipad-without-poster.png'

interface WatchesBlockProps {
    filmName: string;
    bigPictureUrl: string,
    smallPictureUrl: string
}

const WatchesBlock:FC<WatchesBlockProps> = ({filmName, bigPictureUrl, smallPictureUrl}) => {
    return (
        <div className="watchesBlock">
            <div className="watchesBlock__body">
                <div className="watchesBlock__column watchesBlock__column_control">
                    <h3 className="watchesBlock__heading">Cмотреть «{filmName}» на всех устройствах</h3>
                    <p className="watchesBlock__text">Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>
                    <div className="watchesBlock__desktop">
                        <Button title={['Подключить устройства']} color="red" />    
                    </div>
                    <div className="watchesBlock__mobile">
                        <Button title={['Подключить устройства']} color="red" type="ultraWide"/>    
                    </div>
                </div>
                <div className="watchesBlock__column watchesBlock__column_img">
                    <div className="watchesBlock__image-container">
                        <img className="watchesBlock__image-tv" src={imageTv} alt="Tv" />
                        <img className="watchesBlock__image-tablet" src={imageTablet} alt="Tablet" />
                        <img className="watchesBlock__poster-tv" src={bigPictureUrl} alt="TvPoster" />
                        <img className="watchesBlock__poster-tablet" src={smallPictureUrl} alt="TabletPoster" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchesBlock;