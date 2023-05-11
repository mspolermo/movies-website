import React, {FC, PropsWithChildren} from 'react';
import './buttonReset.scss'
import _ from "lodash";
import {activeFiltersProps, startFiltersProps} from "../../../types/filtersTypes";
import Icons from "../../Icons/Icons";
import {useTranslation} from "react-i18next";
import Button from "../../UI/Buttons/Button/Button";
import {useNavigate} from "react-router-dom";

interface ResetFiltersProps {
    selectedFilters: activeFiltersProps,
    activeFilters: activeFiltersProps,
    setSelectedFilters: (activeFilters: activeFiltersProps) => void,
}

const ButtonReset: FC<PropsWithChildren<ResetFiltersProps>> = ({
                                                                   selectedFilters,
                                                                   activeFilters,
                                                                   setSelectedFilters,
                                                               }) => {

    const {t, i18n} = useTranslation();
    const emptyFilters = JSON.stringify(selectedFilters) === JSON.stringify(activeFilters)
    const navigate = useNavigate()

    function handle() {
        setSelectedFilters(_.cloneDeep(activeFilters))
        navigate('/movies-website/films/')
    }

    return (
        <div>
            <div className="resetFilters"
                 onClick={() => handle()}
            >
                <div className={emptyFilters ? "resetFilters__content_opacity" : "resetFilters__content"}>

                    <Icons className="resetFilters__cross" name='cross' size='20'/>

                    <div className="resetFilters__text">
                        {t('filters.btnReset')}
                    </div>

                </div>
            </div>

            <div className="resetMobile"
                 onClick={() => handle()}
            >
                <Button type='ultraWide' color='transparent' title={[t('moviesPage.reset')]}/>

            </div>
        </div>

    );
};

export default ButtonReset;