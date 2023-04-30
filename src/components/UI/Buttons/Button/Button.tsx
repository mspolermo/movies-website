import React, { FC, useEffect, useState }  from "react";
import classes from './Button.module.scss'
import { ButtonProps } from "../../../../types/types";
import { useTranslation } from 'react-i18next';

const Button:FC<ButtonProps> = ({ type = 'default', color = 'default', svg, title, onClick }) => {
    const { t, i18n } = useTranslation();

    const [btnClass, setBtnClass] = useState ('');
    const [svgClass, setSvgClass] = useState ('');

    function btnClassInit () {
        let initClass = '';

        switch(type) {
            case 'ultraWide':
                initClass = `${classes.btn} ${classes.btn__ultraWide}`;
                break;
            case 'rounded':
                initClass = `${classes.btn} ${classes.btn__rounded}`;
                break;
            default:
                initClass = classes.btn;
                break;
        };

        switch(color) {
            case 'red':
                initClass =  initClass + ` ${classes.btn__red}`;
                break;
            case 'gray':
                initClass = initClass + ` ${classes.btn__gray}`;
                break;
            case 'gradient':
                initClass = initClass + ` ${classes.btn__gradient}`;
                break;
            case 'transparent':
                initClass = initClass + ` ${classes.btn__transparent}`;
                break;
            case 'purple':
                initClass = initClass + ` ${classes.btn__purple}`;
                break;
            default:
                break;
        };

        return initClass;
    };

    useEffect ( () => {
        setBtnClass(btnClassInit());
        (title) ? setSvgClass(classes.btn__svg) : setSvgClass('');  
    },[color, type, title]);

    return (
        <div className={btnClass} onClick={onClick}>
            {(svg) && <div 
            className={svgClass}>{svg}</div>}
            {(title) && <div className={classes.btn__textBlock}>
                {title.map(elem => <div 
                    key={elem}
                    className={classes.btn__text}
                >{t(elem)}</div>)}
            </div>} 
        </div>
    );
};

export default Button;