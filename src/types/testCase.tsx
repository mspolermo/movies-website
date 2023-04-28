export interface activeFiltersProps {
    'genres': string[],
    'popularGenres': string[],
    'countries': string[],
    'years': string,
    'rating': number,
    'grade': number,
    'producer': string,
    'actor': string,
}

export interface ActorPageProps {
    'name': string,
    'usname':string,
    'foto': string,
    'movies': {
        'poster': string,
        'name': string,
        'year': number,
        'rating': number,
        'role': string
    }
}

export interface startFiltersProps {
    'genres': string[],
    'popularGenres': string[],
    'countries': string[],
    'years': string[],
    'rating': number,
    'grade': number,
    'producer': string[],
    'actor': string[]
}