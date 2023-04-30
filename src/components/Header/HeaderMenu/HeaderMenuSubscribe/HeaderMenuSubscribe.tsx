import React, { FC } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuSubscribe.scss'
import Button from "../../../UI/Buttons/Button/Button";
import Icons from "../../../Icons/Icons";
import Tile from "../../../UI/Buttons/Tile/Tile";
import OpenUrl from "../../../../hooks/OpenUrl";
import { useTranslation } from 'react-i18next';

const HeaderMenuSubscribe:FC<HeaderMenuProps> = ({id}) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="headerMenuSubscribe headerMenuSubscribe__hidden" id={id}>
            <div className="headerMenuSubscribe__column">
                <div className="headerMenuSubscribe__line headerMenuSubscribe__line_top">
                    <h2 className="headerMenuSubscribe__heading">{t('header.menuSubscribe.sub')}</h2>
                    <p className="headerMenuSubscribe__text">{t('header.menuSubscribe.price')}</p>
                </div>
                <div className="headerMenuSubscribe__line">
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title={t('tile.headerMenuSubscribe.new')}
                            svg={<Icons className="headerMenuSubscribe__svg" name='movie' color='#b0afb1' size='20' strokeWidth="0"/>}
                            hooverEffect="off"
                        />
                    </div>
                    <div className="headerMenuSubscribe__block headerMenuSubscribe__block_wide">
                        <Tile 
                            title={t('tile.headerMenuSubscribe.weekly')}
                            svg={<Icons className="headerMenuSubscribe__svg" name='folder-plus' color='#b0afb1' size='24' strokeWidth="0"/>}
                            hooverEffect="off"
                        />
                    </div>
                </div>
                <div className="headerMenuSubscribe__line">
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title={t('tile.headerMenuSubscribe.adv')}
                            svg={<Icons className="headerMenuSubscribe__svg" name='mute' color='#b0afb1' size='20'/>}
                            hooverEffect="off"
                        />
                    </div>
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title={t('tile.headerMenuSubscribe.famaly')}
                            svg={<Icons className="headerMenuSubscribe__svg" name='devices' color='#b0afb1' size='20'/>}
                            hooverEffect="off"
                        />
                    </div>
                    <div className="headerMenuSubscribe__block">
                        <Tile 
                            title={t('tile.headerMenuSubscribe.mobile')}
                            svg={<Icons className="headerMenuSubscribe__svg" name='download' color='#b0afb1' size='20' strokeWidth="3"/>}
                            hooverEffect="off"
                        />
                    </div>
                </div>
                <div className="headerMenuSubscribe__line">
                    <div className="headerMenuSubscribe__block headerMenuSubscribe__block_bottom-left">
                        <Button 
                            title={['button.header.menuSubscribe.adv']} 
                            color="red" type="ultraWide"
                            onClick={() => OpenUrl('https://www.ivi.ru/subscribe')}
                        />
                    </div>
                    <div className="headerMenuSubscribe__block headerMenuSubscribe__block_bottom-right">
                        <p className="headerMenuSubscribe__text headerMenuSubscribe__text_additional">{t('header.menuSubscribe.turnOff')}&nbsp;{t('header.menuSubscribe.moment')}</p>
                    </div> 
                </div>
            </div>
            <div className="headerMenuSubscribe__column headerMenuSubscribe__column_wide"></div>
        </div>
    )
}

export default HeaderMenuSubscribe;