import React, {FC, PropsWithChildren, useState} from 'react';
import './filmcard.scss'
import similar from '../../static/img/filmcard/similar.svg'
import like from '../../static/img/filmcard/notlike.svg'
import notlikeTrue from '../../static/img/filmcard/notlike-true2.svg'
import Icons from "../Icons/Icons";

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
            className='filmcard'
            onClick={() => onClick(film)}
        >
            <div className="filmcard__container">
                <div className='filmcard__content'>
                    <div className='filmcard__poster'>
                        <div className="filmcard__img">
                            <img
                                src="https://thumbs.dfs.ivi.ru/storage15/contents/3/3/a116328d08b013933940887ad22985.jpg/234x360/?q=85"
                                alt=""/>
                            <div className="filmcard__img_background"></div>
                        </div>
                        <div className="filmcard__img_fixed">
                            12+
                        </div>
                    </div>
                    <div className='filmcard__properties'>
                        <div className="filmcard__icons">

                            <div
                                data-title='Смотреть позже'
                                className="filmcard__icons_style"
                                onClick={() => setFavorites(prev => !prev)}>

                                {favorites ? <Icons className='filmcard__icons_svg' name='bookmark' size='25.8'/>
                                    : <Icons className='filmcard__icons_svg' name='bookmark-true' size='25.8'/>
                                }

                            </div>

                            <div className="filmcard__icons_style"
                                 data-title='Похожее'
                            >
                                <img src={similar} alt="" style={{width: 20.8}}/>
                            </div>

                            <div className="filmcard__icons_style"
                                 data-title='Уже смотрел, оценить'
                            >
                                <Icons className='filmcard__icons_svg' name='grade-star' size='25.8'/>
                            </div>

                            <div
                                data-title='Не нравится такое'
                                className="filmcard__icons_style"
                                onClick={() => setNotlike(prev => !prev)}
                            >
                                {notlike ? <img src={like} alt='' style={{width: 20.8}}/>
                                    : <img src={notlikeTrue} alt='' style={{width: 20.8}}/>}
                            </div>

                        </div>
                        <div className="filmcard__properties_info">
                            <div className="filmcard__properties_rating">
                                <div className="filmcard__properties_bigRating">8,</div>
                                <div className="filmcard__properties_smallRating">2</div>
                            </div>
                            <div className="filmcard__properties_infoShort">Film.age, Film.country, Film.genre</div>
                            <div className="filmcard__properties_infoTime">Film.duration Film.units</div>
                        </div>
                    </div>
                </div>
                <div className="filmcard__name">Film.name</div>
            </div>
        </div>
    );
};

export default FilmCard;