import React, {useEffect, useState} from 'react';
import CreateList from "../../CreateList/CreateList";
import {Item, MovieProps} from "../../../types/filtersTypes";
import axios from "axios/index";
import Search from "../../UI/Inputs/Search/Search";
import RowSearchResult from "../../Search/RowSearchResult/RowSearchResult";
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";

const AdminPage = () => {
    const [genres, setGenres] = useState<Item[]>([])
    const [genre, setGenre] = useState<Item>()
    const [film, setFilm] = useState<MovieProps>()
    const [films, setFilms] = useState<MovieProps[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [filmGenre, setFilmGenre] = useState([''])
    const limit = 10

    useEffect(() => {
        fetchGenres()
    }, [])

    useEffect(() => {
        fetchGenres()
    }, [genres])

    async function fetchGenres() {
        const response = await axios.get('http://localhost:5000/filters')

        let filters = {
            genres: response.data.genres
        }

        setGenres(filters)
    }

    async function fetchFilm() {
        const response = await axios.get('http://localhost:5000/film', {
            params: {
                perPage: limit,
                search: searchQuery,
                delete: delet
            }
        })

        let film = {
            genres: response.data.genres
        }
        let genres = {
            nameRu: ,
            nameEn:
        }

        setFilms(film)
        setFilmGenre(genres)
    }

    function renderResult(value: MovieProps) {
        return (<RowSearchResult title={value.nameRu} key={value.key} onClick={() => setFilm(value)}/>
        )
    }

    function changeGenres(genre: string) {
        if (filmGenre.includes(genre)) {
            let genresNew = filmGenre.filter(genres => genres !== genre)
            setFilmGenre(genresNew)
        } else {
            let genresNew = filmGenre
            genresNew.push(genre)
            setFilmGenre(genresNew)
        }
    }

    return (
        <div className="AdminPage">
            <div className="AdminPage__container container">
                <div className="AdminPage__content">

                     <div className="AdminPage__films films-block">
                        <div className="films-block__search">
                            <Search result={films}
                                    renderResult={renderResult}
                                    placeholder={'Начните вводить название фильма'} cl={false}
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}/>
                        </div>

                        <div className="films-block__result">
                            <div className="films-block__nameRu">
                                <input type="text"
                                       name={film?.nameRu}
                                       onChange={e => e.target.value}
                                />
                            </div>
                            <div className="films-block__nameEn">
                                <input type="text"
                                       name={film?.nameEn}
                                       onChange={e => e.target.value}
                                />
                            </div>
                        </div>

                        <div className="films-block__genres">
                            <CreateList items={genres} renderItem={(genre: Item) =>
                                <div className="films-block__genre"
                                     key={genre.nameEn}
                                >
                                    <input type='checkbox'
                                           name={genre.nameRu}
                                           checked={filmGenre.includes(genre.nameEn)}
                                           onChange={changeGenres(genre.nameEn)}
                                    />
                                </div>
                            }/>
                        </div>

                        <div className="films-block__change">
                            <Button type='default' color='default' title={['Сохранить изменения']} onClick={}/>
                        </div>
                        <div className="films-block__delete">
                            <Button type='default' color='default' title={['Удалить фильм']} onClick={}/>
                        </div>

                    </div>

                    <div className="AdminPage__genres genres">
                        <div className="genres__result">
                            <CreateList items={genres} renderItem={(genre: Item) =>
                                <div className="genres__genre"
                                     key={genre.nameEn}
                                >
                                    <input type='checkbox'
                                           name={genre.nameRu}
                                           checked={filmGenre.includes(genre.nameEn)}
                                           onChange={changeGenres(genre.nameEn)}
                                    />
                                    <div className="genres__editing">
                                        <Button type='default'
                                                color='default'
                                                svg={<Icons name='edit' size='24'/>}
                                                onClick={() => setGenre(genre)}/>
                                    </div>
                                </div>
                            }/>
                        </div>
                        {genre &&
                            <div className="genres__edit-block">
                                <input type="text"
                                       name={genre.nameRu}
                                       onChange={e => e.target.value}
                                />
                                <input type="text"
                                       name={genre.nameRu}
                                       onChange={e => e.target.value}
                                />
                            </div>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminPage;