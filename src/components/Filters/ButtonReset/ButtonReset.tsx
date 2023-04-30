import React, {FC, PropsWithChildren} from 'react';
import './buttonReset.scss'
import _ from "lodash";
import {activeFiltersProps} from "../../../types/testCase";
import Icons from "../../Icons/Icons";
import {useTranslation} from "react-i18next";

interface ResetFiltersProps {
    selectedFilters: activeFiltersProps,
    activeFilters: activeFiltersProps,
    setSelectedFilters: (activeFilters: activeFiltersProps) => void,
}

const ButtonReset: FC<PropsWithChildren<ResetFiltersProps>> = ({
                                                                   selectedFilters,
                                                                   activeFilters,
                                                                   setSelectedFilters
                                                               }) => {

    const {t, i18n} = useTranslation();
    const emptyFilters = JSON.stringify(selectedFilters) === JSON.stringify(activeFilters)

    return (
        <div className="resetFilters"
             onClick={() => setSelectedFilters(_.cloneDeep(activeFilters))}
        >
            <div className={emptyFilters ? "resetFilters__content_opacity" : "resetFilters__content"}>

                <Icons className="resetFilters__cross" name='cross' size='20'/>

                <div className="resetFilters__text">
                    {t('filters.btnReset')}
                </div>

            </div>
        </div>
    );
};

export default ButtonReset;