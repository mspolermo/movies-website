//Функция будет принимать:
// popularValues - список популярных фильмом/стран
// allFilters - фильтры, выбранные пользователем
// setAllFilters
// listValues - весь перечень стран/фильмов
// onClick

import React, {useState} from 'react';
import FilterButton from "./FilterButton/FilterButton";
import './filters.scss';
import FilterTwoBlocks from "./FilterBlocks/FilterTwoBlocks";
import ButtonResetFilters from "./ButtonResetFilters/ButtonResetFilters";
import _ from 'lodash';
import {activeFiltersProps} from "../testCase";


// блоки для тестирования

const activeFilters = {
    'popularGenres': [],
    'genres': [],
    'countries': [],
    'years': '',
    'rating': {
        'min': 0,
        'max': 0,
    },
    'grade': {
        'min': 0,
        'max': 0,
    },
    'producer': [],
    'actor': []
}

const arrAllFilters = {
    'popularGenres': ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?',],
    'genres': ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?', 'За дверью', 'бессмысленно', 'всё, особенно', 'возглас', 'счастья', 'Только ', 'в уборную', 'и сразу же', 'возвращайся', 'О, не выходи', 'из комнаты', 'не вызывай', 'мотора'],
    'countries': ['Австралия', 'Венгрия', 'Ирландия', 'Норвегия', 'Германия', 'Венгрия', 'Ирландия', 'Норвегия', 'Германия', 'Венгрия', 'Ирландия', 'Норвегия', 'Германия'],
    'years': '',
    'rating': {
        'min': 0,
        'max': 0,
    },
    'grade': {
        'min': 0,
        'max': 0,
    },
    'producer': [],
    'actor': []
}


//основной блок
const Filters = () => {
    const [allFilters, setAllFilters] = useState<activeFiltersProps>(arrAllFilters)
    const [selectedFilters, setSelectedFilters] = useState<activeFiltersProps>(_.cloneDeep(activeFilters))
    const [activeBlock, setActiveBlock] = useState('')

    function selectedGenres(genre: string) {
        let arrGenres = selectedFilters.genres
        if (arrGenres.includes(genre)) {
            arrGenres = arrGenres.filter(genres => genres !== genre)
        } else {
            arrGenres.push(genre)
        }
        setSelectedFilters({...selectedFilters, genres: arrGenres})
    }

    function selectedCountries(country: string) {
        let arrCountries = selectedFilters.countries
        if (arrCountries.includes(country)) {
            arrCountries = arrCountries.filter(countries => countries !== country)
        } else {
            arrCountries.push(country)
        }
        setSelectedFilters({...selectedFilters, countries: arrCountries})
    }

    return (
        <div className='filters'>
            <div className="filters__content">
                <div className="filters__blocks">

                    <FilterButton filterName='Жанры'
                                  selectedFiltersBy={selectedFilters.genres.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='genre'
                                  setActiveBlock={setActiveBlock}>
                        <FilterTwoBlocks
                            popularValues={allFilters.popularGenres}
                            listValues={allFilters.genres}
                            selectedFiltersBy={selectedFilters.genres}
                            selectedFilter={selectedGenres}
                            setActiveBlock={setActiveBlock}
                        />
                    </FilterButton>

                    <FilterButton filterName='Страны'
                                  selectedFiltersBy={selectedFilters.countries.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='country'
                                  setActiveBlock={setActiveBlock}>
                        <FilterTwoBlocks
                            popularValues={allFilters.popularGenres}
                            listValues={allFilters.countries}
                            selectedFiltersBy={selectedFilters.countries}
                            selectedFilter={selectedCountries}
                            setActiveBlock={setActiveBlock}
                        />
                    </FilterButton>

                    <FilterButton filterName='Год'
                                  selectedFiltersBy={selectedFilters.years}
                                  activeBlock={activeBlock}
                                  blockName='years'
                                  setActiveBlock={setActiveBlock}/>

                    {/*<FilterButton filterName='Рейтинг'*/}
                    {/*              selectedFiltersBy={selectedFilters.rating}*/}
                    {/*              activeBlock={activeBlock}*/}
                    {/*              blockName='rating'*/}
                    {/*              setActiveBlock={setActiveBlock}/>*/}

                    {/*<FilterButton filterName='Количество оценок'*/}
                    {/*              selectedFiltersBy={selectedFilters.grade}*/}
                    {/*              activeBlock={activeBlock}*/}
                    {/*              blockName='grade'*/}
                    {/*              setActiveBlock={setActiveBlock}/>*/}

                    <FilterButton filterName='Режиссер'
                                  selectedFiltersBy={selectedFilters.producer.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='producer'
                                  setActiveBlock={setActiveBlock}/>

                    <FilterButton filterName='Актер'
                                  selectedFiltersBy={selectedFilters.actor.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='actor'
                                  setActiveBlock={setActiveBlock}/>

                    <FilterButton filterName='Актер'
                                  selectedFiltersBy={selectedFilters.actor.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='actor'
                                  setActiveBlock={setActiveBlock}/>
                </div>


                <div className="filters__button">
                    <ButtonResetFilters
                        activeFilters={activeFilters}
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}/>
                </div>
            </div>
        </div>

    );
};

export default Filters;