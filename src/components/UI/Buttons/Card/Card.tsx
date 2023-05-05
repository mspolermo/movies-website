import React, { FC, useEffect, useState } from "react";
import classes from './Card.module.scss'

interface CardProps {
    type: 'small' | 'big' | 'reit';
    title?: string;
    raitingKP?: number;
    photoUrl?: string;
    role?: string;
    onClick?: () => void;
}

const Card:FC<CardProps> = ( { type='small', title, photoUrl, raitingKP, role, onClick } ) => {
    
    const [cardClass, setCardClass] = useState(classes.card);
    const [imgClass, setImgClass] = useState(classes.card__img);
    const [bodyClass, setBodyClass] = useState(classes.card__body);
    const [textClass, setTextClass] = useState(classes.card__text);
    
    const [goodClass, setGoodClass] = useState(classes.card__color);
    const [reiting, setReiting] = useState(raitingKP);

    const [titleArray, setTitleArray] = useState([''])

    useEffect ( () => {

        switch (type) {
            case 'small':
                setCardClass(classes.card__small);
                setBodyClass(classes.card__body_small);
                setImgClass(classes.card__img_small);
                setTextClass(classes.card__text_small);
                break;
            case 'reit':
                setCardClass(classes.card__reit);
                setReiting((Math.round(raitingKP! * 10)/10));
                setBodyClass(classes.card__body_small);
                if (raitingKP! >= 8) {
                    setGoodClass(classes.card__color_green)
                };
                break;
            case 'big':
                setCardClass(classes.card__big);
                setBodyClass(classes.card__body_big);
                setImgClass(classes.card__img_big);
                setTitleArray(title!.split(' '));
            break;
        }
    }, [type])

    return (
        <div 
        className={cardClass}
            onClick={onClick}
        >
            <div className={bodyClass}>
                { (photoUrl) && <img src={photoUrl} className={imgClass}/> }
                { (raitingKP) && <div className={goodClass}>
                    <p>{reiting}</p>
                </div>}
            </div>
            <div>
                { (title) && (!titleArray[1]) && <p className={textClass}>{title}</p>}

                { (raitingKP) && <p className={classes.card__text_reit}>Рейтинг</p>}
                { (raitingKP) && <p className={classes.card__text_reit}> Иви</p>}

                { (titleArray.length = 2) && <div>
                    <p className={classes.card__text_big}>{titleArray[0]}</p>
                    <p className={classes.card__text_big}>{titleArray[1]}</p>
                </div>}
                { (role) && <p className={classes.card__text_role}>{role}</p>}
            </div>
        </div>
    )
}

export default Card;