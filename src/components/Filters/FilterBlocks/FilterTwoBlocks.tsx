import React, {FC, PropsWithChildren} from 'react';
import CreateList from "../../CreateList/CreateList";

//Функция будет принимать:
// popularValues - список популярных фильмом/стран
// selectedFiltersBy - фильтры, выбранные пользователем
// setSelectedFiltersBy
// listValues - весь перечень стран/фильмов
// onClick

interface FilterTwoBlocksProps {
    popularValues: string[];
    listValues: string[];
    selectedFiltersBy: string[];
    selectedFilter: (item:string) => void;
}

const FilterTwoBlocks: FC<PropsWithChildren<FilterTwoBlocksProps>> = (
    {
        popularValues,
        listValues,
        selectedFiltersBy,
        selectedFilter,
    }
    ) => {


    return (
        <div className='filterTwoBlocks'>
            <div className="filterTwoBlocks__container">
                <div className="filterTwoBlocks__content">

                    <div className="filterTwoBlocks__carousel carousel">
                        <div className="carousel__arrow_left"></div>
                        <div className="carousel__viewport">
                            {/*list который выводит популярные*/}
                            <CreateList items={popularValues} renderItem={(popular:string) =>
                                <div key={popular}
                                     className={selectedFiltersBy.includes(popular) ? 'carousel__button_gray' : 'carousel__button'}
                                     onClick={() => selectedFilter(popular)}
                                >
                                    {popular}
                                </div>
                            }/>
                        </div>
                        <div className="carousel__arrow_right"></div>
                    </div>
                    <div className="filterTwoBlocks__list-container list-container">
                    {/*    list, который выводит весь список*/}
                        <CreateList items={listValues} renderItem={(value:string) =>
                            <div key={value}
                                 className={selectedFiltersBy.includes(value) ? 'list-container__text_white' : 'list-container__text'}
                                 onClick={() => selectedFilter(value)}
                            >
                                {value}
                                <div className="list-container__checkmark"></div>
                            </div>
                        }/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FilterTwoBlocks;