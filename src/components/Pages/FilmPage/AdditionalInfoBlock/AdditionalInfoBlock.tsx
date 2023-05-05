import React from "react";
import './AdditionalInfoBlock.scss'
import QualityTag from "../../../UI/Tags/QualityTag/QualityTag";

const AdditionalInfoBlock = () => {
    return (
        <div className="additionalInfoBlock">
            <div className="additionalInfoBlock__line">
                <p className="additionalInfoBlock__text">Языки</p>
                <p className="additionalInfoBlock__text">Русский, Английский</p>
            </div>
            <div className="additionalInfoBlock__line additionalInfoBlock__line_additional">
                <p className="additionalInfoBlock__text">Субтитры</p>
                <p className="additionalInfoBlock__text">Русский, Английский</p>
            </div>
            <div className="additionalInfoBlock__line">
                <p className="additionalInfoBlock__text">Качество</p>
                <div className="additionalInfoBlock__icons">
                        <QualityTag quality="FullHD" />
                        <QualityTag quality="HD" />
                        <QualityTag quality="1080" />
                        <QualityTag quality="720" />
                    </div>
            </div>
        </div>
    )
}

export default AdditionalInfoBlock;