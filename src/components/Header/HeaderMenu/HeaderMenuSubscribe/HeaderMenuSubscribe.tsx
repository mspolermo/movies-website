import React, { FC } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuSubscribe.scss'
import Button from "../../../UI/Buttons/Button/Button";
import Icons from "../../../Icons/Icons";
import Tile from "../../../UI/Buttons/Tile/Tile";
import OpenUrl from "../../../../hooks/OpenUrl";

const HeaderMenuSubscribe:FC<HeaderMenuProps> = ({id}) => {
    return (
        <div className="headerMenuSubscribe headerMenuSubscribe__hidden" id={id}>
            <div className="headerMenuSubscribe__column">
                <div className="headerMenuSubscribe__line headerMenuSubscribe__line_top">
                    <h2 className="headerMenuSubscribe__heading">Подписка Иви</h2>
                    <p className="headerMenuSubscribe__text">Стоимость 399 ₽ в месяц, продление автоматическое</p>
                </div>
                <div className="headerMenuSubscribe__line">
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title="Новинки сериалов и фильмов"
                            svg={<Icons className="headerMenuSubscribe__svg" name='movie' color='#b0afb1' size='20' strokeWidth="0"/>}
                            hooverEffect="off"
                        />
                    </div>
                    <div className="headerMenuSubscribe__block headerMenuSubscribe__block_wide">
                        <Tile 
                            title="Еженедельное пополнение каталога фильмами и сериалами со всего мира"
                            svg={<Icons className="headerMenuSubscribe__svg" name='folder-plus' color='#b0afb1' size='24' strokeWidth="0"/>}
                            hooverEffect="off"
                        />
                    </div>
                </div>
                <div className="headerMenuSubscribe__line">
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title="Фильмы и сериалы без рекламы"
                            svg={<Icons className="headerMenuSubscribe__svg" name='mute' color='#b0afb1' size='20'/>}
                            hooverEffect="off"
                        />
                    </div>
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title="Семейный аккаунт на 5 устройствах"
                            svg={<Icons className="headerMenuSubscribe__svg" name='devices' color='#b0afb1' size='20'/>}
                            hooverEffect="off"
                        />
                    </div>
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title="Загрузка на мобильные устройства"
                            svg={<Icons className="headerMenuSubscribe__svg" name='download' color='#b0afb1' size='20' strokeWidth="3"/>}
                            hooverEffect="off"
                        />
                    </div>
                </div>
                <div className="headerMenuSubscribe__line">
                    <div className="headerMenuSubscribe__block headerMenuSubscribe__block_bottom-left">
                        <Button 
                            title={['Смотреть 30 дней за 1 ₽']} 
                            color="red" type="ultraWide"
                            onClick={() => OpenUrl('https://www.ivi.ru/subscribe')}
                        />
                    </div>
                    <div className="headerMenuSubscribe__block headerMenuSubscribe__block_bottom-right">
                        <p className="headerMenuSubscribe__text headerMenuSubscribe__text_additional">Отключить можно в любой&nbsp;момент</p>
                    </div> 
                </div>
            </div>
            <div className="headerMenuSubscribe__column headerMenuSubscribe__column_wide"></div>
        </div>
    )
}

export default HeaderMenuSubscribe;