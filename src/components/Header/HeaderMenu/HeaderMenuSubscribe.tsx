import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../types/types";
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";

const HeaderMenuSubscribe:FC<HeaderMenuProps> = ({id}) => {
    return (
        <div className="dropDownBody__subscribe dropDownBody__subscribe_hidden" id={id}>
            <div className="subscribe__column">
                <div className="subscribe__line subscribe__line_top">
                    <h2 className="subscribe__heading">Подписка Иви</h2>
                    <p className="subscribe__text subscribe__text_first">Стоимость 399 ₽ в месяц, продление автоматическое</p>
                </div>
                <div className="subscribe__line">
                    <div className="subscribe__block">
                        <Icons className="header__svg header__svg_notification" name='movie' color='gray' size='20' strokeWidth="0"/>
                        <p className="subscribe__text ">Новинки сериалов и фильмов</p>
                    </div>
                    <div className="subscribe__block subscribe__block_wide">
                        <Icons className="header__svg header__svg_notification" name='folder-plus' color='gray' size='24' strokeWidth="0"/>
                        <p className="subscribe__text">Еженедельное пополнение каталога фильмами и сериалами со всего мира</p>
                    </div>
                </div>
                <div className="subscribe__line">
                    <div className="subscribe__block">
                        <Icons className="header__svg header__svg_notification" name='mute' color='gray' size='20'/>
                        <p className="subscribe__text">Фильмы и сериалы без рекламы</p>
                    </div>
                    <div className="subscribe__block">
                        <Icons className="header__svg header__svg_notification" name='devices' color='gray' size='20'/>
                        <p className="subscribe__text">Семейный аккаунт&nbsp;на 5 устройствах</p>
                    </div>
                    <div className="subscribe__block">
                        <Icons className="header__svg header__svg_notification" name='download' color='gray' size='20' strokeWidth="3"/>
                        <p className="subscribe__text">Загрузка на мобильные устройства</p>
                    </div>
                </div>
                <div className="subscribe__line">
                    <div className="subscribe__block subscribe__block_bottom-left">
                        <Button 
                            title={['Смотреть 30 дней за 1 ₽']} 
                            color="red" type="ultraWide"
                            onClick={function() {window.location.href = 'https://www.ivi.ru/subscribe'}}
                        />
                    </div>
                    <div className="subscribe__block subscribe__block_bottom-right">
                        <p className="subscribe__text subscribe__text_additional">Отключить можно в любой&nbsp;момент</p>
                    </div> 
                    
                </div>
            </div>
            <div className="subscribe__column subscribe__column_wide"></div>
        </div>
    )
}

export default HeaderMenuSubscribe;