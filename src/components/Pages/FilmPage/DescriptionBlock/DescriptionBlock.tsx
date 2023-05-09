import React, { FC } from "react";
import './DescriptionBlock.scss'
import QualityTag from "../../../UI/Tags/QualityTag/QualityTag";

interface DescriptionBlockProps {
    description: string;
    filmName: string;
}

const DescriptionBlock:FC <DescriptionBlockProps> = ({description, filmName}) => {
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
            <p className="descriptionBlock__text descriptionBlock__hidden" ref={additionalText}>Приглашаем посмотреть фильм «{filmName}» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!</p> 
            
            <p className="descriptionBlock__btn descriptionBlock__btn_desktop" onClick={BlockAction} ref={openBtn} >Детали о фильме</p>
            <p className="descriptionBlock__btn descriptionBlock__btn_mobile" onClick={BlockAction} ref={openBtnMobile} >Читать дальше</p>

            <div className="descriptionBlock__desktop descriptionBlock__hidden" ref={block}>

                
                <div className="descriptionBlock__block">

                    <p className="descriptionBlock__text">Языки</p>
                    <p className="descriptionBlock__text descriptionBlock__text_active">Русский, Английский</p>

                    <p className="descriptionBlock__text">Субтитры</p>
                    <p className="descriptionBlock__text descriptionBlock__text_active">Русский, Английский</p>

                    <p className="descriptionBlock__text">
                        <span>Изображение и звук. </span>
                        <span className="descriptionBlock__text_gray">Фактическое качество зависит от устройства и ограничений правообладателя.</span>
                    </p>

                    <div className="descriptionBlock__icons">
                        <QualityTag quality="FullHD" />
                        <QualityTag quality="HD" />
                        <QualityTag quality="1080" />
                        <QualityTag quality="720" />
                    </div>
                </div>
                
                <p className="descriptionBlock__btn" onClick={BlockAction}>Свернуть детали</p>

            </div>
            
            <p className="descriptionBlock__btn descriptionBlock__btn_mobile descriptionBlock__hidden" onClick={BlockAction} ref={closeBtnMobile}>Свернуть</p>
        </div>
    )
}

export default DescriptionBlock;
