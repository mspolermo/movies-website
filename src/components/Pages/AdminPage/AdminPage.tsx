import React from 'react';
import FilmBlock from "./FilmBlock/FilmBlock";
import GenresBlock from "./GenresBlock/GenresBlock";

const AdminPage = () => {
    //
    // function changeGenres(genre: string) {
    //     if (filmGenre.includes(genre)) {
    //         let genresNew = filmGenre.filter(genres => genres !== genre)
    //         setFilmGenre(genresNew)
    //     } else {
    //         let genresNew = filmGenre
    //         genresNew.push(genre)
    //         setFilmGenre(genresNew)
    //     }
    // }

    return (
        <div className="AdminPage">
            <div className="AdminPage__container container">
                <div className="AdminPage__content">

                    <FilmBlock/>

                    <GenresBlock/>

                </div>
            </div>
        </div>
    );
};

export default AdminPage;