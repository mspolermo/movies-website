import React, {FC, PropsWithChildren} from 'react';
import './buttonResetFilters.scss'
import _ from "lodash";
import {activeFiltersProps} from "../../testCase";

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
                    <svg width="16" height="16" fill="white" stroke='white' >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>

                <div className="resetFilters__text">
                    Сбросить фильтры
                </div>

            </div>
        </div>
    );
};

export default ButtonResetFilters;