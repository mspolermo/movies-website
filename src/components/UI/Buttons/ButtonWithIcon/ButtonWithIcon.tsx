import React, { FC, useEffect, useState }  from "react";
import classes from './ButtonWithIcon.module.scss'


interface ButtonWithIconProps {
    color?: string;
    svg?: React.ReactElement;
    title?: Array<string>;
    onClick?: () => void;
} 

const ButtonWithIcon:FC<ButtonWithIconProps> = ({ color, svg, title, onClick }) => {
    const [colorChanger, setColorChanger] = useState (classes.btn);
    useEffect ( () => {
        switch(color) {
            case 'red':
                setColorChanger (`${classes.btn} ${classes.btn__red}`);
                break;
            case 'gray':
                setColorChanger (`${classes.btn} ${classes.btn__gray}`);
                break;
            default:
                setColorChanger(classes.btn);
                break;
        };
    },[color]);

    const [svgClass, setSvgClass] = useState ('');
    useEffect ( () => {
        (title) ? setSvgClass(classes.btn__svg) : setSvgClass('');
    }, []);

    return (
        <div className={colorChanger} onClick={onClick}>
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

export default ButtonWithIcon;