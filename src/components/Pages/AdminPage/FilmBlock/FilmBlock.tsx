import React, {useEffect, useState} from 'react';
import Search from "../../../UI/Inputs/Search/Search";
import {Item, MovieProps} from "../../../../types/filtersTypes";
import Button from "../../../UI/Buttons/Button/Button";
import axios from "axios";
import RowSearchResult from "../../../Search/RowSearchResult/RowSearchResult";
import _ from 'lodash'
import './filmBlock.scss'

const Name = {
    nameRu: '',
    nameEn: ''
}

const FilmBlock = () => {
    const [film, setFilm] = useState<MovieProps>()
    const [films, setFilms] = useState<MovieProps[]>([])
    const [editName, setEdinName] = useState<Item>(_.cloneDeep(Name))
    const [searchQuery, setSearchQuery] = useState('')
    const limit = 10

    useEffect(() => {
        fetchFilm()
    }, [searchQuery])

    async function fetchFilm() {
        const response = await axios.get('http://localhost:5000/film', {
            params: {
                perPage: limit,
                search: searchQuery,
            }
        })
        // @ts-ignore
        let searchFilms = response.data.map(item => {
            return {
                key: item.id,
                nameRu: item.filmNameRu,
                nameEn: item.filmNameEn,
            }
        })

        setFilms(searchFilms)
    }

    function deleteFilm() {
        if(film){
            const response = axios.get(`http://localhost:5000/film/${film.key}`, {
                params: {
                    delete: true
                }
            })
        }
    }

    function editFilm() {
        if(film){
            const response = axios.get(`http://localhost:5000/film/${film.key}`, {
                params: {
                    nameRu: editName?.nameRu,
                    nameEn: editName?.nameEn
                }
            })
        }
    }

    function renderResult(value: MovieProps) {
        return (<RowSearchResult title={value.nameRu} key={value.key} onClick={() => setFilm(value)}/>
        )
    }

    return (
        <div className="FilmBlock">
            <div className="FilmBlock__search">
                <Search result={films}
                        renderResult={renderResult}
                        placeholder={'Начните вводить название фильма'} cl={false}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}/>
            </div>

            <div className="FilmBlock__result">
                <div className="FilmBlock__nameRu">
                    <input type="text"
                           name={film?.nameRu}
                           onChange={e => setEdinName( {...editName, nameRu: e.target.value})}
                    />
                </div>
                <div className="FilmBlock__nameEn">
                    <input type="text"
                           name={film?.nameEn}
                           onChange={e => setEdinName({...editName, nameEn: e.target.value})}
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