import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import './FilmPage.scss';
import { FilmPageProps } from "../../../types/filmPageTypes";

import ReitingBlock from "./BodyBlocks/ReitingBlock/ReitingBlock";
import SloganBlock from "./BodyBlocks/SloganBlock/SloganBlock";
import SummaryBlock from "./BodyBlocks/SummaryBlock/SummaryBlock";
import CardsBlock from "./BodyBlocks/CardsBlock/CardsBlock";
import DescriptionBlock from "./BodyBlocks/DescriptionBlock/DescriptionBlock";
import AdditionalInfoBlock from "./BodyBlocks/AdditionalInfoBlock/AdditionalInfoBlock";
import PlayerPanel from "./BodyBlocks/PlayerPanel/PlayerPanel";
import WatchesBlock from "./SecondaryBlocks/WatchesBlock/WatchesBlock";
import GradeBlock from "./OpeningBlocks/GradeBlock/GradeBlock";
import CreatorsBlock from "./SecondaryBlocks/CreatorsBlock/CreatorsBlock";
import CommentsBlock from "./SecondaryBlocks/CommentsBlock/CommentsBlock";
import { FilmsCompilation } from "../../FilmsCompilation/FilmsCompilation";

import LanguageHook from "../../../hooks/LanguageHook";
import Loader from "../../UI/Loader/Loader";
import InternalPage from "./OpeningBlocks/InternalPage/InternalPage";
import { useDispatch } from "react-redux";
import { internalPageFalse } from "../../../store/reducers/internalPageReducer";

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
    genres: [],
    fact: {
        id: 0,
        value: '',
        type: '',
        spoiler: false,
        filmId: 0
    },
    comments: []
};

const FilmPage = () => {
    //Todo - кнопки, доп страница

    const params = useParams();
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const [isPageLoading, setIsPageLoading] = useState(false);

    const [film, setFilm] = useState<FilmPageProps>(Film);
    const [similarFilms, setSimilarFilms] = useState([{}]);
    const [filmName, setFilmName] = useState('');
    const [trailer, setTrailer] = useState ('https://www.youtube.com/watch?v=3krLW9Pl5HM')

    useEffect(() => {
        fetchFilm();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        dispatch(internalPageFalse());
    }, []);

    useEffect(() => {
        fetchFilm();
        //document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [params]);

    useEffect(() => {

        setFilmName( LanguageHook( film.filmNameRu, film.filmNameEn, i18n.language) );

        if ( (film.trailerName) && ( film.trailerUrl.includes('youtube') ) ) {
            setTrailer(film.trailerUrl);
        } 
    }, [i18n.language, film]);

    async function fetchFilm() {
        setIsPageLoading(true);

        const response = await axios.get(`http://localhost:5000/film/${params.id}`);
        let data = response.data.film;

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
            genres: data.genres,
            fact: data.fact,
            comments: data.comments
        };
        const similarFilms_ = response.data.similarFilms.slice(0 ,30);

        setFilm(film_);
        setSimilarFilms(similarFilms_)
        // setFilmName( LanguageHook ( data.filmNameRu, data.filmNameEn, i18n.language) );
        setIsPageLoading(false);

    };

    return (
        <div className="film">
            {isPageLoading 
            ? <Loader />
            :
            <div className="container film__container">

                <div className="film__body">

                    <div className="film__tablet">
                        <SummaryBlock 
                            filmName={filmName}
                            year={film.year}
                            genres={film.genres}
                            movieLength={film.movieLength}
                            countries={film.countries}
                        />
                    </div>

                    <div className="film__column film__column_left">

                        <div className="film__video">
                            <ReactPlayer
                                url={trailer}
                                className = 'film__videoPlayer'
                                width={'auto'}
                                height={'auto'}
                                controls
                            />
                        </div>

                        <div className="film__desktop">
                            <PlayerPanel />    
                        </div>

                        <div className="film__mobile">
                            <PlayerPanel />
                        </div>
                        
                    </div>

                    <div className="film__column film__column_right">

                        <div className="film__side film__side_left">

                            <div className="film__desktop">
                                <SummaryBlock 
                                    filmName={filmName}
                                    year={film.year}
                                    genres={film.genres}
                                    movieLength={film.movieLength}
                                    countries={film.countries}
                                />
                            </div>

                            <CardsBlock ratingKp={film.ratingKp} creators={film.persons}/>
                            
                            <div className="film__slogan">
                                <SloganBlock slogan={film?.slogan} />
                            </div>

                            <DescriptionBlock description={film?.description} filmName={filmName}/>
                            <ReitingBlock ratingKp={film?.ratingKp} votesKP={film?.votesKp}/>
                            <AdditionalInfoBlock/>

                        </div>

                        <div className="film__side film__side_right">

                            <PlayerPanel />
                            <SloganBlock slogan={film?.slogan} />

                        </div>

                    </div> 

                </div>

                <FilmsCompilation variant="similarFilms" similarFilms={similarFilms} title={filmName} />
                <CreatorsBlock creators={film.persons}/>
                <CommentsBlock filmName={filmName} comments={film.comments}/>
                <WatchesBlock filmName={filmName} bigPictureUrl={film.bigPictureUrl} smallPictureUrl={film.smallPictureUrl} />
            
                <GradeBlock />
                <InternalPage film={film}/>
            </div>
            }
        </div>
    );
};

export default FilmPage;