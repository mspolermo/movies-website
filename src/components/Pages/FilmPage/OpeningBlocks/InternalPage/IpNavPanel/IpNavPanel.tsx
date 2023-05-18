import React, { FC, useEffect, useState } from "react";
import './IpNavPanel.scss'
import { useDispatch } from "react-redux";
import { allCreatorsBlockFalse, allCreatorsBlockTrue } from "../../../../../../store/reducers/allCreatorsBlockReducer";
import { commentsCreatingBlockFalse, commentsCreatingBlockTrue } from "../../../../../../store/reducers/commentsCreatingBlockReducer";
import { factsBlockFalse, factsBlockTrue } from "../../../../../../store/reducers/factsBlockReducer";
import { treilersBlockFalse, treilersBlockTrue } from "../../../../../../store/reducers/treilersBlockReducer";
import { useTypedSelector } from "../../../../../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";
import { IComment } from "../../../../../../types/filmPageTypes";

interface IpNavPanelProps {
    comments: IComment[];
    trailer: string | null;
}

const IpNavPanel:FC<IpNavPanelProps> = ({comments, trailer}) => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const [commentCounter, setCommentCounter] = useState(0);
    const [trailerCounter, setTrailerCounter] = useState(0);

    const {internalPageBlockStatus} = useTypedSelector( state => state.internalPage);
    const {allCreatorsBlockStatus} = useTypedSelector( state => state.allCreatorsBlock);
    const {commentsCreatingBlockStatus} = useTypedSelector( state => state.commentsCreatingBlock);
    const {treilersBlockStatus} = useTypedSelector( state => state.treilersBlock);
    const {factsBlockStatus} = useTypedSelector( state => state.factsBlock);
    
    const AllCreatorsRef = React.useRef() as React.MutableRefObject<HTMLLIElement>;
    const AllCommentsRef = React.useRef() as React.MutableRefObject<HTMLLIElement>;
    const FactsRef = React.useRef() as React.MutableRefObject<HTMLLIElement>;
    const TreilersRef = React.useRef() as React.MutableRefObject<HTMLLIElement>;


    function openBlock (e:React.MouseEvent) {
        closeAllInternalBlocks();

        let textValue = e.currentTarget.children[0].innerHTML;
        if ( (textValue == 'Создатели') || (textValue == 'Creators') ){
            dispatch(allCreatorsBlockTrue());
        } else if ( (textValue == 'Отзывы') || (textValue == 'Reviews') ){
            dispatch(commentsCreatingBlockTrue());
        } else if ( (textValue == 'Факты') || (textValue == 'Facts') ){
            dispatch(factsBlockTrue())
        } else if ( (textValue == 'Трейлеры') || (textValue == 'Trailers') ) {
            dispatch(treilersBlockTrue());
        }

        e.currentTarget.classList.add('iPnavPanel__item_active');
    };

    function closeAllInternalBlocks() {
        AllCreatorsRef.current.classList.remove('iPnavPanel__item_active');
        AllCommentsRef.current.classList.remove('iPnavPanel__item_active');
        FactsRef.current.classList.remove('iPnavPanel__item_active');
        TreilersRef.current.classList.remove('iPnavPanel__item_active');

        dispatch(allCreatorsBlockFalse());
        dispatch(commentsCreatingBlockFalse());
        dispatch(factsBlockFalse());
        dispatch(treilersBlockFalse());
    };

    useEffect (() => {
        if (!internalPageBlockStatus)  {
            closeAllInternalBlocks();
            return;
        };

        if (allCreatorsBlockStatus) {
            AllCreatorsRef.current.classList.add('iPnavPanel__item_active');
        } else if (commentsCreatingBlockStatus) {
            AllCommentsRef.current.classList.add('iPnavPanel__item_active');
        };

        if (comments.length > 0) {
            setCommentCounter(comments.length)
        };
        if (trailer) {
            setTrailerCounter(1)
        }
    }, [internalPageBlockStatus])

    return (
        <div className="iPnavPanel">
            <ul className="iPnavPanel__navList">
                <li className="iPnavPanel__item" onClick={openBlock} ref={AllCreatorsRef}>
                    <p className="iPnavPanel__text">{t('internalPage.iPnavPanel.creators')}</p>
                </li>
                <li className="iPnavPanel__item" onClick={openBlock} ref={AllCommentsRef}>
                    <p className="iPnavPanel__text" >{t('internalPage.iPnavPanel.reviews')}</p>
                    <p className="iPnavPanel__counter">{commentCounter}</p>
                </li>
                <li className="iPnavPanel__item " onClick={openBlock} ref={FactsRef}>
                    <p className="iPnavPanel__text">{t('internalPage.iPnavPanel.facts')}</p>
                </li>
                <li className="iPnavPanel__item" onClick={openBlock} ref={TreilersRef}>
                    <p className="iPnavPanel__text" >{t('internalPage.iPnavPanel.trailers')}</p>
                    <p className="iPnavPanel__counter">{trailerCounter}</p>
                </li>
            </ul>
        </div>
    )
}

export default IpNavPanel;