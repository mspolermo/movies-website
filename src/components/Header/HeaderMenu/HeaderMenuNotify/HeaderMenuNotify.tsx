import React, { FC } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuNotify.scss'
import Icons from "../../../Icons/Icons";

const HeaderMenuNotify:FC<HeaderMenuProps> = ({id}) => {
    return (
        <div className="headerMenuNotify headerMenuNotify__hidden" id={id}>
            <div className="headerMenuNotify__block">
                <Icons className="headerMenuNotify__svg" name='ring' color='#b0afb1' size='30' strokeWidth="0"/> 
                <p className="headerMenuNotify__text">Здесь появляются только важные сообщения</p>
            </div>
        </div>
    )
}

export default HeaderMenuNotify;