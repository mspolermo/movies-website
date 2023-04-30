import React, { FC }  from "react";
import classes from './Tile.module.scss'
import { TileProps } from "../../../../types/types";
import { useTranslation } from 'react-i18next';

const Tile:FC<TileProps> = ({title, svg, onClick, hooverEffect='on'}) => {
    const { t, i18n } = useTranslation();

    let initialClass = classes.tile__hoverClass;

    switch (hooverEffect) {
        case 'on':
            initialClass = classes.tile__hoverClass;
            break;
        case 'off':
            initialClass = classes.tile__withoutHoverClass;
            break;
    }

    return (
        <div 
            className={initialClass} 
            onClick={onClick}
        >
            <div className={classes.tile__svg}>{svg}</div>
            <p className={classes.tile__text}>{t(title)}</p>
        </div>
    )
}

export default Tile;