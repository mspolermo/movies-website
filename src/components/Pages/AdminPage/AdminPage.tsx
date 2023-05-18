import React, {useState} from 'react';
import FilmBlock from "./FilmBlock/FilmBlock";
import GenresBlock from "./GenresBlock/GenresBlock";
import './AdminPage.scss'

const AdminPage = () => {
    const [activeBlock, setActiveBlock] = useState('')

    return (
        <div className="AdminPage">
            <div className="AdminPage__container container">
                <div className="AdminPage__content">

                    <div className="AdminPage__btn">
                        <div className={ "AdminPage__block-film"}
                             key='films'
                             onClick={() => setActiveBlock('films')}
                        >
                            Фильмы
                        </div>
                        <div className="AdminPage__block-genre"
                             key='genres'
                             onClick={() => setActiveBlock('genres')}
                        >
                            Жанры
                        </div>
                    </div>
                    {activeBlock === 'films' && <FilmBlock/>}
                    {activeBlock === 'genres' && <GenresBlock/>}

                </div>
            </div>
        </div>
    );
};

export default AdminPage;