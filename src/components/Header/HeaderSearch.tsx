import React, {useEffect, useState} from 'react';
import Search from "../Search/Search";
import BigSearchResult from "../Search/BigSearchResult/BigSearchResult";
import MapperIcons from "../../types/MapperIcons";
import _ from 'lodash'
import {navigate} from "@storybook/addon-links";

interface Result {
    name: string,
    key: string,
    subtitle: string,
    rowType: string
}

const HeaderSearch = () => {
    const [searchResults, setSearchResult] = useState<Result[]>([{name: 'name', key: 'key', subtitle: 'subtitle', rowType: 'person'}])
    const [searchQuery, setSearchQuery] = useState('')

    // Реагирует на изменения searchQuery и отправляет запрос на бэк.
    // Если нужны правки в пришедшем jSon, то форматирование проискодит здесь же.
    // useEffect()

    //Формируем ссылку для перехода на стр. фильма/сериала/персоны
    // function goToPage (value:Result) {
    //     return (navigate('/' + value.rowType + '/' + value.key))
    // }

    function renderResult(value:Result){
        return (<BigSearchResult iconName={_.get(MapperIcons,value.rowType)}
                                 title={value.name}
                                 subtitle={value.subtitle}
                                 /*Сюда приходит функция goToPage*/
                                 onClick={() => {}}/>
        )
    }

    return (
        <div>
            <Search result={searchResults} renderResult={renderResult} placeholder={'Фильмы, персоны, жанры'} cl={false} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
    );
};

export default HeaderSearch;