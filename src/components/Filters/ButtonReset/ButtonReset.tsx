import React, {FC, PropsWithChildren} from 'react';
import './buttonReset.scss'
import _ from "lodash";
import {activeFiltersProps} from "../../../types/testCase";
import Icons from "../../Icons/Icons";

interface ResetFiltersProps {
    selectedFilters: activeFiltersProps,
    activeFilters: activeFiltersProps,
    setSelectedFilters: (activeFilters: activeFiltersProps) => void,
}

const ButtonReset: FC<PropsWithChildren<ResetFiltersProps>> = ({selectedFilters, activeFilters, setSelectedFilters}) => {

    const emptyFilters = JSON.stringify(selectedFilters) === JSON.stringify(activeFilters)

    return (
        <div className="resetFilters"
             onClick={() => setSelectedFilters(_.cloneDeep(activeFilters))}
        >
            <div className={emptyFilters ? "resetFilters__content_opacity" : "resetFilters__content"}>

                <Icons className="resetFilters__cross" name='cross' size='20'/>

                <div className="resetFilters__text">
                    Сбросить фильтры
                </div>

            </div>
        </div>
    );
};

export default ButtonReset;