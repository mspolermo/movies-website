import React, {FC, PropsWithChildren} from 'react';
import CreateList from "../../../CreateList/CreateList";
import './FilterTwoBlocks.scss'
import Button from "../../../UI/Buttons/Button/Button";
import Icons from "../../../Icons/Icons";
import {Carousel} from "../../../Carousel/Carousel";
import {useTranslation} from "react-i18next";

interface Item {
    nameRu: string,
    nameEn: string
}

interface FilterTwoBlocksProps {
    popularValues: Item[];
    allValues: Item[];
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

    const { t, i18n } = useTranslation();

    function firstCharUp(str:any) {
        return str.slice(0,1).toUpperCase() + str.slice(1)
    }

    function createPopularValue() {
        return(
            <CreateList
                items={popularValues} renderItem={(popular: Item) =>
                <Button
                    type='rounded'
                    color={selectValues.includes(popular.nameRu) ? 'purple' : 'transparent' }
                    title={i18n.language === 'en' ? [firstCharUp(popular.nameEn) || firstCharUp(popular.nameRu)] : [firstCharUp(popular.nameRu)]}
                    key={popular.nameRu}
                    onClick={() => handleChangeFilter(popular.nameRu)}
                />
            }/>
        )

    }

    function createMobile() {
        return(
            <CreateList
                items={allValues} renderItem={(value: Item) =>
                <Button
                    type='rounded'
                    color={selectValues.includes(value.nameEn) ? 'purple' : 'transparent' }
                    title={i18n.language === 'en' ? [firstCharUp(value.nameEn) || firstCharUp(value.nameRu)] : [firstCharUp(value.nameRu)]}
                    key={value.nameEn}
                    onClick={() => handleChangeFilter(value.nameEn)}
                />
            }/>
        )

    }

    return (
        <div>
            <div className='filterTwoBlocks'>

                <div className="filterTwoBlocks__container">
                    <div className="filterTwoBlocks__content"
                         onClick={(e) => e.stopPropagation()}
                    >

                        <div className="filterTwoBlocks__scrollpane scrollpane">
                            <div className="scrollpane__viewport">
                                {/*list который выводит популярные*/}
                                <Carousel variant='filters' children={createPopularValue()}/>
                            </div>
                        </div>
                        <div className="filterTwoBlocks__list-container list-container">
                            {/*    list, который выводит весь список*/}
                            <CreateList items={allValues} renderItem={(value: Item) =>
                                <div key={value.nameRu}
                                     className={selectValues.includes(value.nameRu) ? 'list-container__text_white' : 'list-container__text element-text'}
                                     onClick={() => handleChangeFilter(value.nameRu)}
                                >
                                    {i18n.language === 'en' ? firstCharUp(value.nameEn) || firstCharUp(value.nameRu) : firstCharUp(value.nameRu)}
                                    <div
                                        className={selectValues.includes(value.nameRu) ? "element-text__checkmark_white" : 'element-text__checkmark'}>
                                        <Icons name='check' size='16'/>
                                    </div>
                                </div>
                            }/>
                        </div>

                    </div>
                </div>

                <div className="filterTwoBlocks__mobile">
                    <div className="filterTwoBlocks__scroll mobile-scroll">
                        <div className="mobile-scroll__viewport">
                            <Carousel variant='filters' children={createMobile()}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default FilterTwoBlocks;