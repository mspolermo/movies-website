import React from 'react';

//Функция будет принимать:
// popular - список популярных фильмом/стран
// selectFilter - фильтры, выбранные пользователем
// setSelectFilter
// all - весь перечень стран/фильмов
// onClick


const FilterTwoBlocks = () => {
    return (
        <div className='filterTwoBlocks'>
            <div className="filterTwoBlocks__container">
                <div className="filterTwoBlocks__content">

                    <div className="filterTwoBlocks__carousel carousel">
                        <div className="carousel__arrow_left"></div>
                        <div className="carousel__viewport">
                            {/*list который выводит популярные*/}
                            <div key={popularkey}
                                 className={selectFilter.include(popularkey) ? 'carousel__button_gray' : 'carousel__button'}
                                 onClick={() => setSelectFilter({...selectFilter, type: popularkey})}
                            >
                                {popularkey.name}
                            </div>
                        </div>
                        <div className="carousel__arrow_right"></div>
                    </div>
                    <div className="filterTwoBlocks__list-container list-container">
                    {/*    list, который выводит весь список*/}
                        <div key={allkey}
                             className={selectFilter.include(allkey) ? 'list-container__text_white' : 'list-container__text'}
                             onClick={() => setSelectFilter({...selectFilter, type: allkey})}
                        >
                            {allkey.name}
                            <div className="list-container__checkmark"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FilterTwoBlocks;