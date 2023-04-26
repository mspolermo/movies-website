import React, {FC, PropsWithChildren} from 'react';
import Icons from "../../Icons/Icons";
import './BigSearchResult.scss'

interface BigResultProps{
    iconName: string,
    title: string,
    subtitle: string,
    onClick: () => void
}

//todo: onClick перенаправление на страницу результата.

const BigSearchResult: FC<PropsWithChildren<BigResultProps>> = ({iconName, title, subtitle, onClick}) => {
    return (
        <div className='BigSearch'
             onClick={onClick}
        >
            <div className="BigSearch__content">

                <div className="BigSearch__icon">
                    <Icons name={iconName} size='20'/>
                </div>
                <div className="BigSearch__result">
                    <div className="BigSearch__title">
                        {title}
                    </div>
                    <div className="BigSearch__subtitle">
                        {subtitle}
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default BigSearchResult;