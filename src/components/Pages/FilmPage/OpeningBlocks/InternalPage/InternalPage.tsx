import React, { FC, useEffect, useState } from "react";
import './InternalPage.scss'
import Icons from "../../../../Icons/Icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FilmPageProps } from "../../../../../types/filmPageTypes";
import LanguageHook from "../../../../../hooks/LanguageHook";
import typeChecker from "../../FilmPageUtils";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { internalPageFalse } from "../../../../../store/reducers/internalPageReducer";
import ShortInfoBlock from "./ShortInfoBlock/ShortInfoBlock";
import AllCreatorsBlock from "./InnerBlocks/AllCreatorsBlock/AllCreatorsBlock";
import FactsBlock from "./InnerBlocks/FactsBlock/FactsBlock";
import { allCreatorsBlockFalse, allCreatorsBlockTrue } from "../../../../../store/reducers/allCreatorsBlockReducer";
import { AnyAction } from "redux";
import { factsBlockFalse, factsBlockTrue } from "../../../../../store/reducers/factsBlockReducer";
import TreilersBlock from "./InnerBlocks/TreilersBlock/TreilersBlock";
import CommentsCreatingBlock from "./InnerBlocks/CommentsCreatingBlock/CommentsCreatingBlock";
import { commentsCreatingBlockFalse, commentsCreatingBlockTrue } from "../../../../../store/reducers/commentsCreatingBlockReducer";
import { treilersBlockFalse, treilersBlockTrue } from "../../../../../store/reducers/treilersBlockReducer";
import IpNavPanel from "./IpNavPanel/IpNavPanel";

interface InternalPageProps {
    film: FilmPageProps
}

const InternalPage:FC<InternalPageProps> = ({film}) => {
    const {t, i18n} = useTranslation();

    const {internalPageBlockStatus} = useTypedSelector( state => state.internalPage);
    const {allCreatorsBlockStatus} = useTypedSelector( state => state.allCreatorsBlock);
    const {commentsCreatingBlockStatus} = useTypedSelector( state => state.commentsCreatingBlock);
    const {treilersBlockStatus} = useTypedSelector( state => state.treilersBlock);
    const {factsBlockStatus} = useTypedSelector( state => state.factsBlock);

    const dispatch = useDispatch();
    const internalPageBlock = document.querySelector('#internal-page')

    const [filmName, setFilmName] = useState('');
    const [filmType, setFilmType] = useState('');


    useEffect( () => {

        setFilmName( LanguageHook(film.filmNameRu, film.filmNameEn, i18n.language) );
        setFilmType( LanguageHook ( typeChecker('ru', film.genres), typeChecker('en', film.genres), i18n.language) );
    
    },[film, internalPageBlockStatus])


    //Redux

    useEffect (() => {
        if (internalPageBlockStatus) {
            internalPageBlock?.classList.remove('internalPage__hidden');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else if ( (!internalPageBlockStatus) && (!internalPageBlock?.classList.toString().includes('internalPage__hidden'))) {
            internalPageBlock?.classList.add('internalPage__hidden')
        }
    }, [internalPageBlockStatus])

    function closeInternalPage () {
        dispatch(internalPageFalse());
    };


    return (
        <div  className="internalPage internalPage__hidden" id='internal-page'>

            <div className="internalPage__previous" onClick={closeInternalPage}>
                    <Icons className='internalPage__svg_big' name='back' size='50'/>
                    <p className="internalPage__text internalPage__text_btn">{t('internalPage.toFilm')}</p>
            </div>

            <div className="internalPage__main">

                <div className="internalPage__body">
                    <h3 className="internalPage__heading">{filmName} ({filmType} {film.year})</h3>
                    <IpNavPanel comments={film.comments} trailer={film.trailerUrl}/>


                    {(allCreatorsBlockStatus) && <AllCreatorsBlock persons={film.persons}/>}
                    {(factsBlockStatus) && <FactsBlock fact={film.fact}/>}
                    {(treilersBlockStatus) && <TreilersBlock trailer={film.trailerUrl}/> }
                    {(commentsCreatingBlockStatus) && <CommentsCreatingBlock filmId={film.id}/>}
                    
                </div>

                <ShortInfoBlock film={film} onDecrement={closeInternalPage} />

            </div>
        </div>
    )
}

export default InternalPage;
