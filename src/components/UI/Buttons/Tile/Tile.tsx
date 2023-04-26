import React, { FC }  from "react";
import classes from './Tile.module.scss'
import { TileProps } from "../../../../types/types";

const Tile:FC<TileProps> = ({title, svg, onClick, hooverEffect='on'}) => {

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
            <p className={classes.tile__text}>{title}</p>
        </div>
    )
}

export default Tile;