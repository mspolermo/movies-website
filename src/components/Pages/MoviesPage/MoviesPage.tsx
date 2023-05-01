import React, {useEffect, useState} from 'react';
import Filters from "../../Filters/Filters";
import './MoviesPage.scss'
import Icons from "../../Icons/Icons";
import Sorting from "../../Sorting/Sorting";

const MoviesPage = () => {
    const [sortValue, setSortValue] = useState('popularity');

    let sortOptions = ['popularity', 'rating', 'novelty']

    // useEffect(() => {
    //     fetchMovies()
    // }, [sortValue])

    // async function fetchMovies() {
    //     movies = movies.sort(
    //         (a, b) => {
    //             if (typeof _.get(a, sortValue) === 'string') {
    //                 return _.get(a, sortValue).localeCompare(_.get(b, sortValue))
    //             }
    //             return (_.get(a, sortValue) - _.get(b, sortValue))
    //         }
    //     )
    // }

    return (
        <div className='MoviesPage'>
            <div className="MoviesPage__container">
                <div className="MoviesPage__content">

                    <div className="MoviesPage__header">
                        <div className="MoviesPage__path">
                            {/*    если есть фильтры, то делаем их ластчайлд(+ приоритет отображения фильтров)*/}
                            {/*    Компонент должен знать о выбранных фильтрах*/}
                        </div>
                        <div className="MoviesPage__title">
                            Фильмы
                            {/*    Если выбрано по одному фильтру, то добавляем в строку,
                    если больше 1 элемента хотя бы в одном фильтре, то оставляем надпись "Фильмы" */}
                        </div>
                        <div className="MoviesPage__subtitle">
                            Все жанры, Все страны, Все годы
                            {/*    Если не заданы фильтры, то строка выше, иначе все фильтры*/}
                        </div>
                    </div>

                    <div className="MoviesPage__sorting">
                        <Sorting options={sortOptions} sortValue={sortValue} setSortValue={setSortValue}/>
                    </div>
                    <div className="MoviesPage__filters">
                        <Filters/>
                    </div>
                    <div className="MoviesPage__listMovies"></div>

                </div>
            </div>
        </div>
    );
};

export default MoviesPage;