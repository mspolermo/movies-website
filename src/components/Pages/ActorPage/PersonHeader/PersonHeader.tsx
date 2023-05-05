import React, {FC, PropsWithChildren} from 'react';
import './PersonHeader.scss'
import {useTranslation} from "react-i18next";
import {ActorPageProps} from "../../../../types/testCase";

interface PersonHeaderProps {
    'person':ActorPageProps
}

const PersonHeader: FC<PropsWithChildren<PersonHeaderProps>> = ({person}) => {
    const {t, i18n} = useTranslation();

    return (
        <div className="actorHeader">
            <div className="actorHeader__content">

                <div className="actorHeader__foto">
                    <img src={person.photo} alt=""/>
                </div>
                <div className="actorHeader__name name">
                    <div className="name__title">
                        {i18n.language === 'en' && person.nameEn ? person.nameEn : person.nameRu}
                    </div>
                    <div className="name__subtitle">
                        {i18n.language === 'en' && person.nameEn ? person.nameRu : person.nameEn}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PersonHeader;