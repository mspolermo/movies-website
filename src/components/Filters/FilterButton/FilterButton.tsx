import React, {FC, PropsWithChildren, useState} from 'react';

// titleButton - название фильтра кнопки
// selectFilter - фильтры, выбранные пользователем
// filterBlock - компонент
// active - нажата кнопка или нет(смена стилей, отображение блока)
// blockName - название кнопки(задаем сами, уникальное)
// setActiveBlockName - задаем активный блок(передаём blockName, навешиваем на onClick)

interface FilterButtonProps {
    titleButton: string;
    selectFilter: string[];
    filterBlock?: string;
    active: boolean;
    blockName: string;
    setActiveBlockName: () => void;
}

const FilterButton: FC<PropsWithChildren<FilterButtonProps>> = ({titleButton, selectFilter, filterBlock, active, blockName, setActiveBlockName}) => {

    return (
        <div className="filterButton">
            <div className="filterButton_container">
                <div className="filterButton__content"
                     blockName={blockName}
                     onClick={() => {active ? setActiveBlockName(blockName) : setActiveBlockName('')}}
                >
                    <div className="filterButton__header">
                        <div className="filterButton__title">
                            {titleButton}
                        </div>
                        <div className="filterButton__subtitle">
                            {selectFilter.join(', ')}
                        </div>
                    </div>
                    <div className={active ? "filterButton__arrow_reverse" : "filterButton__arrow"
                    }>
                        <svg></svg>
                    </div>
                </div>
                <div className="filterButton__menu">
                    {active ? filterBlock : ''}
                </div>
            </div>
        </div>
    );
};

export default FilterButton;