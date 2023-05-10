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