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

export interface ActorPageProps {
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
