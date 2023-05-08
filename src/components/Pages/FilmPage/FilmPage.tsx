import React, { useEffect, useState } from "react";
import Card from "../../UI/Buttons/Card/Card";
import './FilmPage.scss'
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";
import ReitingBlock from "./ReitingBlock/ReitingBlock";
import SloganBlock from "./SloganBlock/SloganBlock";
import SummaryBlock from "./SummaryBlock/SummaryBlock";
import CardsBlock from "./CardsBlock/CardsBlock";
import DescriptionBlock from "./DescriptionBlock/DescriptionBlock";
import AdditionalInfoBlock from "./AdditionalInfoBlock/AdditionalInfoBlock";
import ReactPlayer from "react-player";
import PlayerPanel from "./PlayerPanel/PlayerPanel";
import axios from "axios";
import { useTranslation } from "react-i18next";


interface FilmProps {
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
            PersonProfession: {
                "A": number,
                "B": number
            }
        }] 
    } [],
    countries: {
        id: number,
        countryName: string,
        countryNameEn: string,
        FilmCountry: {
            "A": number,
            "B": number
        }
    }[] ,
    genres: {
        id: number,
        nameRu: string,
        nameEn: string,
        FilmGenre: {
            "A": number,
            "B": number
        }
    } []
}

const Film = {
    id: 0,
    trailerName: '', 
    trailerUrl: '', 
    ratingKp: 0, 
    votesKp: 0,
    movieLength: 0,
    filmNameRu: '',
    filmNameEn: '',
    description: '',
    slogan: '',
    bigPictureUrl: '',
    smallPictureUrl: '',
    year: 0,
    persons: [],
    countries: [],
    genres: []
}

const FilmPage = () => {
    const [film, setFilm] = useState<FilmProps>(Film)

    useEffect(() => {
        fetchFilm()
    }, [])


    async function fetchFilm() {
        const response = await axios.get('http://localhost:5000/film/154');
        let data = response.data;

        const film_ = {
            id: data.id,
            trailerName: data.trailerName, 
            trailerUrl: data.trailerUrl, 
            ratingKp: data.ratingKp, 
            votesKp: data.votesKp,
            movieLength: data.movieLength,
            filmNameRu: data.filmNameRu,
            filmNameEn: data.filmNameEn,
            description: data.description,
            slogan: data.slogan,
            bigPictureUrl: data.bigPictureUrl,
            smallPictureUrl: data.smallPictureUrl,
            year: data.year,
            persons: data.persons,
            countries: data.countries,
            genres: data.genres
        }

        setFilm(film_)
    }

    
    //Todo - En version, загрушка для отстутствующих трейлеров

    //need data
    let type = 'Фильм';
    let ageRating = '16+';
    let country = 'США';
    let genres =['Драмы', 'Комедии', 'Мелодрамы'] //не больше 3
    //Возможно-ли блок persons сортировать на бекенде, чтобы приходящие 5 первых записей были главные роли?
    //Должны сразу приходить отзывы к фильму

    return (
        <div className="film">
            <div className="container film__container">

                <div className="film__desktop"> 
                    <div className="film__column film__column_left">
                        <div className="film__video">
                            <ReactPlayer
                                url={film.trailerUrl}
                                className = 'film__videoPlayer'
                                width={'auto'}
                                height={'auto'}
                                controls
                            />
                        </div>
                        <div className="film__buttonMenu ">
                            <Button 
                                title={['Трейлер']} 
                                svg={<Icons name="play" size="30"/>}
                            />
                            <Button 
                                svg={<Icons name="bookmark" size="30" className="film__svg_bookmark" strokeWidth="0"/>}
                            />
                            <Button 
                                svg={<Icons name="upload" size="30" className="film__svg_upload"/>}
                            />
                        </div>
                    </div>
                    <div className="film__column film__column_right">
                        <SummaryBlock 
                            filmName={film.filmNameRu}
                            year={film.year}
                            type={type}
                            ageRating={ageRating}
                            country={country}
                            genres={genres}
                            movieLength={film.movieLength}
                        />
                        <CardsBlock ratingKp={film.ratingKp} creators={film.persons}/>
                        <SloganBlock slogan={film?.slogan} />
                        <DescriptionBlock description={film?.description} filmName={film?.filmNameRu}/>
                        <ReitingBlock ratingKp={film?.ratingKp} votesKP={film?.votesKp}/>
                    </div>    
                </div>

                <div className="film__tablet">
                    <SummaryBlock 
                        filmName={film?.filmNameRu}
                        year={film?.year}
                        type={type}
                        ageRating={ageRating}
                        country={country}
                        genres={genres}
                        movieLength={film?.movieLength}
                    />
                    <div className="film__video">
                        <ReactPlayer
                            url={film?.trailerUrl}
                            className = 'film__videoPlayer'
                            width={'auto'}
                            height={'auto'}
                            controls
                        />
                    </div>
                    <div className="film__body">
                        <div className="film__column film__column_left">
                            <CardsBlock ratingKp={film?.ratingKp} creators={film.persons}/>
                            <DescriptionBlock description={film?.description} filmName={film?.filmNameRu}/>
                            <ReitingBlock ratingKp={film?.ratingKp} votesKP={film?.votesKp}/>
                            <AdditionalInfoBlock />
                        </div>  
                        <div className="film__column film__column_right">
                            <div className="film__buttonMenu ">
                                <Button 
                                    type="ultraWide"
                                    title={['Трейлер']} 
                                    svg={<Icons name="play" size="30"/>}
                                />
                                <div className="film__btns">
                                    <div className="film__btn">
                                        <Button
                                            type="ultraWide"
                                            svg={<Icons name="bookmark" size="30" className="film__svg_bookmark" strokeWidth="0"/>}
                                        />
                                    </div>
                                    <div className="film__btn">
                                        <Button 
                                            type="ultraWide"
                                            svg={<Icons name="upload" size="30" className="film__svg_upload"/>}
                                        />
                                    </div>    
                                </div>
                                
                            </div>
                            <SloganBlock slogan={film?.slogan} />
                        </div>   
                    </div>            
                </div>

                <div className="film__mobile">
                    <SummaryBlock 
                        filmName={film?.filmNameRu}
                        year={film?.year}
                        type={type}
                        ageRating={ageRating}
                        country={country}
                        genres={genres}
                        movieLength={film?.movieLength}
                    />
                    <div className="film__video">
                        <ReactPlayer
                            url={film?.trailerUrl}
                            className = 'film__videoPlayer'
                            width={'auto'}
                            height={'auto'}
                            controls
                        />
                    </div>
                    <PlayerPanel />
                    <CardsBlock ratingKp={film?.ratingKp} creators={film.persons}/>
                    <SloganBlock slogan={film?.slogan} />
                    <DescriptionBlock description={film?.description} filmName={film?.filmNameRu}/>
                    <ReitingBlock ratingKp={film?.ratingKp} votesKP={film?.votesKp}/>
                    <AdditionalInfoBlock />
                </div>
               
                <div className="film__inner">
                    <p className="film__smallHeading">С фильмом «{film?.filmNameRu}» смотрят</p>
                    <div className="film__shortly"></div>
                </div>
                <div className="film__inner">
                    <p className="film__smallHeading">Актёры и создатели</p>
                    <div className="film__part">
                        <Card 
                            type="big"
                            title={"Киану Ривз"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_7836.jpg"}
                        />    
                        <Card 
                            type="big"
                            title={"Юлия Пересильд"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_1537279.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Донни Йен"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Киану Ривз"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_7836.jpg"}
                        />    
                        <Card 
                            type="big"
                            title={"Юлия Пересильд"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_1537279.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Донни Йен"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Донни Йен"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />  
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />  
                    </div>
                </div>
                <div className="film__inner">
                    <p className="film__smallHeading">Отзывы</p>
                    <div className="film__shortly"></div>
                </div>
                <div className="film__inner">
                    <p className="film__smallHeading">Cмотреть «{film?.filmNameRu}» на всех устройствах</p>
                    <div className="film__shortly"></div>
                </div>
            </div>
        </div>
    )
}

export default FilmPage;