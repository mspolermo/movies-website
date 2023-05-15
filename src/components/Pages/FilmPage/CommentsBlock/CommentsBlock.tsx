import React, { FC, useEffect, useState } from "react";
import './CommentsBlock.scss'
import Button from "../../../UI/Buttons/Button/Button";
import { Carousel } from "../../../Carousel/Carousel";
import Icons from "../../../Icons/Icons";
import { useTranslation } from "react-i18next";

interface CommentsBlockProps {
    filmName: string;
    comments: IComment []
};

interface IComment {
    id: number,
    header: string,
    value: string,
    authorId: number,
    parentId: number,
    createdAt: Date,
    filmId: number,
};

const CommentsBlock: FC<CommentsBlockProps> = ({filmName, comments}) => {
    const {t, i18n} = useTranslation();

    const [comm, setComm] = useState<IComment []>(
        [
            {
                id: 0,
                header: "",
                value: "",
                authorId: 0,
                parentId: 0,
                createdAt: new Date(),
                filmId: 0
            }
        ]
    ) 

        useEffect( () => {
            setComm(comments)
        },[comments])

    return (
        <div className="commentsBlock">
            <div className="commentsBlock__top">
                <div className="commentsBlock__part">
                    <div className="commentsBlock__header">
                        <h3 className="commentsBlock__heading">{t('filmPage.commentsBlock.reviews')}</h3>
                        <p className="commentsBlock__count">{comments.length}</p>
                    </div>
                    <div className="commentsBlock__header">{t('filmPage.commentsBlock.about')} "{filmName}"</div>
                </div>
                <Button title={['filmPage.commentsBlock.btn']} color="transparent" />
            </div>
            {comments.length > 0 
            ?
                <Carousel variant='tv'>
                    {comm.map( (comment) =>
                    
                        <div className="commentsBlock__inner" key={comment.id}>
                            <div className="commentsBlock__comment-top">
                                <div className="commentsBlock__comment-header">{comment.header}</div>
                                <div className="commentsBlock__comment-body">{comment.value}</div>    
                            </div>
                            <div className="commentsBlock__comment-bottom">
                                <div className="commentsBlock__comment-date">{ (new Date (comment.createdAt)).toLocaleDateString() }</div>
                                <div className="commentsBlock__comment-like">
                                    <Icons name="like" size="18" color="gray" />
                                    <span className="commentsBlock__likeCounter">{ Math.round(comment.id + (Math.random()*14*Math.random()*43))}</span>
                                    <Icons name="dislike" size="18" color="gray" />
                                </div>
                            </div>
                        </div>
                    )}
                </Carousel> 
            :
                <div className="commentsBlock__header commentsBlock__header_no">
                    {t('filmPage.commentsBlock.tofilm')} "{filmName}" {t('filmPage.commentsBlock.no')}
                </div>
            }
            
        </div>
    )
}

export default CommentsBlock;