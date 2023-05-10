import React from "react";
import { useTranslation } from "react-i18next";
import './PlayerPanel.scss'
import Icons from "../../../Icons/Icons";
import Button from "../../../UI/Buttons/Button/Button";

const PlayerPanel = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="playerPanel">

            <div className="playerPanel__desktop">
                <Button 
                    title={['filmPage.playerPanel.trailer']} 
                    svg={<Icons name="play" size="30"/>}
                />
                <Button 
                    svg={<Icons name="bookmark" size="30" className="playerPanel__svg_bookmark" strokeWidth="0"/>}
                />
                <Button 
                    svg={<Icons name="upload" size="30" className="playerPanel__svg_upload"/>}
                />
            </div>

            <div className="playerPanel__tablet">

                <Button 
                    type="ultraWide"
                    title={['filmPage.playerPanel.trailer']} 
                    svg={<Icons name="play" size="30"/>}
                />

                <div className="playerPanel__btns">

                    <div className="playerPanel__btn">
                        <Button
                            type="ultraWide"
                            svg={<Icons name="bookmark" size="30" className="playerPanel__svg_bookmark" strokeWidth="0"/>}
                        />
                    </div>

                    <div className="playerPanel__btn">
                        <Button 
                            type="ultraWide"
                            svg={<Icons name="upload" size="30" className="playerPanel__svg_upload"/>}
                        />
                    </div> 

                </div>
            </div>

            <div className="playerPanel__mobile">

                <div className="playerPanel__btn">
                    <Icons 
                        name="play"
                        size="26px"
                    />
                    <p className="playerPanel__text">{t('filmPage.playerPanel.trailer')}</p>
                </div>

                <div className="playerPanel__btn">
                    <Icons 
                        name="bookmark"
                        size="26px"
                        strokeWidth="0"
                        className="playerPanel__svg playerPanel__svg_bookmark"
                    />
                </div>

                <div className="playerPanel__btn">
                    <Icons 
                        name="upload"
                        size="26px"
                        strokeWidth="1.5"
                        className="playerPanel__svg playerPanel__svg_upload"
                    />
                </div>

            </div>

        </div>
    )
}

export default PlayerPanel;