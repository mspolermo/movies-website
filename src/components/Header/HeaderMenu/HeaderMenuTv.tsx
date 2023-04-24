import React, { FC } from "react";
import { HeaderMenuProps } from "../../../types/types";
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";

const HeaderMenuTv:FC<HeaderMenuProps> = ({id}) => {
    return(
        <div className="dropDownBody__TV dropDownBody__TV_hidden" id={id}>
            <div className="dropDownBody__block dropDownBody__block_tv">
                <div className="dropDownBody__column">
                    <h3 className="dropDownBody__list-head">ТВ онлайн</h3>
                    <ul className="dropDownBody__list">
                        <div className="dropDownBody__list-column">
                            <a href="https://www.ivi.ru/tvplus/tvchannels" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">ТВ-каналы</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/razvlekatelnoe" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Развлекательное</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/deti" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Дети</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/sport" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Спортивное ТВ</p>
                            </a>
                            <a href="https://www.ivi.ru/tvplus/documentalnoe" className="dropDownBody__list-link">
                                <p className="dropDownBody__list-item">Документальное</p>
                            </a>
                        </div>
                    </ul>
                    
                </div>
                <div className="dropDownBody__column">
                    <Button 
                        title={['Телепрограмма']}
                        onClick={function() {window.location.href = 'https://www.ivi.ru/tvplus/tv-schedule-today'}}
                    />    
                </div>
            </div>
            <div className="dropDownBody__block dropDownBody__block_slider">
                <div className="dropDownBody__slider">
                    <h3 className="dropDownBody__list-head">Федеральные каналы</h3>
                    <div></div>
                </div>
                <div className="dropDownBody__slider">
                    <h3 className="dropDownBody__list-head">Спортивные каналы</h3>
                    <div></div>
                </div>
            </div>
            <div className="dropDownBody__block dropDownBody__block_subscribe">
                <div className="dropDownBody__adv">
                    <h4>Подписка Ivi</h4>   
                </div>
                <Button 
                    svg={<Icons name='smartTV' color='#fff' size='20'/>}
                    title={['Смотрите на Smart TV']}
                    onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                />
            </div>
        </div>
    );
}

export default HeaderMenuTv;