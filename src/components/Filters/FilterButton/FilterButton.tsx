import React, {FC, PropsWithChildren} from 'react';
import './FilterButton.scss'
import Icons from "../../Icons/Icons";

// filterName - название фильтра на кнопке
// selectedFiltersBy - фильтры, выбранные пользователем
// children - компонент, который выводится при нажатии
// activeBlock - нажата кнопка или нет(смена стилей, отображение блока)
// blockName - название кнопки(задаем сами, уникальное)
// setActiveBlock - задаем активный блок(передаём blockName, навешиваем на onClick)

interface FilterButtonProps {
    filterName: string;
    selectedFiltersBy: string | number;
    activeBlock: string;
    blockName: string;
    setActiveBlock: (activeBlockName:string) => void;
}

const FilterButton: FC<PropsWithChildren<FilterButtonProps>> = (
    {
        filterName,
        selectedFiltersBy,
        activeBlock,
        blockName,
        setActiveBlock,
        children
    }
) => {

    let isActive = activeBlock === blockName

    return (
        <div className="filterButton">
            <div className="filterButton__container">
                <div className={isActive ? "filterButton__content content-active" : "filterButton__content"}
                     onClick={() => {isActive ? setActiveBlock('') : setActiveBlock(blockName)}}
                >
                    <div className="filterButton__header">
                        <div className="filterButton__title">
                            {filterName}
                        </div>
                        {selectedFiltersBy && <div className="filterButton__subtitle">
                            {selectedFiltersBy}
                        </div>}
                    </div>
                    <div className={isActive ? "filterButton__arrow_reverse" : "filterButton__arrow"
                    }>
                        <Icons name='chevron-down' size='16'/>
                    </div>
                </div>
                <div className="filterButton__menu">
                    {isActive && children}
                </div>
            </div>
        </div>
    );
};

export default FilterButton;