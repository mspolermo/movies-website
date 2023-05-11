import React from "react";
import { useTranslation } from "react-i18next";
import './AdditionalInfoBlock.scss'
import QualityTag from "../../../UI/Tags/QualityTag/QualityTag";

const AdditionalInfoBlock = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="additionalInfoBlock">
            <div className="additionalInfoBlock__line">
                <p className="additionalInfoBlock__text">{t('filmPage.additionalInfoBlock.lang')}</p>
                <p className="additionalInfoBlock__text">{t('filmPage.additionalInfoBlock.langs')}</p>
            </div>
            <div className="additionalInfoBlock__line additionalInfoBlock__line_additional">
                <p className="additionalInfoBlock__text">{t('filmPage.additionalInfoBlock.sub')}</p>
                <p className="additionalInfoBlock__text">{t('filmPage.additionalInfoBlock.langs')}</p>
            </div>
            <div className="additionalInfoBlock__line">
                <p className="additionalInfoBlock__text">{t('filmPage.additionalInfoBlock.qality')}</p>
                <div className="additionalInfoBlock__icons">
                    <QualityTag quality="FullHD" />
                    <QualityTag quality="HD" />
                    <QualityTag quality="1080" />
                    <QualityTag quality="720" />
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfoBlock;