export interface activeFiltersProps {
    'genres': string[],
    'popularGenres': string[],
    'popularCountries': string[],
    'countries': string[],
    'years': number,
    'rating': number,
    'grade': number,
    'producer': string,
    'actor': string,
}

export interface PersonPageProps {
    id: number,
    nameRu: string,
    nameEn: string,
    photo: string,
}

export interface FilmographyProps {
    key: number,
    poster: string,
    nameRu: string,
    nameEn: string,
    year: number,
    rating: number,
}

export interface FilmProps {
    'key': number,
    'nameRu': string,
    'nameEn': string,
    'year': number,
    'poster': string,
    'rating': number,
    'filmLength': number,
    'countryRu': string,
    'countryEn': string,
    'genreRu': string,
    'genreEn': string,
}

export interface MovieProps {
    'key': number,
    'nameRu': string,
    'nameEn': string,
    'genreRu': string,
    'genreEn': string,
}

export interface startFiltersProps {
    'genres':
        {
            'nameRu': string,
            'nameEn': string
        }[],
    'popularGenres':
        {
            'nameRu': string,
            'nameEn': string
        }[],
    'popularCountries':
        {
            'nameRu': string,
            'nameEn': string
        }[],
    'countries':
        {
            'nameRu': string,
            'nameEn': string
        }[],
    'years': number[],
    'rating': number,
    'grade': number,
    'producer': string,
    'actor': string,
}

export interface Item {
    nameRu: string,
    nameEn: string
}

export const arrAllFilters = {
    'popularGenres': [
        {
            'nameRu': 'драма',
            'nameEn': 'drama'
        },
        {
            'nameRu': 'боевик',
            'nameEn': 'action'
        },
        {
            'nameRu': 'триллер',
            'nameEn': 'thriller'
        },
        {
            'nameRu': 'криминал',
            'nameEn': 'crime'
        },
        {
            'nameRu': 'комедия',
            'nameEn': 'comedy'
        },
        {
            'nameRu': 'фантастика',
            'nameEn': 'fantastic'
        },
        {
            'nameRu': 'приключения',
            'nameEn': 'adventures'
        },
        {
            'nameRu': 'семейный',
            'nameEn': 'family'
        },
        {
            'nameRu': 'аниме',
            'nameEn': 'anime'
        },
        {
            'nameRu': 'фэнтези',
            'nameEn': 'fantasy'
        }
    ],
    'genres': [
        {
            'nameRu': '',
            'nameEn': ''
        }
    ],
    'popularCountries': [
        {
            'nameRu': 'Россия',
            'nameEn': ''
        },
        {
            'nameRu': 'США',
            'nameEn': ''
        },
        {
            'nameRu': 'Германия',
            'nameEn': ''
        },
        {
            'nameRu': 'Великобритания',
            'nameEn': ''
        },
        {
            'nameRu': 'Япония',
            'nameEn': ''
        },
        {
            'nameRu': 'Китай',
            'nameEn': ''
        },
        {
            'nameRu': 'Корея Южная',
            'nameEn': ''
        },
        {
            'nameRu': 'Индия',
            'nameEn': ''
        },
        {
            'nameRu': 'СССР',
            'nameEn': ''
        },
        {
            'nameRu': 'Франция',
            'nameEn': ''
        }
    ],
    'countries': [
        {
            'nameRu': '',
            'nameEn': ''
        }
    ],
    'years': [],
    'rating': 0,
    'grade': 0,
    'producer': '',
    'actor': ''
}

export const activeFilters = {
    'popularGenres': [],
    'genres': [],
    'popularCountries': [],
    'countries': [],
    'years': 0,
    'rating': 0,
    'grade': 0,
    'producer': '',
    'actor': ''
}