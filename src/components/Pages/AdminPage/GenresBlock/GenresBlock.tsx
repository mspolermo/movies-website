import React, {useEffect, useState} from 'react';
import CreateList from "../../../CreateList/CreateList";
import {Item} from "../../../../types/filtersTypes";
import Button from "../../../UI/Buttons/Button/Button";
import axios from "axios";
import Icons from "../../../Icons/Icons";
import './genresBlock.scss'
import {firstCharUp} from "../../MoviesPage/utils";

const Genre = {
    nameRu: '',
    nameEn: ''
}

const GenresBlock = () => {
    const [genres, setGenres] = useState<Item[]>([])
    const [genre, setGenre] = useState<Item>(Genre)

    useEffect(() => {
        fetchGenres()
    }, [])

    async function fetchGenres() {
        const response = await axios.get('http://localhost:5000/filters')

        // @ts-ignore
        let filters = response.data.genres.map(item => {
            return {
                nameRu: item.nameRu,
                nameEn: item.nameEn
            }
        })

        setGenres(filters)
    }

    function editGenres() {
        const response = axios.patch(`http://localhost:5000/filters/${genre?.nameEn}`, {
            params: {
                nameRu: genre?.nameRu,
                nameEn: genre?.nameEn
            }
        })
        setGenre(Genre)
    }

    return (
        <div className="GenresBlock">
            <div className="GenresBlock__genres">
                <CreateList items={genres} renderItem={(value: Item) =>
                    <div className="GenresBlock__genre genre"
                         key={value.nameEn}
                         onClick={() => setGenre(value)}
                    >
                            {firstCharUp(value.nameRu)}
                        <div className="genre__editing">
                            <Icons name='edit' size='24'/>
                        </div>
                    </div>
                }/>
            </div>
            {genre !== Genre &&
                <div className="GenresBlock__block"
                     onClick={() => setGenre(Genre)}
                >
                    <div className="GenresBlock__edit-block"
                         onClick={(event) => event.stopPropagation() }
                    >
                        <div className="GenresBlock__edit-name">
                            <div className="GenresBlock__edit-name_ru">
                                Название на русском
                                <input className='GenresBlock__edit-name_input'
                                       type="text"
                                       value={genre.nameRu}
                                       onChange={e => e.target.value}
                                />
                            </div>

                            <div className="GenresBlock__edit-name_en">
                                Название на английском
                                <input className='GenresBlock__edit-name_input'
                                       type="text"
                                       value={genre.nameEn}
                                       onChange={e => e.target.value}
                                />
                            </div>

                        </div>
                        <Button type='default'
                                color='default'
                                title={['Внести изменения']}
                                onClick={() => editGenres()}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default GenresBlock;