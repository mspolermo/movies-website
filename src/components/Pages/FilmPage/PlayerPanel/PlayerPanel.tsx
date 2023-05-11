import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import './PlayerPanel.scss'
import Icons from "../../../Icons/Icons";
import Button from "../../../UI/Buttons/Button/Button";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { bookmarkFalse, bookmarkTrue } from "../../../../store/reducers/bookmarkReducer";

const PlayerPanel = () => {
    const {t, i18n} = useTranslation();

    const {value} = useTypedSelector( state => state.bookmark);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(bookmarkTrue())
    };
    const onDecrement = () => {
        dispatch(bookmarkFalse());
    };

    useEffect( () => {
        dispatch(bookmarkFalse())
    },[]);

    return (
        <div className="playerPanel">

            <div className="playerPanel__desktop">
                <Button 
                    title={['filmPage.playerPanel.trailer']} 
                    svg={<Icons name="play" size="30"/>}
                />
                { (value)
                    ?
                        <Button 
                            svg={<Icons name="bookmark-true" size="30" 
                            className="playerPanel__svg_bookmark" strokeWidth="0"/>}
                            onClick={onDecrement}
                        />
                    :
                        <Button 
                            svg={<Icons name="bookmark" size="30" 
                            className="playerPanel__svg_bookmark" strokeWidth="0"/>}
                            onClick={onIncrement}
                        />
                }
                
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
                        { (value)
                        ?
                            <Button 
                                svg={<Icons name="bookmark-true" size="30" 
                                className="playerPanel__svg_bookmark" strokeWidth="0"/>}
                                onClick={onDecrement}
                                type="ultraWide"
                            />
                        :
                            <Button 
                                svg={<Icons name="bookmark" size="30" 
                                className="playerPanel__svg_bookmark" strokeWidth="0"/>}
                                onClick={onIncrement}
                                type="ultraWide"
                            />
                        }
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
                { (value)
                        ?
                            <div className="playerPanel__btn" onClick={onDecrement}>
                                <Icons 
                                    name="bookmark-true"
                                    size="26px"
                                    strokeWidth="0"
                                    className="playerPanel__svg playerPanel__svg_bookmark"
                                />
                            </div>
                        :
                            <div className="playerPanel__btn" onClick={onIncrement}>
                                <Icons 
                                    name="bookmark"
                                    size="26px"
                                    strokeWidth="0"
                                    className="playerPanel__svg playerPanel__svg_bookmark"
                                />
                            </div>
                        }
                

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