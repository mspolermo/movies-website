import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import './TypeSearch.scss'
import Search from "../../../UI/Inputs/Search/Search";
import RowSearchResult from "../../../Search/RowSearchResult/RowSearchResult";
import {useTranslation} from "react-i18next";
import axios from "axios";

interface TypeSearchProps {
    handleChangeFilter: (item:string) => void,
    key: number
}

interface Result {
    nameEn: string,
    nameRu: string,
    key: number,
}
//todo: ошибка при поиске
const TypeSearch: FC<PropsWithChildren<TypeSearchProps>> = ({handleChangeFilter, key}) => {
    const { t, i18n } = useTranslation();

    const [searchResults, setSearchResult] = useState<Result[]>([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fetchFilm()
    }, [searchQuery])

    function renderResult(value: Result){
        return (<RowSearchResult title={(i18n.language === 'en' && value.nameEn) ? value.nameEn: value.nameRu}
                                 key={value.key}
                                 onClick={() => handleChangeFilter(value.nameEn)}/>
        )
    }
    async function fetchFilm() {
        const response = await axios.get('http://localhost:5000/findPersonsByNameAndProfession', {
            params: {
                id: key,
                name: searchQuery
            }
        })

        let result = response.data
        // @ts-ignore
        let searchResults = result.map(item => {
            return {
                key: item.id,
                nameRu: item.nameRu,
                nameEn: item.nameEn,
            }
        })

        setSearchResult(searchResults)
    }

    return (
        <>
            <div className='TypeSearch'>
                <div className="TypeSearch__content">
                    <Search result={searchResults}
                            renderResult={renderResult}
                            placeholder={t('filters.search.placeholder-small')} cl={true}
                            handleClear={() => handleChangeFilter('')}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}/>
                </div>
            </div>
        </>
    );
};

export default TypeSearch;