import React, {useEffect, useState} from 'react';
import Search from "../../../UI/Inputs/Search/Search";
import {Item, MovieProps, MovieSearchProps} from "../../../../types/filtersTypes";
import Button from "../../../UI/Buttons/Button/Button";
import axios from "axios";
import RowSearchResult from "../../../Search/RowSearchResult/RowSearchResult";
import './filmBlock.scss'
import {useTranslation} from "react-i18next";

const Name = {
    nameRu: '',
    nameEn: '',
    key: 0
}

const FilmBlock = () => {
    const [film, setFilm] = useState<MovieSearchProps>(Name)
    const [films, setFilms] = useState<MovieProps[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const {t, i18n} = useTranslation();

    useEffect(() => {
        fetchFilm()
    }, [searchQuery])

    useEffect(() => {
        fetchFilm()
    }, [])

    useEffect(() => {
        if(film) {
            inputName(film.nameEn)
            inputName(film.nameRu)
        }
    }, [film])

    async function fetchFilm() {
        const response = await axios.get('http://localhost:5000/search', {
            params: {
                name: searchQuery,
            }
        })

        let films = response.data.films
        // @ts-ignore
        let searchFilms = films.map(item => {
            return {
                key: item.id,
                nameRu: item.nameRu,
                nameEn: item.nameEn,
            }
        })

        setFilms(searchFilms)
    }

    function deleteFilm() {
        if(film){
            const response = axios.delete(`http://localhost:5000/film/${film.key}`)
        }
    }

    function editFilm() {
        if(film){
            const response = axios.patch(`http://localhost:5000/film/${film.key}`, {
                params: {
                    filmNameRu: film?.nameRu,
                    filmNameEn: film?.nameEn
                }
            })
        }
    }

    function titleLang(film: MovieSearchProps) {
        if(i18n.language === 'en' && film.nameEn){
            return film.nameEn
        } else {
            return film.nameRu
        }
    }

    function actionSearch(value:MovieSearchProps) {
        setFilm(value)
        setSearchQuery('')
    }

    function renderResult(value: MovieProps) {
        if(searchQuery){
            return (<RowSearchResult title={titleLang(value)} key={value.key} onClick={() => actionSearch(value)}/>
            )
        }
    }

    function inputName(value: string) {
        if(film){
           return value
        }
    }

    return (
        <div className="FilmBlock">
            <div className="FilmBlock__search">
                <Search result={films}
                        renderResult={renderResult}
                        placeholder={'Начните вводить название фильма'} cl={false}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        search={true}
                />
            </div>

            <div className="FilmBlock__result">
                <div className="FilmBlock__nameRu">
                    <input className="FilmBlock__nameRu_input"
                           type="text"
                           value={film ? inputName(film.nameRu) : ''}
                           onChange={e => setFilm( {...film, nameRu: e.target.value})}
                    />
                </div>
                <div className="FilmBlock__nameEn">
                    <input className="FilmBlock__nameEn_input"
                           type="text"
                           value={film ? inputName(film.nameEn) : ''}
                           onChange={e => setFilm({...film, nameEn: e.target.value})}
                    />
                </div>
            </div>

            <div className="FilmBlock__change">
                <Button type='default'
                        color='default'
                        title={['Сохранить изменения']}
                        onClick={() => editFilm()}/>
            </div>
            <div className="FilmBlock__delete">
                <Button type='default'
                        color='default'
                        title={['Удалить фильм']}
                        onClick={() => deleteFilm()}/>
            </div>

        </div>
    );
};

export default FilmBlock;