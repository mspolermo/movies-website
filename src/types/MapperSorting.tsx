import React from 'react';

export interface SortingProps {
    [key:string]: string;
}

const SortingType: SortingProps =
    {
        'popularity': 'По популярности',
        'by_rating': 'По рейтингу',
        'novelty': 'По новизне',
    }

export default SortingType;