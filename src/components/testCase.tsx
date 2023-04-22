export interface activeFiltersProps {
    'genres': string[],
    'popularGenres': string[],
    'countries': string[],
    'years': string,
    'rating': {
        'min': number,
        'max': number,
    },
    'grade': {
        'min': number,
        'max': number,
    },
    'producer': string[],
    'actor': string[]
}