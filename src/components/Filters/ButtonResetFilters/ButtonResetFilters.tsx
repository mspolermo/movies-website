import React, {FC, PropsWithChildren} from 'react';
import './buttonResetFilters.scss'
import _ from "lodash";
import {activeFiltersProps} from "../../testCase";
import Icons from "../../Icons/Icons";

interface ResetFiltersProps {
    selectedFilters: activeFiltersProps,
    activeFilters: activeFiltersProps,
    setSelectedFilters: (activeFilters: activeFiltersProps) => void,
}

const ButtonResetFilters: FC<PropsWithChildren<ResetFiltersProps>> = ({selectedFilters, activeFilters, setSelectedFilters}) => {

    const emptyFilters = JSON.stringify(selectedFilters) === JSON.stringify(activeFilters)

    return (
        <div className="resetFilters"
             onClick={() => setSelectedFilters(_.cloneDeep(activeFilters))}
        >
            <div className={emptyFilters ? "resetFilters__content_opacity" : "resetFilters__content"}>


                <div className="resetFilters__cross">
                    <Icons name='cross' size='16'/>
                </div>

                <div className="resetFilters__text">
                    Сбросить фильтры
                </div>

            </div>
        </div>
    );
};

export default ButtonResetFilters;