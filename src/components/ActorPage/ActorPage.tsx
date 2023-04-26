import React, {useState} from 'react';
import CreateList from "../CreateList/CreateList";
import ShortMovieCard from "./ShortMovieCard/ShortMovieCard";
import {ActorPageProps} from "../../types/testCase";
import ActorHeader from "./ActorHeader/ActorHeader";
import Filmography from "./FilmographyFiltrs/Filmography";
import './ActorPage.scss'
import Icons from "../Icons/Icons";

const actorPage = {
    'name': 'Сигурни Уивер',
    'usname': 'Sigourney Weaver',
    'foto': 'https://thumbs.dfs.ivi.ru/storage38/contents/d/0/56fdfb9b0c3880b4e2911f3a819cb0.jpg/120x144/?q=85',
    'movies':
        {
            'poster': 'https://thumbs.dfs.ivi.ru/storage28/contents/7/0/5988cbd32abfaf2ac23076b068eeea.jpg/172x264/?q=85',
            'name': 'Чужой 3',
            'year': 1992,
            'rating': 7.5,
            'role': 'Актёр'
        },
        // {
        //     'poster': 'https://thumbs.dfs.ivi.ru/storage28/contents/7/0/5988cbd32abfaf2ac23076b068eeea.jpg/172x264/?q=85',
        //     'name': 'Чужой 3',
        //     'year': 1992,
        //     'rating': 7.5,
        //     'role': 'Актёр'
        // }
}

const ActorPage = () => {
    const [actor, setActor] = useState<ActorPageProps>(actorPage)
    const [roles, setRoles] = useState(['Все'])
    const [activeRole, setActiveRole] = useState('')

    // function rolesArr() {
    //     let arr = []
    //     for (let i in actorPage.movies){
    //         arr.push(actorPage.movies[i].role)
    //     }
    //     console.log(arr)
    //     let arrRoles = Array.from(new Set(arr))
    //     console.log(arrRoles)
    //     setRoles(roles.concat(arrRoles))
    // }
    //
    // rolesArr()
    // console.log(roles)

        return (
            <div className="actorPage">
                <div className="actorPage__container">
                    <div className="actorPage__content">

                        <div className="actorPage__btn-back btn-back">
                            <Icons className='actorPage__arrow_small' name='back' size='40'/>
                            <Icons className='actorPage__arrow_big' name='back' size='50'/>
                            Назад
                        </div>

                        <ActorHeader foto={actor.foto}
                                     name={actor.name}
                                     USname={actor.usname}/>

                        <div className="actorPage__filmography">
                            {/*<Filmography/>*/}
                            <ShortMovieCard poster={actor.movies.poster}
                                            filmName={actor.movies.name}
                                            year={actor.movies.year}
                                            rating={actor.movies.rating}/>
                        </div>

                    </div>
                </div>
            </div>
        );
};

export default ActorPage;