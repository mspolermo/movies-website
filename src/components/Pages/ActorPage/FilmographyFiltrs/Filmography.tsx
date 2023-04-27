import React, {FC, PropsWithChildren} from 'react';
import './Filmography.scss'

interface FilmographyProps{
    'roles'?: string[],
    'movies'?: number,
    'activeRole': string,
    'roleName': string,
    'setActiveRole': (roleName: string) => void
}

const Filmography: FC<PropsWithChildren<FilmographyProps>> = ({roles, movies, activeRole, roleName,setActiveRole}) => {

    let isActive = activeRole === roleName

    return (
        <div className='filmography'>
            <div className="filmography__content">

                <div className="filmography__header">
                    <div className="filmography__title">
                        Полная фильмография
                    </div>
                    <div className="filmography__subtitle">
                        59 фильмов
                    </div>
                </div>

                <div className="filmography__lists">
                    <div className="filmography__role">
                        {/*<div className={isActive ? 'filmography__role_active' : 'filmography__role_style'}*/}
                        {/*     onClick={() => {setActiveRole(roleName)}}*/}
                        {/*>Все</div>*/}
                        {/*<div className={isActive ? 'filmography__role_active' : 'filmography__role_style'}*/}
                        {/*     onClick={() => {setActiveRole(roleName)}}*/}
                        {/*>Актёр</div>*/}

                        <div className='filmography__role_active'
                        >Все</div>
                        <div className='filmography__role_style'
                        >Актёр</div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Filmography;