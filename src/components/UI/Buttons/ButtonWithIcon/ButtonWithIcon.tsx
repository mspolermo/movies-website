import React, { FC, useEffect, useState }  from "react";
import classes from './ButtonWithIcon.module.scss'


interface ButtonWithIconProps {
    color?: string;
    svgLink?: string;
    title?: Array<string>;
    type?: string;
    linkTo?: string;
}

const ButtonWithIcon:FC<ButtonWithIconProps> = ({title, color, svgLink, type, linkTo}) => {

    const [colorChanger, setColorChanger] = useState (classes.btn);

    useEffect ( () => {
        switch(color) {
            case 'red':
                setColorChanger (classes.btn + ' ' + classes.btn__red);
                break;
            case 'gray':
                setColorChanger (classes.btn + ' ' + classes.btn__gray);
                break;
        };
    },[])

    return (
        <div className={colorChanger}>
            {(svgLink) && <img src={svgLink} className={classes.btn__svg}/>}
            {(title) && <div className={classes.btn__textBlock}>
                {title.map(elem => <div 
                    key={elem}
                    className={classes.btn__text}
                >{elem}</div>)}
            </div>} 
            
        </div>
    )

}

export default ButtonWithIcon;