import React from "react";
import './PlayerPanel.scss'
import Icons from "../../../Icons/Icons";

const PlayerPanel = () => {
    return (
        <div className="playerPanel">
            <div className="playerPanel__btn">
                <Icons 
                    name="play"
                    size="26px"
                />
                <p className="playerPanel__text">Трейлер</p>
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
    )
}

export default PlayerPanel;