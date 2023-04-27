import React, {FC, PropsWithChildren} from 'react';
import CreateList from "../../../CreateList/CreateList";
import './FilterTwoBlocks.scss'
import Button from "../../../UI/Buttons/Button/Button";
import Icons from "../../../Icons/Icons";

//Функция будет принимать:
// popularValues - список популярных фильмом/стран
// selectedFiltersBy - фильтры, выбранные пользователем
// setSelectedFiltersBy
// listValues - весь перечень стран/фильмов
// onClick

//todo: добавить scroll к популярным

interface FilterTwoBlocksProps {
    popularValues: string[];
    allValues: string[];
    selectValues: string[];
    handleChangeFilter: (item: string) => void;
}

const FilterTwoBlocks: FC<PropsWithChildren<FilterTwoBlocksProps>> = (
    {
        popularValues,
        allValues,
        selectValues,
        handleChangeFilter,
    }
) => {

    return (
        <div>
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
                                        color={selectValues.includes(popular) ? 'purple' : 'transparent' }
                                        title={[popular]}
                                        key={popular}
                                        onClick={() => handleChangeFilter(popular)}
                                    />
                                }/>
                            </div>
                            <div className="scrollpane__arrow_right"></div>
                        </div>
                        <div className="filterTwoBlocks__list-container list-container">
                            {/*    list, который выводит весь список*/}
                            <CreateList items={allValues} renderItem={(value: string) =>
                                <div key={value}
                                     className={selectValues.includes(value) ? 'list-container__text_white' : 'list-container__text element-text'}
                                     onClick={() => handleChangeFilter(value)}
                                >
                                    {value}
                                    <div
                                        className={selectValues.includes(value) ? "element-text__checkmark_white" : 'element-text__checkmark'}>
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