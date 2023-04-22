import React, { FC, useEffect, useState }  from "react";
import classes from './Button.module.scss'


interface ButtonProps {
    type?: 'default' | 'ultraWide' | 'rounded';
    color?: 'default' | 'red' | 'gray' | 'gradient' | 'transparent';
    svg?: React.ReactElement;
    title?: Array<string> | undefined;
    onClick?: () => void;
} 

const Button:FC<ButtonProps> = ({ type = 'default', color = 'default', svg, title, onClick }) => {
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
                >{elem}</div>)}
            </div>} 
        </div>
    );
};

export default Button;