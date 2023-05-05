import React, {useEffect, useState} from 'react';
import Filters from "../../Filters/Filters";
import './MoviesPage.scss'
import Sorting from "../../Sorting/Sorting";
import CreateList from "../../CreateList/CreateList";
import FilmCard from "../../FilmCard/FilmCard";
import {useTranslation} from "react-i18next";
import {activeFiltersProps, FilmProps, startFiltersProps} from "../../../types/testCase";
import _ from "lodash";
import axios from "axios";
import Button from "../../UI/Buttons/Button/Button";
import {useNavigate} from "react-router-dom";

const activeFilters = {
    'popularGenres': [],
    'genres': [],
    'popularCountries': [],
    'countries': [],
    'years': 0,
    'rating': 0,
    'grade': 0,
    'producer': '',
    'actor': ''
}

const arrAllFilters = {
    'popularGenres': [
        {
            'nameRu': 'драма',
            'nameEn': 'drama'
        },
        {
            'nameRu': 'боевик',
            'nameEn': 'action'
        },
        {
            'nameRu': 'триллер',
            'nameEn': 'thriller'
        },
        {
            'nameRu': 'криминал',
            'nameEn': 'crime'
        },
        {
            'nameRu': 'комедия',
            'nameEn': 'comedy'
        },
        {
            'nameRu': 'фантастика',
            'nameEn': 'fantastic'
        },
        {
            'nameRu': 'приключения',
            'nameEn': 'adventures'
        },
        {
            'nameRu': 'семейный',
            'nameEn': 'family'
        },
        {
            'nameRu': 'аниме',
            'nameEn': 'anime'
        },
        {
            'nameRu': 'фэнтези',
            'nameEn': 'fantasy'
        }
    ],
    'genres': [
        {
            'nameRu': '',
            'nameEn': ''
        }
    ],
    'popularCountries': [
        {
            'nameRu': 'Россия',
            'nameEn': ''
        },
        {
            'nameRu': 'США',
            'nameEn': ''
        },
        {
            'nameRu': 'Германия',
            'nameEn': ''
        },
        {
            'nameRu': 'Великобритания',
            'nameEn': ''
        },
        {
            'nameRu': 'Япония',
            'nameEn': ''
        },
        {
            'nameRu': 'Китай',
            'nameEn': ''
        },
        {
            'nameRu': 'Корея Южная',
            'nameEn': ''
        },
        {
            'nameRu': 'Индия',
            'nameEn': ''
        },
        {
            'nameRu': 'СССР',
            'nameEn': ''
        },
        {
            'nameRu': 'Франция',
            'nameEn': ''
        }
    ],
    'countries': [
        {
            'nameRu': '',
            'nameEn': ''
        }
    ],
    'years': [],
    'rating': 0,
    'grade': 0,
    'producer': '',
    'actor': ''
}

const MoviesPage = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate()
    const [movies, setMovies] = useState<FilmProps[]>([])
    const [sortValue, setSortValue] = useState('popularity');
    const [allFilters, setAllFilters] = useState<startFiltersProps>(arrAllFilters)
    const [selectedFilters, setSelectedFilters] = useState<activeFiltersProps>(_.cloneDeep(activeFilters))
    const [oneFilters, setOneFilters] = useState<string[]>([])
    const [limit, setLimit] = useState(35);
    const [page, setPage] = useState(1);

    let sortOptions = ['popularity', 'rating', 'novelty']

    useEffect(() => {
        fetchMovies()
        singleFilters()
    }, [sortValue, page])

    useEffect(() => {
        singleFilters()
        clearPage()
        fetchMovies()
    }, [selectedFilters])

    useEffect(() => {
        fetchFilters()
    }, [])

    function singleFilters() {
        let filters: any[] = []
        if (selectedFilters.genres.length > 1 || selectedFilters.countries.length > 1) {
            setOneFilters(filters)
            return
        }
        if (selectedFilters.genres.length === 1)
            filters = filters.concat(selectedFilters.genres)
        if (selectedFilters.years)
            filters.push(selectedFilters.years)
        if (selectedFilters.countries.length === 1)
            filters = filters.concat(selectedFilters.countries)

        setOneFilters(filters)
    }

    function clearPage() {
        setPage(1)
    }

    function uploadFilms() {
        setPage(page + 1)
    }

    async function fetchMovies() {

        const response = await axios.get('http://localhost:5000/films/', {
            params: {
                perPage: limit,
                page,
                genres: selectedFilters.genres,
                countries: selectedFilters.countries,
                // persons: [selectedFilters.actor, selectedFilters.producer],
                minRatingKp: selectedFilters.rating,
                minVotesKp: selectedFilters.grade,
                sortBy: sortValue,
            }
        })

        // @ts-ignore
        const movies_ = response.data.map(item => {
            return {
                key: item.id,
                nameRu: item.filmNameRu,
                nameEn: item.filmNameEn,
                year: item.year,
                poster: item.smallPictureUrl,
                rating: item.ratingKp,
                filmLength: item.movieLength,
                countryRu: '',
                countryEn: '',
                genreRu: '',
                genreEn: '',
            }

        })

        if (page === 1) {
            setMovies(movies_)
        } else {
            setMovies([...movies, ...movies_])
        }
    }

    async function fetchFilters() {
        const response = await axios.get('http://localhost:5000/filters')



        setAllFilters({
            ...allFilters,
            genres: response.data.genres,
            // @ts-ignore
            countries: response.data.countries.map((item) => {return{nameRu: item.countryName}}),
            years: response.data.years
        })
    }

    return (
        <div className='MoviesPage'>
            <div className="MoviesPage__container">
                <div className="MoviesPage__content">

                    <div className="MoviesPage__header">
                        <div className="MoviesPage__path">
                            {/*    хлебные крошки(только жанры)*/}
                        </div>
                        <div className="MoviesPage__title">
                            {t('moviesPage.title')}
                            {oneFilters.length > 0 ? (': ' + oneFilters.join(', ')) : ''}

                        </div>
                        <div className="MoviesPage__subtitle">
                            {!selectedFilters.genres.length ? (t('moviesPage.filters-genre') + ', ') : (selectedFilters.genres.join(', ') + ', ')}
                            {!selectedFilters.countries.length ? (t('moviesPage.filters-countries') + ', ') : (selectedFilters.countries.join(', ') + ', ')}
                            {!selectedFilters.years ? t('moviesPage.filters-year') : selectedFilters.years}
                        </div>
                    </div>

                    <div className="MoviesPage__sorting">
                        <Sorting options={sortOptions} sortValue={sortValue} setSortValue={setSortValue}/>
                    </div>
                    <div className="MoviesPage__filters">
                        <Filters activeFilters={activeFilters} allFilters={allFilters} selectedFilters={selectedFilters}
                                 setSelectedFilters={setSelectedFilters}/>
                    </div>
                    <div className="MoviesPage__listMovies listMovies">
                        <CreateList items={movies} renderItem={(movie: FilmProps) =>
                            <div className="listMovies__film-card"
                                 key={movie.key}>
                                {/*todo: как будет готов эндпоинт с фильмами, проставить корректый navigate*/}
                                <FilmCard
                                          film={movie}
                                          onClick={(movie) => navigate('/movies-website/film/' + movie.key)}
                                />
                            </div>
                        }/>

                    </div>

                    <Button type={'ultraWide'} color={'transparent'}
                            title={[t('moviesPage.btn')]}
                            onClick={() => uploadFilms()}/>

                </div>
            </div>
        </div>
    );
};

export default MoviesPage;