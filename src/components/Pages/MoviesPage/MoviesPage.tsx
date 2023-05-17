import React, {useEffect, useState} from 'react';
import Filters from "../../Filters/Filters";
import './MoviesPage.scss'
import Sorting from "../../Sorting/Sorting";
import CreateList from "../../CreateList/CreateList";
import FilmCard from "../../FilmCard/FilmCard";
import {useTranslation} from "react-i18next";
import {
    activeFilters,
    activeFiltersProps,
    arrAllFilters,
    FilmProps,
    startFiltersProps
} from "../../../types/filtersTypes";
import _ from "lodash";
import axios from "axios";
import Button from "../../UI/Buttons/Button/Button";
import {useNavigate, useParams} from "react-router-dom";
import Icons from "../../Icons/Icons";
import ButtonReset from "../../Filters/ButtonReset/ButtonReset";
import {firstCharUp, languageFilters} from "./utils";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const MoviesPage = () => {
    const {t, i18n} = useTranslation();
    const params = useParams();
    const navigate = useNavigate();
    const [movies, setMovies] = useState<FilmProps[]>([]);
    const [sortValue, setSortValue] = useState('popularity');
    const [allFilters, setAllFilters] = useState<startFiltersProps>(arrAllFilters);
    const [selectedFilters, setSelectedFilters] = useState<activeFiltersProps>(_.cloneDeep(activeFilters));
    const [oneFilters, setOneFilters] = useState<string[]>([]);
    const [limit, setLimit] = useState(35);
    const [page, setPage] = useState(1);
    const [persons, setPersons] = useState<string[]>();
    const [visible, setVisible] = useState(false);

    const emptyFilters = JSON.stringify(selectedFilters) === JSON.stringify(activeFilters)


    let sortOptions = ['popularity', 'rating', 'novelty', 'alphabet']

    useEffect(() => {
        fetchMovies()
        clearPage()
    }, [sortValue])

    useEffect(() => {
        singleFilters()
        clearPage()
        fetchMovies()
        Persons()
    }, [selectedFilters])

    useEffect(() => {
        fetchFilters()
    }, [])

    useEffect(() => {
        addFilter(allFilters)
    }, [params])

    useEffect(() => {
        singleFilters()
        breadFilter()
    }, [i18n.language])

    function singleFilters() {
        let filters: any[] = []
        if (selectedFilters.genres.length > 1 || selectedFilters.countries.length > 1) {
            setOneFilters(filters)
            return
        }
        if (selectedFilters.genres.length === 1) {
            let lang = allFilters.genres.find(genre => genre.nameRu === selectedFilters.genres[0])
            if (lang) {
                if(i18n.language === 'en'){
                    filters = filters.concat(firstCharUp(lang.nameEn))
                } else{
                    filters = filters.concat(firstCharUp(lang.nameRu))
                }
            }
        }

        if (selectedFilters.years)
            filters.push(selectedFilters.years)

        if (selectedFilters.countries.length === 1) {
            let lang = allFilters.countries.find(country => country.nameRu === selectedFilters.countries[0])
            if (lang) {
                if(i18n.language === 'en'){
                    filters = filters.concat(lang.nameEn)
                } else{
                    filters = filters.concat(lang.nameRu)
                }
            }
        }

        setOneFilters(filters)
    }

    function clearPage() {
        setPage(1)
    }

    function uploadFilms() {
        setPage(page + 1)
        fetchMovies()
    }

    function Persons() {
        let persons_ = []
        persons_.push(selectedFilters.producer)
        persons_.push(selectedFilters.actor)
        setPersons(persons_)
    }

    async function fetchMovies() {
        const response = await axios.get('http://localhost:5000/films/', {
            params: {
                perPage: limit,
                page,
                genres: selectedFilters.genres,
                countries: selectedFilters.countries,
                year: selectedFilters.years,
                // persons: persons,
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

        let filters = {
            ...allFilters,
            genres: response.data.genres,
            // @ts-ignore
            countries: response.data.countries.map((item) => {return{nameRu: item.countryName, nameEn: item.countryNameEn}}),
            years: response.data.years
        }

        setAllFilters(filters)

        addFilter(filters)
    }

    function addFilter(filters: startFiltersProps) {
        let emptyFilters = _.cloneDeep(activeFilters)

        if (params.genre){
            let genreId = filters.genres.find(genre => genre.nameRu === params.genre)
            if (genreId){
                return setSelectedFilters({...emptyFilters, genres: [genreId.nameRu]})
            }
        } else if (params.country){
            let countryId = filters.countries.find(country => country.nameRu === params.country)
            if (countryId){
                return setSelectedFilters({...emptyFilters, countries: [countryId.nameRu]})
            }
        } else if (params.year){
           return setSelectedFilters({...emptyFilters, years: Number(params.year)})
        } else {
            return setSelectedFilters(emptyFilters)
        }

    }

    function breadFilter() {
        if(selectedFilters.genres.length === 1) {
            let lang = allFilters.genres.find(genre => genre.nameRu === selectedFilters.genres[0])
            if(lang) {
                if(i18n.language === 'en'){
                    return firstCharUp(lang.nameEn)
                } else {
                    return firstCharUp(lang.nameRu)
                }

            }
        } else if (selectedFilters.countries.length === 1) {
            let lang = allFilters.countries.find(country => country.nameRu === selectedFilters.countries[0])
            if(lang) {
                if(i18n.language === 'en'){
                    return firstCharUp(lang.nameEn)
                } else {
                    return firstCharUp(lang.nameRu)
                }
            }
        } else {
            return ''
        }
    }

    function navigateBread() {
        navigate('/movies-website/films/')
        setSelectedFilters(_.cloneDeep(activeFilters))
    }

    return (
        <div className='MoviesPage'>
            <div className="MoviesPage__container container">
                <div className="MoviesPage__content">

                    <div className="MoviesPage__header">
                        <div className="MoviesPage__path">
                            <Breadcrumbs filters={breadFilter()} onClick={() => navigateBread()}/>
                        </div>
                        <div className="MoviesPage__title">
                            {t('moviesPage.title')}
                            {oneFilters.length > 0 ? (': ' + oneFilters.join(', ')) : ''}

                        </div>
                        <div className="MoviesPage__subtitle">
                            {!selectedFilters.genres.length ? (t('moviesPage.filters-genre') + ', ') : (languageFilters(selectedFilters.genres, allFilters.genres, i18n.language).join(', ') + ', ')}
                            {!selectedFilters.countries.length ? (t('moviesPage.filters-countries') + ', ') : (languageFilters(selectedFilters.countries, allFilters.countries, i18n.language).join(', ') + ', ')}
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
                                <FilmCard icons={true}
                                          film={movie}
                                          onClick={(movie) => navigate('/movies-website/film/' + movie.key)}
                                />
                            </div>
                        }/>

                    </div>

                    <div className="MoviesPage__btn">
                        <Button type={'ultraWide'} color={'transparent'}
                                title={[t('moviesPage.btn')]}
                                onClick={() => uploadFilms()}/>
                    </div>

                </div>
            </div>


            <div className="MoviesPage__mobile">
                <div className="MoviesPage__header">
                    <div className="MoviesPage__title">
                        {t('moviesPage.title')}
                        {oneFilters.length > 0 ? (': ' + oneFilters.join(', ')) : ''}
                    </div>
                    <div className="MoviesPage__subtitle">
                        {!selectedFilters.genres.length ? (t('moviesPage.filters-genre') + ', ') : (selectedFilters.genres.join(', ') + ', ')}
                        {!selectedFilters.countries.length ? (t('moviesPage.filters-countries') + ', ') : (selectedFilters.countries.join(', ') + ', ')}
                        {!selectedFilters.years ? t('moviesPage.filters-year') : selectedFilters.years}
                    </div>
                    <div className="MoviesPage__btn-filters">
                        <Button type='rounded' color='default'
                                svg={<Icons name='slider' size='24'/>}
                                title={[t('moviesPage.filters')]}
                                onClick={() => setVisible(!visible)}/>
                        {!emptyFilters && <div className="MoviesPage__btn-circle"></div>}
                    </div>
                    {visible &&
                        <div className="MoviesPage__filters">
                            <div className="MoviesPage__filters_content">
                                <div className="MoviesPage__cross"
                                     onClick={() => setVisible(!visible)}
                                >
                                    <Icons name='cross' size='20'/>
                                </div>
                                <div className="MoviesPage__filters_title">
                                    {t('moviesPage.filters')}
                                </div>
                                <Filters activeFilters={activeFilters} allFilters={allFilters} selectedFilters={selectedFilters}
                                         setSelectedFilters={setSelectedFilters}/>
                            </div>
                            <div className="MoviesPage__filters_btn">
                                <div className="MoviesPage__btn-show">
                                    <Button type='ultraWide' color='red' title={[t('moviesPage.show')]} onClick={() => setVisible(!visible)}/>
                                </div>
                                <div className="MoviesPage__btn-reset">
                                    <ButtonReset selectedFilters={selectedFilters} activeFilters={activeFilters} setSelectedFilters={setSelectedFilters}/>

                                </div>

                            </div>
                        </div>
                    }
                </div>

                <div className="MoviesPage__mobile-content">

                    <div className="MoviesPage__sorting">
                        <Sorting options={sortOptions} sortValue={sortValue} setSortValue={setSortValue}/>
                    </div>

                    <div className="MoviesPage__listMovies listMovies">
                        {!visible &&
                            <CreateList items={movies} renderItem={(movie: FilmProps) =>
                                <div className="listMovies__film-card"
                                     key={movie.key}>
                                    <FilmCard
                                        icons={true}
                                        film={movie}
                                        onClick={(movie) => navigate('/movies-website/film/' + movie.key)}
                                    />
                                </div>
                            }/>
                        }


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