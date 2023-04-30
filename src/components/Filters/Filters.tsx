//Функция будет принимать:
// popularValues - список популярных фильмом/стран
// allFilters - фильтры, выбранные пользователем
// setAllFilters
// listValues - весь перечень стран/фильмов
// onClick

import React, {useState} from 'react';
import FilterButton from "./FilterButton/FilterButton";
import './filters.scss';
import FilterTwoBlocks from "./FilterTypes/FilterGenre&Countries/FilterTwoBlocks";
import ButtonReset from "./ButtonReset/ButtonReset";
import _ from 'lodash';
import {activeFiltersProps, startFiltersProps} from "../../types/testCase";
import TypeYear from "./FilterTypes/FilterYears/TypeYear";
import TypeSearch from "./FilterTypes/FilterProducer&Actor/TypeSearch";
import TypeRangeSlider from "./FilterTypes/FilterRating&Grade/TypeRangeSlider";
import {useTranslation} from "react-i18next";


// блоки для тестирования

const activeFilters = {
    'popularGenres': [],
    'genres': [],
    'countries': [],
    'years': '',
    'rating': 0,
    'grade': 0,
    'producer':'',
    'actor': ''
}

const arrAllFilters = {
    'popularGenres': ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?',],
    'genres': ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?', 'За дверью', 'бессмысленно', 'всё, особенно', 'возглас', 'счастья', 'Только ', 'в уборную', 'и сразу же', 'возвращайся', 'О, не выходи', 'из комнаты', 'не вызывай', 'мотора'],
    'countries': ['Австралия', 'Венгрия', 'Ирландия', 'Норвегия', 'Германия', 'Венгрия', 'Ирландия', 'Норвегия', 'Германия', 'Венгрия', 'Ирландия', 'Норвегия', 'Германия'],
    'years': ['до 1980', '2022 год', '2022-2023', '2000-2010'],
    'rating': 0,
    'grade': 0,
    'producer': [],
    'actor': []
}


//основной блок
const Filters = () => {
    const { t, i18n } = useTranslation();

    const [allFilters, setAllFilters] = useState<startFiltersProps>(arrAllFilters)
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

    function selectedYears(year: string) {
        if (selectedFilters.years !== year) {
            setSelectedFilters({...selectedFilters, years: year})
        }
    }

    function selectedProducer(person_producer: string) {
        if (selectedFilters.producer !== person_producer) {
            setSelectedFilters({...selectedFilters, producer: person_producer})
        }
    }

    function selectedActor(person_actor: string) {
        if (selectedFilters.actor !== person_actor) {
            setSelectedFilters({...selectedFilters, actor: person_actor})
        }
    }

    function selectedRating(rating: number) {
        if (selectedFilters.rating !== rating) {
            setSelectedFilters({...selectedFilters, rating: rating})
        }
    }

    function selectedGrade(grade: number) {
        if (selectedFilters.grade !== grade) {
            setSelectedFilters({...selectedFilters, grade: grade})
        }
    }

    return (
        <div className='filters'>
            <div className="filters__content">
                <div className="filters__blocks">

                    {activeBlock && <div className="close_block"
                                         onClick={() => setActiveBlock('')}
                    ></div>}

                    <FilterButton filterName={t('filters.filterButton.genre')}
                                  selectedFiltersBy={selectedFilters.genres.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='genre'
                                  setActiveBlock={setActiveBlock}>
                        <FilterTwoBlocks
                            popularValues={allFilters.popularGenres}
                            allValues={allFilters.genres}
                            selectValues={selectedFilters.genres}
                            handleChangeFilter={selectedGenres}
                        />
                    </FilterButton>

                    <FilterButton filterName={t('filters.filterButton.countries')}
                                  selectedFiltersBy={selectedFilters.countries.join(', ')}
                                  activeBlock={activeBlock}
                                  blockName='country'
                                  setActiveBlock={setActiveBlock}>
                        <FilterTwoBlocks
                            popularValues={allFilters.popularGenres}
                            allValues={allFilters.countries}
                            selectValues={selectedFilters.countries}
                            handleChangeFilter={selectedCountries}
                        />
                    </FilterButton>

                    <FilterButton filterName={t('filters.filterButton.years')}
                                  selectedFiltersBy={selectedFilters.years}
                                  activeBlock={activeBlock}
                                  blockName='years'
                                  setActiveBlock={setActiveBlock}>
                        <TypeYear allValues={allFilters.years}
                                  selectValues={selectedFilters.years}
                                  handleChangeFilter={selectedYears}
                                  />
                    </FilterButton>


                    <FilterButton filterName={t('filters.filterButton.rating')}
                                  selectedFiltersBy={selectedFilters.rating === 0 ? '' : selectedFilters.rating}
                                  activeBlock={activeBlock}
                                  blockName='rating'
                                  setActiveBlock={setActiveBlock}>
                        <TypeRangeSlider handleChangeFilter={selectedRating}
                                         blockName='rating'/>
                        </FilterButton>

                    <FilterButton filterName={t('filters.filterButton.grade')}
                                  selectedFiltersBy={selectedFilters.grade === 0 ? '' : selectedFilters.grade}
                                  activeBlock={activeBlock}
                                  blockName='grade'
                                  setActiveBlock={setActiveBlock}>
                        <TypeRangeSlider handleChangeFilter={selectedGrade}
                                         blockName='grade'/>
                    </FilterButton>

                    <FilterButton filterName={t('filters.filterButton.producer')}
                                  selectedFiltersBy={selectedFilters.producer}
                                  activeBlock={activeBlock}
                                  blockName='producer'
                                  setActiveBlock={setActiveBlock}>
                        <TypeSearch handleChangeFilter={selectedProducer}
                        />
                    </FilterButton>

                    <FilterButton filterName={t('filters.filterButton.actor')}
                                  selectedFiltersBy={selectedFilters.actor}
                                  activeBlock={activeBlock}
                                  blockName='actor'
                                  setActiveBlock={setActiveBlock}>
                        <TypeSearch handleChangeFilter={selectedActor}/>
                    </FilterButton>

                </div>

                <div className="filters__button">
                    <ButtonReset
                        activeFilters={activeFilters}
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}/>
                </div>
            </div>
        </div>

    );
};

export default Filters;