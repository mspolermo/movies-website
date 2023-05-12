import React, {useEffect, useState} from 'react';
import CreateList from "../../../CreateList/CreateList";
import {Item} from "../../../../types/filtersTypes";
import Button from "../../../UI/Buttons/Button/Button";
import axios from "axios";
import Icons from "../../../Icons/Icons";

const Genre = {
    nameRu: '',
    nameEn: ''
}

const GenresBlock = () => {
    const [genres, setGenres] = useState<Item[]>([])
    const [genre, setGenre] = useState<Item>()

    useEffect(() => {
        fetchGenres()
    }, [])

    async function fetchGenres() {
        const response = await axios.get('http://localhost:5000/filters')

        // @ts-ignore
        let filters = response.data.genres.map(item => {
            return {
                nameRu: response.data.genres.nameRu,
                nameEn: response.data.genres.nameEn
            }
        })

        setGenres(filters)
    }

    function editGenres() {
        const response = axios.get(`http://localhost:5000/filters/${genre?.nameEn}`, {
            params: {
                nameRu: genre?.nameRu,
                nameEn: genre?.nameEn
            }
        })
        setGenre(Genre)
    }

    console.log(genres)

    return (
        <div className="GenresBlock">
            <div className="GenresBlock__genres genres">
                <CreateList items={genres} renderItem={(value: Item) =>
                    <div className="genres__genre"
                         key={value.nameEn}
                    >
                            {value.nameRu}
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
                    <div className="genres__edit-name">
                        <input type="text"
                               name={genre.nameRu}
                               onChange={e => e.target.value}
                        />
                        <input type="text"
                               name={genre.nameRu}
                               onChange={e => e.target.value}
                        />
                    </div>
                    <Button type='default'
                            color='default'
                            title={['Внести изменения']}
                            onClick={() => editGenres()}/>
                </div>
            }

        </div>
    );
};

export default GenresBlock;