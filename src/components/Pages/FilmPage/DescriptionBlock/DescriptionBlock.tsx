import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import './DescriptionBlock.scss';
import { DescriptionBlockProps } from "../../../../types/filmPageTypes";
import QualityTag from "../../../UI/Tags/QualityTag/QualityTag";

const DescriptionBlock:FC <DescriptionBlockProps> = ({description, filmName}) => {

    const {t, i18n} = useTranslation();

    const text = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const additionalText = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const block = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const openBtn = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const openBtnMobile = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const closeBtnMobile = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    function BlockAction() {
        text.current.classList.toggle('descriptionBlock__short');
        additionalText.current.classList.toggle('descriptionBlock__hidden');
        block.current.classList.toggle('descriptionBlock__hidden');
        openBtn.current.classList.toggle('descriptionBlock__hidden');
        openBtnMobile.current.classList.toggle('descriptionBlock__hidden')
        closeBtnMobile.current.classList.toggle('descriptionBlock__hidden')
    }

    return (
        <div className="descriptionBlock">

            <p className="descriptionBlock__text descriptionBlock__short" ref={text}>{description}</p>
            <p className="descriptionBlock__text descriptionBlock__hidden" ref={additionalText}>{t('filmPage.descriptionBlock.invite')} «{filmName}» {t('filmPage.descriptionBlock.inviteAdd')}</p> 
            
            <p className="descriptionBlock__btn descriptionBlock__btn_desktop" onClick={BlockAction} ref={openBtn}>{t('filmPage.descriptionBlock.details')}</p>
            <p className="descriptionBlock__btn descriptionBlock__btn_mobile" onClick={BlockAction} ref={openBtnMobile}>{t('filmPage.descriptionBlock.read')}</p>

            <div className="descriptionBlock__desktop descriptionBlock__hidden" ref={block}>

                
                <div className="descriptionBlock__block">

                    <p className="descriptionBlock__text">{t('filmPage.descriptionBlock.lang')}</p>
                    <p className="descriptionBlock__text descriptionBlock__text_active">{t('filmPage.descriptionBlock.langs')}</p>

                    <p className="descriptionBlock__text">{t('filmPage.descriptionBlock.sub')}</p>
                    <p className="descriptionBlock__text descriptionBlock__text_active">{t('filmPage.descriptionBlock.langs')}</p>

                    <p className="descriptionBlock__text">
                        <span>{t('filmPage.descriptionBlock.img')} </span>
                        <span className="descriptionBlock__text_gray">{t('filmPage.descriptionBlock.info')}</span>
                    </p>

                    <div className="descriptionBlock__icons">
                        <QualityTag quality="FullHD" />
                        <QualityTag quality="HD" />
                        <QualityTag quality="1080" />
                        <QualityTag quality="720" />
                    </div>
                </div>
                
                <p className="descriptionBlock__btn" onClick={BlockAction}>{t('filmPage.descriptionBlock.minDetails')}</p>

            </div>
            
            <p className="descriptionBlock__btn descriptionBlock__btn_mobile descriptionBlock__hidden" onClick={BlockAction} ref={closeBtnMobile}>{t('filmPage.descriptionBlock.min')}</p>
        </div>
    );
};

export default DescriptionBlock;
