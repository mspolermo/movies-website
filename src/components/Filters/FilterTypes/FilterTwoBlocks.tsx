import React, {FC, PropsWithChildren} from 'react';
import CreateList from "../../CreateList/CreateList";
import './FilterTwoBlocks.scss'
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";

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
                                    <Button
                                        type='rounded'
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
                                        <Icons name='check' size='16'/>
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