import React, {FC, PropsWithChildren} from 'react';
import CreateList from "../../CreateList/CreateList";
import './FilterTwoBlocks.scss'
import ButtonWithIcon from "../../UI/Buttons/Button/Button";

//Функция будет принимать:
// popularValues - список популярных фильмом/стран
// selectedFiltersBy - фильтры, выбранные пользователем
// setSelectedFiltersBy
// listValues - весь перечень стран/фильмов
// onClick

//todo: добавить scroll к популярным

interface FilterTwoBlocksProps {
    popularValues: string[];
    listValues: string[];
    selectedFiltersBy: string[];
    selectedFilter: (item: string) => void;
    setActiveBlock: (item: string) => void;
}

const FilterTwoBlocks: FC<PropsWithChildren<FilterTwoBlocksProps>> = (
    {
        popularValues,
        listValues,
        selectedFiltersBy,
        selectedFilter,
        setActiveBlock,
    }
) => {

    return (
        <div>
            <div className="close_block"
                 onClick={() => setActiveBlock('')}
            ></div>
            <div className='filterTwoBlocks'>
                <div className="filterTwoBlocks__container">
                    <div className="filterTwoBlocks__content"
                         onClick={(e) => e.stopPropagation()}
                    >

                        <div className="filterTwoBlocks__scrollpane scrollpane">
                            <div className="scrollpane__arrow_left"></div>
                            <div className="scrollpane__viewport">
                                {/*list который выводит популярные*/}
                                <CreateList
                                    items={popularValues} renderItem={(popular: string) =>
                                    <ButtonWithIcon
                                        type='default'
                                        color={selectedFiltersBy.includes(popular) ? 'purple' : 'transparent' }
                                        title={[popular]}
                                        onClick={() => selectedFilter(popular)}
                                    />
                                }/>
                            </div>
                            <div className="scrollpane__arrow_right"></div>
                        </div>
                        <div className="filterTwoBlocks__list-container list-container">
                            {/*    list, который выводит весь список*/}
                            <CreateList items={listValues} renderItem={(value: string) =>
                                <div key={value}
                                     className={selectedFiltersBy.includes(value) ? 'list-container__text_white' : 'list-container__text element-text'}
                                     onClick={() => selectedFilter(value)}
                                >
                                    {value}
                                    <div
                                        className={selectedFiltersBy.includes(value) ? "element-text__checkmark_white" : 'element-text__checkmark'}>
                                        <svg width="16" height="16" fill="white" stroke='white' viewBox='0 0 16 16'>
                                            <path
                                                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                        </svg>
                                    </div>
                                </div>
                            }/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default FilterTwoBlocks;