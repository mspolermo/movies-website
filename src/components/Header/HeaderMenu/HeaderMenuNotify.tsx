import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../types/types";
import Icons from "../../Icons/Icons";

const HeaderMenuNotify:FC<HeaderMenuProps> = ({id}) => {
    return (
        <div className="dropDownBody__notify dropDownBody__notify_hidden" id={id}>
            <div className="dropDownBody__notify-block">
                <Icons className="header__svg header__svg_notification" name='ring' color='gray' size='30' strokeWidth="0"/> 
                <p className="dropDownBody__notify-text">Здесь появляются только важные сообщения</p>
            </div>
        </div>
    )
}

export default HeaderMenuNotify;