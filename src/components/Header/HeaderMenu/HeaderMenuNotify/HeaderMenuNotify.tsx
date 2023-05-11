import React, { FC } from "react";
import { useTranslation } from 'react-i18next';
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuNotify.scss'
import Icons from "../../../Icons/Icons";

const HeaderMenuNotify:FC<HeaderMenuProps> = ({id}) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="headerMenuNotify headerMenuNotify__hidden" id={id}>
            <div className="headerMenuNotify__block">
                <Icons className="headerMenuNotify__svg" name='ring' color='#b0afb1' size='30' strokeWidth="0"/> 
                <p className="headerMenuNotify__text">{t('header.menuNotify.init')}</p>
            </div>
        </div>
    );
};

export default HeaderMenuNotify;