import React, {FC, useEffect, useState} from 'react';
import Search from "../../UI/Inputs/Search/Search";
import BigSearchResult from "../../Search/BigSearchResult/BigSearchResult";
import MapperIcons from "../../../types/MapperIcons";
import _ from 'lodash'
import Icons from '../../Icons/Icons';
import './HeaderSearch.scss'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface Result {
        key: number,
        nameRu: string,
        nameEn: string,
        rowType: string
}

interface HeaderSearchProps {
    toggleSearchSection: (e: React.MouseEvent<HTMLDivElement>) => void;
    searchSection: React.MutableRefObject<HTMLDivElement>
}

const HeaderSearch: FC<HeaderSearchProps> = ({toggleSearchSection, searchSection}) => {
    const [searchResults, setSearchResult] = useState<Result[]>([])
    const [searchQuery, setSearchQuery] = useState('');
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    function goToPage(value: Result) {
        searchSection.current.classList.add('searchBlock__hidden');

        setSearchQuery('');
        setSearchResult([]);

        if(value.rowType === 'films'){
            return (navigate(`/movies-website/film/${value.key}`))
        } else {
            return (navigate(`/movies-website/person/${value.key}`))
        }


    }

    useEffect(() => {
        if(searchQuery){
            fetchFilm()
        } else {
            setSearchResult([])
        }
    }, [searchQuery])

    async function fetchFilm() {
        const response = await axios.get('http://localhost:5000/search', {
            params: {
                name: searchQuery,
            }
        })

        // @ts-ignore
        let resultFilms = response.data.films.map(item => {
            return {
                key: item.id,
                nameRu: item.nameRu,
                nameEn: item.nameEn,
                rowType: 'films'
            }
        })

        // @ts-ignore
        let resultPeople = response.data.people.map(item => {
            return {
                key: item.id,
                nameRu: item.nameRu,
                nameEn: item.nameEn,
                rowType: 'people'
            }
        })

        let resultFilms_ = resultFilms.slice(0,4)
        let resultPeople_ = resultPeople.slice(0,4)

        let arr = resultFilms_.concat(resultPeople_)

        setSearchResult(arr)
    }

    function renderResult(value: Result) {
        console.log('renderResult', value)
        return (
                <BigSearchResult iconName={_.get(MapperIcons, value.rowType)}
                                 title={(i18n.language === 'en' && value.nameEn) ? value.nameEn : value.nameRu}
                                 subtitle={(i18n.language === 'en' && value.nameEn) ? value.nameRu : value.nameEn}
                                 key={value.key + value.rowType}
                                 onClick={() => goToPage(value)}/>
        )
    }

    return (
        <div className="searchBlock searchBlock__hidden" ref={searchSection}>
            <div className="searchBlock__close" onClick={toggleSearchSection}>
                <Icons className="" name="cross" size="30"/>
            </div>
            <div className="searchBlock__modal">
                <h2 className="searchBlock__heading">{t('header.search')}</h2>
                <Search result={searchResults}
                        renderResult={renderResult}
                        placeholder={t('header.searchPlaceholder')}
                        cl={false}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        search={true}
                />
            </div>
        </div>

    );
};

export default HeaderSearch;