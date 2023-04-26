import React from 'react';

export interface IconsSearchProps {
    [key:string]: string;
}

const IconsSearch: IconsSearchProps =
    {
        'person': 'person-search',
        'movies': 'movie-search',
        'series': 'series',
    }

export default IconsSearch;