import React, {FC, PropsWithChildren} from 'react';
import './FilterButton.scss'

// filterName - название фильтра на кнопке
// selectedFiltersBy - фильтры, выбранные пользователем
// children - компонент, который выводится при нажатии
// activeBlock - нажата кнопка или нет(смена стилей, отображение блока)
// blockName - название кнопки(задаем сами, уникальное)
// setActiveBlock - задаем активный блок(передаём blockName, навешиваем на onClick)

interface FilterButtonProps {
    filterName: string;
    selectedFiltersBy: string;
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
                        <svg width="16" height="16" fill="white" stroke='white'
                             viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
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