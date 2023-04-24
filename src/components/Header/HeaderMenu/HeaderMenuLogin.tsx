import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../types/types";
import Icons from "../../Icons/Icons";
import Button from "../../UI/Buttons/Button/Button";

const HeaderMenuLogin:FC<HeaderMenuProps> = ({id}) => {
    return (
        <div className="dropDownBody__login dropDownBody__login_hidden" id={id}>
            <div className="login__column">
                <div className="login__line">
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text ">Покупки</p>
                    </div>
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text ">Смотреть позже</p>
                    </div>
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text ">История просмотров</p>
                    </div>
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text ">Подписки</p>
                        <p className="login__text ">Подключить</p>
                    </div>
                </div>
                <div className="login__line">
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text">Активация сертификата</p>
                    </div>
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text">Вход по коду</p>
                    </div>
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text">Способы оплаты</p>
                    </div>
                    <div className="login__block">
                        <Icons className="header__svg header__svg_notification" name='notification' color='gray' size='20'/>
                        <p className="login__text">Пригласить друзей</p>
                    </div>
                </div>
            </div>
            <div className="login__column login__column_wide">
                <Button title={['Войти или зарегистрироваться']} color="red" type="ultraWide"/>
                <div>
                    <p className="login__text login__text_additional">Настройки</p>
                    <p className="login__text login__text_additional">Помощь</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenuLogin;