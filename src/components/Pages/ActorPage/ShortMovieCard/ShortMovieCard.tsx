import React, {FC, PropsWithChildren} from 'react';
import Button from "../../../UI/Buttons/Button/Button";
import './ShortMovieCard.scss'

interface ShortMovieCardProps{
    'poster': string,
    'filmName': string,
    'year': number,
    'rating': number
}

const ShortMovieCard: FC<PropsWithChildren<ShortMovieCardProps>> = ({poster, filmName, year, rating}) => {

    let strRating = rating.toString().replace('.', ',')

    return (
        <div className="shortMovieCard">
            <div className="shortMovieCard__container">
                <div className="shortMovieCard__content">

                    <div className="shortMovieCard__movie">
                        <div className="shortMovieCard__poster">
                            <img src={poster} alt=""/>
                        </div>
                        <div className="shortMovieCard__specification specification">
                            <div className="specification__year">
                                {year}
                            </div>
                            <div className="specification__name">
                                {filmName}
                            </div>
                            <div className="specification__rating">
                                Рейтинг Иви: {strRating}
                            </div>
                        </div>
                    </div>
                    <div className="shortMovieCard__button">
                        <Button title={['Подробнее']}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShortMovieCard;