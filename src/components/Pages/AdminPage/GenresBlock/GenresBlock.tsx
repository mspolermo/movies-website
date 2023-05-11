import React, {useEffect, useState} from 'react';
import CreateList from "../../../CreateList/CreateList";
import {Item} from "../../../../types/filtersTypes";
import Button from "../../../UI/Buttons/Button/Button";
import Icons from "../../../Icons";
import axios from "axios";

const GenresBlock = () => {
    const [genres, setGenres] = useState<Item[]>([])
    const [genre, setGenre] = useState<Item>()

    useEffect(() => {
        fetchGenres()
    }, [])

    async function fetchGenres() {
        const response = await axios.get('http://localhost:5000/filters')

        let filters = {
            genres: response.data.genres
        }

        setGenres(filters)
    }

    function editGenres(genre) {
        const response = axios.get(`http://localhost:5000/filters/${genre?.nameEn}`, {
            params: {
                nameRu: genre?.nameRu,
                nameEn: genre?.nameEn
            }
        })
        setGenre({})
    }

    return (
        <div className="GenresBlock">
            <div className="GenresBlock__genres genres">
                <CreateList items={genres} renderItem={(genre: Item) =>
                    <div className="genres__genre"
                         key={genre.nameEn}
                    >
                            {genre.nameRu}
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
                            onClick={() => editGenres(genre)}/>
                </div>
            }

        </div>
    );
};

export default GenresBlock;