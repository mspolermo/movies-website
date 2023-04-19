import React, {FC, PropsWithChildren, useState} from 'react';
import './filmcard.scss'
import star from '../../static/img/filmcard/star.svg'
import favorit from '../../static/img/filmcard/favorites.svg'
import favoritTrue from '../../static/img/filmcard/favorites-true.svg'
import similar from '../../static/img/filmcard/similar.svg'
import like from '../../static/img/filmcard/notlike.svg'
import notlikeTrue from '../../static/img/filmcard/notlike-true2.svg'

interface FilmCardProps {
    film: string;
    onClick: (film: string) => void;
}

const FilmCard: FC<PropsWithChildren<FilmCardProps>> = ({film, onClick}) => {
    const [favorites, setFavorites] = useState(true);
    const [notlike, setNotlike] = useState(true);
    // let ratingArr = film.rating.toString().split('.')

    return (
        //ToDo: подгрузить данные из API
        <div
            className='film_card'
            onClick={() => onClick(film)}
        >
            <div className="film_card_container">
                <div className='film_card_lists'>
                    <div className='film_card_list_one'>
                        <div className="film_card_img">
                            <img src="https://thumbs.dfs.ivi.ru/storage15/contents/3/3/a116328d08b013933940887ad22985.jpg/234x360/?q=85" alt=""/>
                            <div className="film_card_background"></div>
                        </div>
                        <div className="list_one_age_restrictions">
                            12+
                        </div>
                    </div>
                    <div className='film_card_list_two'>
                        <div className="list_two_icon">
                            {favorites && <div
                                data-title='Смотреть позже'
                                className="icon_favorites icon_style"
                                onClick={() => setFavorites(prev => !prev)}
                            >
                                <img src={favorit} alt='' style={{width:20.8}}/>
                            </div>}
                            {!favorites && <div
                                data-title='Смотреть позже'
                                className="icon_favorites icon_style"
                                onClick={() => setFavorites(prev => !prev)}
                            >
                                <img src={favoritTrue} alt='' style={{width:20.8}}/>
                            </div>}
                            
                            <div className="icon_similar icon_style"
                                 data-title='Похожее'
                            >
                                <img src={similar} alt="" style={{width:20.8}}/>
                            </div>
                            
                            <div className="icon_rating icon_style"
                                 data-title='Уже смотрел, оценить'
                            >
                                <img src={star} alt="" style={{width:20.8}}/>
                            </div>
                            
                            {notlike && <div
                                data-title='Не нравится такое'
                                className="icon_notlike icon_style"
                                onClick={() => setNotlike(prev => !prev)}
                            >
                                <img src={like} alt='' style={{width:20.8}}/>
                            </div>}
                            {!notlike && <div
                                data-title='Не нравится такое'
                                className="icon_notlike icon_style"
                                onClick={() => setNotlike(prev => !prev)}
                            >
                                <img src={notlikeTrue} alt='' style={{width:20.8}}/>
                            </div>}
                        </div>
                        <div className="list_two_info">
                            <div className="list_two_info_rating">
                                <div className="rating_big">8,</div>
                                <div className="rating_small">2</div>
                                </div>
                            <div className="list_two_info_short">Film.age, Film.country, Film.genre</div>
                            <div className="list_two_info_duration">Film.duration Film.units</div>
                        </div>
                    </div>
                </div>
                <div className="film_card_name">Film.name</div>
            </div>
        </div>
    );
};

export default FilmCard;