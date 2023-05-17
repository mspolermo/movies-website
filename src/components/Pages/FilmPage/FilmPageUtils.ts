export default function typeChecker (
    
    language: string,
    genres: {
        id: number,
        nameRu: string,
        nameEn: string
    } [] 

    ) {

    switch (language) {

        case 'ru':
            if ( genres.find( genre => genre.nameRu == 'мультфильм' ) ) {
                return 'Мульфильм';
            } else {
                return 'Фильм';
            };
            break;

        case 'en':
            if ( genres.find( genre => genre.nameEn == 'cartoon' ) ) {
                return 'Cartoon';
            } else {
                return 'Movie';
            };
            break;

        default: 
            return ''
    }
};