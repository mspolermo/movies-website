import React, {FC, useEffect, useState} from 'react';
import Search from "../../UI/Inputs/Search/Search";
import BigSearchResult from "../../Search/BigSearchResult/BigSearchResult";
import MapperIcons from "../../../types/MapperIcons";
import _ from 'lodash'
import Icons from '../../Icons/Icons';
import './HeaderSearch.scss'

interface Result {
    name: string,
    key: string,
    subtitle: string,
    rowType: string
}

interface HeaderSearchProps {
    toggleSearchSection: (e: React.MouseEvent<HTMLDivElement>) => void;
    searchSection: React.MutableRefObject<HTMLDivElement>
}

const HeaderSearch:FC<HeaderSearchProps> = ({toggleSearchSection, searchSection}) => {
    const [searchResults, setSearchResult] = useState<Result[]>([{name: 'name', key: 'key', subtitle: 'subtitle', rowType: 'person'}])
    const [searchQuery, setSearchQuery] = useState('');

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
                                 key={value.key}
                                 /*Сюда приходит функция goToPage*/
                                 onClick={() => {}}/>
        )
    }

    return (
        <div className="searchBlock searchBlock__hidden" ref={searchSection}>
                <div className="searchBlock__close" onClick={toggleSearchSection}>
                    <Icons className="" name="cross" size="30"/>    
                </div>
                <div className="searchBlock__modal"> 
                    <h2 className="searchBlock__heading">Поиск</h2>
                    <Search result={searchResults} renderResult={renderResult} placeholder={'Фильмы, персоны, жанры'} cl={false} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>    
                </div>
        </div>

    );
};

export default HeaderSearch;