export interface FilmPageProps {
    id: number
    trailerName: string, 
    trailerUrl: string, 
    ratingKp: number, 
    votesKp: number,
    movieLength: number,
    filmNameRu: string,
    filmNameEn: string,
    description: string,
    slogan: string,
    bigPictureUrl: string,
    smallPictureUrl: string,
    year: number,
    persons: {
        id: number,
        photoUrl: string,
        nameRu: string,
        nameEn: string,
        professions: [{
            id: number,
            name: string,
        }] 
    } [],
    countries: {
        id: number,
        countryName: string,
        countryNameEn: string,
    }[] ,
    genres: {
        id: number,
        nameRu: string,
        nameEn: string,
    } [],
    fact: {
        id: number,
        value: string,
        type: string,
        spoiler: boolean,
        filmId: number
    },
    comments: IComment []
};

export interface IComment {
    id: number,
    header: string,
    value: string,
    authorId: number,
    parentId: number,
    createdAt: Date,
    filmId: number,
};

export interface CommentsBlockProps {
    filmName: string;
    comments: IComment []
};

export interface CreatorsBlockProps {
    creators: {
        id: number,
        photoUrl: string,
        nameRu: string,
        nameEn: string,
        professions: [
            {
                id: number,
                name: string,
            }
        ]
    } [];
}

export interface SummaryBlockProps {
    filmName: string
    year: number;
    movieLength: number;
    countries: {
        id: number,
        countryName: string,
        countryNameEn: string
    } [];
    genres: {
        id: number,
        nameRu: string,
        nameEn: string
    } []; 
};

export interface CardsBlockProps {
    ratingKp: number,
    creators: {
        id: number,
        photoUrl: string,
        nameRu: string,
        nameEn: string,
        professions: [
            {
                id: number,
                name: string,
            }
        ]
    } [];
};

export interface SloganBlockProps {
    slogan: string | undefined;
};

export interface DescriptionBlockProps {
    description: string;
    filmName: string;
};

export interface ReitingBlockProps {
    ratingKp: number;
    votesKP: number;
};

export interface WatchesBlockProps {
    filmName: string;
    bigPictureUrl: string,
    smallPictureUrl: string
}