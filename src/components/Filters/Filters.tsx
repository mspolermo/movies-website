//Функция будет принимать:
// popularValues - список популярных фильмом/стран
// allFilters - фильтры, выбранные пользователем
// setAllFilters
// listValues - весь перечень стран/фильмов
// onClick

import React, {useState} from 'react';
import FilterButton from "./FilterButton/FilterButton";
import './FilterButton/FilterButton.scss'
import FilterTwoBlocks from "./FilterBlocks/FilterTwoBlocks";


// блоки для тестирования
interface activeFiltersProps {
    'genres': string[],
    'popularGenres': string[],
    'countries': string[],
    'years': string,
    'rating': {
        'min': number,
        'max': number,
    },
    'grade': {
        'min': number,
        'max': number,
    },
    'producer': string[],
    'actor': string[]
}

const activeFilters = {
    'popularGenres': [],
    'genres': ['Крик', 'Души', 'Уставших', 'Морально', 'От', 'Жизни', 'Людей'],
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
    'popularGenres': ['Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография'],
    'genres': ['Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография', 'Боевики', 'Фэнтези', 'Артхаус', 'Биография', 'Боевики', 'Фэнтези'],
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
    const [selectedFilters, setSelectedFilters] = useState<activeFiltersProps>(activeFilters)
    const [activeBlock, setActiveBlock] = useState('')

    function selectedGenres(genre: string) {
        let arrGenres = selectedFilters.genres
        if (arrGenres.includes(genre)) {
            arrGenres.filter(genres => genres !== genre)
        } else {
            arrGenres.push(genre)
        }
        setSelectedFilters({...selectedFilters, genres: arrGenres})
    }

    return (
        <div className='filters'>
            <FilterButton filterName='Жанры'
                          selectedFiltersBy={selectedFilters.genres.join(', ')}
                          activeBlock={activeBlock}
                          blockName='genre'
                          setActiveBlock={setActiveBlock}>
                <FilterTwoBlocks
                    popularValues={allFilters.popularGenres}
                    listValues={allFilters.genres}
                    selectedFiltersBy={selectedFilters.genres}
                    selectedFilter={selectedGenres}/>
            </FilterButton>

            <FilterButton filterName='Страны'
                          selectedFiltersBy={selectedFilters.countries.join(', ')}
                          activeBlock={activeBlock}
                          blockName='country'
                          setActiveBlock={setActiveBlock}>
                <FilterTwoBlocks
                    popularValues={allFilters.popularGenres}
                    listValues={allFilters.genres}
                    selectedFiltersBy={selectedFilters.genres}
                    selectedFilter={selectedGenres}/>
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
        </div>
    );
};

export default Filters;