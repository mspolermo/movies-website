import React, { FC, useEffect, useState } from "react";
import './CommentsCreatingBlock.scss'
import { IComment, ISoretedComments } from "../../../../../../../types/filmPageTypes";
import Icons from "../../../../../../Icons/Icons";
import { useTypedSelector } from "../../../../../../../hooks/useTypedSelector";
import Button from "../../../../../../UI/Buttons/Button/Button";
import axios from "axios";
import Search from "../../../../../../UI/Inputs/Search/Search";

interface CommentsCreatingBlockProps {
    filmId: number;
}

type CommentsStructure = [
    [ parent: IComment,
    childrens: IComment[] | []
    ]
];

const CommentsCreatingBlock:FC<CommentsCreatingBlockProps> = ({filmId}) => {

    const[sortedComments, setSortedComments] = useState<CommentsStructure | []>([]);
    const [headReview, setHeadReview] = useState('');
    const [bodyReview, setBodyReview] = useState('');

    useEffect( () => {
        fetchComments()
    }, [])

    async function fetchComments() {
        const response = await axios.get(`http://localhost:5000/comments/${filmId}`);
        setSortedComments(response.data.reverse())
    };

    async function createReview() {

        let bodyParameters = {
            "header": headReview,
            "value": bodyReview
        };

        const responseAuth = await axios.post(`http://localhost:5000/login`,
        {
            "email": "admin@admin.com",
            "password": "1234567891011"
        }
        );

        const sendRewiev = await axios.post(`http://localhost:5000/${filmId}`, bodyParameters, {
            headers: { Authorization: `Bearer ${responseAuth.data.token['token']}` }
        });
        fetchComments();
    };

    function openCreateReview (e:React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.parentElement?.children[1].classList.remove('commentsCreatingBlock__form_hidden');
        e.currentTarget.remove();
    }

    return (
        <div className="commentsCreatingBlock">
            
            <div className="commentsCreatingBlock__creating">
                    <Button title={['Написать отзыв']} color="transparent" type="ultraWide" onClick={openCreateReview}/>
                <div className="commentsCreatingBlock__form commentsCreatingBlock__form_hidden">
                    <Search result={[]} renderResult={() => {return []}} placeholder='Введите название отзыва' searchQuery={headReview} setSearchQuery={setHeadReview} cl={false} search={true}/>
                    <Search result={[]} renderResult={() => {return []}} placeholder='Напишите отзыв' searchQuery={bodyReview} setSearchQuery={setBodyReview} cl={false} search={true}/>
                    <Button title={['Создать отзыв']} color="transparent" onClick={createReview}/>
                </div>
            </div>

            {(sortedComments.length > 0) && <div className="commentsCreatingBlock__existsComments">
                
            {sortedComments.map( (tree) =>

                    <div className="commentsCreatingBlock__tree" key={tree[0].id}>

                        <div className="commentsCreatingBlock__rewiev" >
                            <div className="commentsCreatingBlock__left">
                                <Icons name="person" size="60" color="gray" />
                                <div className="commentsCreatingBlock__text">Chel{tree[0].id}</div>
                                <div className="commentsCreatingBlock__text">{ (new Date (tree[0].createdAt)).toLocaleDateString() }</div>        
                            </div>
                            <div className="commentsCreatingBlock__right">
                                <div className="commentsCreatingBlock__top">
                                    <div className="commentsCreatingBlock__rewiev-header">{tree[0].header}</div>
                                    <div className="commentsCreatingBlock__rewiev-body">{tree[0].value}</div>
                                </div>
                                <div className="commentsCreatingBlock__bottom">
                                    
                                    <div className="commentsCreatingBlock__rewiev-like">
                                        <Icons name="like" size="18" color="gray" />
                                        <span className="commentsCreatingBlock__likeCounter">{36}</span>
                                        <Icons name="dislike" size="18" color="gray" />
                                    </div>
                                    <Button title={['Комментировать']} color="transparent"/>
                                </div>
                            </div>
                        </div>

                        { (tree[1].length > 0) && tree[1].map(child => 
                        
                        <div className="commentsCreatingBlock__comment" key={child.id} >
                            <div className="commentsCreatingBlock__comment-left">
                                <Icons name="person" size="30" color="gray" />
                                <div className="commentsCreatingBlock__text">Chel{child.id}</div>
                                <div className="commentsCreatingBlock__text">{ (new Date (child.createdAt)).toLocaleDateString() }</div>  
                            </div>
                            <div className="commentsCreatingBlock__comment-right">
                                <div className="commentsCreatingBlock__comment-body">{child.value}</div>
                                <div className="commentsCreatingBlock__comment-like">
                                        <Icons name="like" size="18" color="gray" />
                                        <span className="commentsCreatingBlock__likeCounter">{ Math.round(tree[0].id + (Math.random()*14*Math.random()*43))}</span>
                                        <Icons name="dislike" size="18" color="gray" />
                                    </div>    
                            </div>
                        </div>
                        )
                        }
                    </div>
                )}

            </div>}

            {(sortedComments.length < 1) && <p className="commentsCreatingBlock__text commentsCreatingBlock__text_last">К сожалению отзывов еще нет</p>}
        </div>
    )
}

export default CommentsCreatingBlock;