import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import './CommentsCreatingBlock.scss';
import { CommentsCreatingBlockProps } from "../../../../../../../types/filmPageTypes";
import { CommentsStructure } from "../../../../../../../types/filmPageTypes";

import Button from "../../../../../../UI/Buttons/Button/Button";
import Comment from "./Comment/Comment";
import Review from "./Review/Review";
import MyInput from "../../../../../../UI/Inputs/MyInput/MyInput";

const CommentsCreatingBlock:FC<CommentsCreatingBlockProps> = ({filmId}) => {
    const {t, i18n} = useTranslation();

    const[sortedComments, setSortedComments] = useState<CommentsStructure | []>([]);
    const [headReview, setHeadReview] = useState('');
    const [bodyReview, setBodyReview] = useState('');
    const [textComment, setTextComment]  = useState('');
    const [parentId, setParentId] = useState(0);

    useEffect( () => {
        fetchComments();
    }, [])

    async function fetchComments() {
        const response = await axios.get(`http://localhost:5000/comments/${filmId}`);
        setSortedComments(response.data.reverse())
    };

    function openCreateReview (e:React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.parentElement?.parentElement?.children[1].classList.remove('commentsCreatingBlock__review-form_hidden');
        e.currentTarget.parentElement?.classList.add('commentsCreatingBlock__btn_hidden');
    };
    async function createReview (e:React.MouseEvent<HTMLDivElement>) {

        if ((headReview == '') || (bodyReview == '') ) {
            alert(t('internalPage.commentsCreatingBlock.alert'));
            return;
        }

        e.currentTarget.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.remove('commentsCreatingBlock__btn_hidden');
        e.currentTarget.parentElement?.parentElement?.classList.add('commentsCreatingBlock__review-form_hidden');

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

        await axios.post(`http://localhost:5000/${filmId}`, bodyParameters, {
            headers: { Authorization: `Bearer ${responseAuth.data.token['token']}` }
        });

        fetchComments();
        setHeadReview('');
        setBodyReview('');

    };

    function openCreateComment (e:React.MouseEvent<HTMLDivElement>) {
        setParentId(Number(e.currentTarget.parentElement?.lastChild?.textContent));
        e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.children[1].classList.toggle('commentsCreatingBlock__comment-form_hidden');
    }
    async function createComment (e:React.MouseEvent<HTMLDivElement>) {

        if (textComment == '') {
            alert(t('internalPage.commentsCreatingBlock.alert'));
            return;
        }

        e.currentTarget.parentElement?.parentElement?.classList.add('commentsCreatingBlock__comment-form_hidden')

        let bodyParameters = {
            "value": textComment,
            "parentId": parentId
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

        setTextComment('')

    };

    return (
        <div className="commentsCreatingBlock">
            
            <div className="commentsCreatingBlock__creating">

                <div className="commentsCreatingBlock__btn commentsCreatingBlock__btn_first">
                    <Button 
                        title={['internalPage.commentsCreatingBlock.writeReview']} 
                        color="transparent" 
                        type="ultraWide" 
                        onClick={openCreateReview}
                    />
                </div>

                <div className="commentsCreatingBlock__review-form commentsCreatingBlock__review-form_hidden">
                    
                    <div className="commentsCreatingBlock__input">
                        <MyInput
                            result={[]} 
                            renderResult={() => {return []}} 
                            placeholder={t('internalPage.commentsCreatingBlock.reviewName')} 
                            searchQuery={headReview} 
                            setSearchQuery={setHeadReview} 
                            cl={false} search={true}
                        />
                    </div>

                    <div className="commentsCreatingBlock__input">
                        <MyInput
                            result={[]} 
                            renderResult={() => {return []}} 
                            placeholder={t('internalPage.commentsCreatingBlock.reviewText')} 
                            searchQuery={bodyReview} 
                            setSearchQuery={setBodyReview} 
                            cl={false} search={true}
                        />
                    </div>

                    <div className="commentsCreatingBlock__btn">
                        <Button 
                            title={['internalPage.commentsCreatingBlock.createReview']} 
                            color="transparent" 
                            onClick={createReview}/>
                    </div>
                    
                </div>
            </div>

            {(sortedComments.length > 0) && <div className="commentsCreatingBlock__existsComments">
                
                {sortedComments.map( (tree) =>

                    <div className="commentsCreatingBlock__tree" key={tree[0].id}>
                        
                        <Review review={tree[0]} openCreateComment={openCreateComment} />

                        <div className="commentsCreatingBlock__comment-form commentsCreatingBlock__comment-form_hidden" >
                            
                            <div className="commentsCreatingBlock__input">
                                <MyInput
                                result={[]} 
                                renderResult={() => {return []}} 
                                placeholder={t('internalPage.commentsCreatingBlock.commentText')} 
                                searchQuery={textComment} 
                                setSearchQuery={setTextComment} 
                                cl={false} search={true}
                            />
                            </div>

                            <div className="commentsCreatingBlock__btn">
                                <Button 
                                    title={['internalPage.commentsCreatingBlock.send']} 
                                    color="transparent" 
                                    onClick={createComment}/>
                            </div>

                        </div>

                        { (tree[1].length > 0) && tree[1].map(child => 
                            <Comment child={child} key={child.id}/>
                        )}

                    </div>
                )}

            </div>}

            {(sortedComments.length < 1) && <p className="commentsCreatingBlock__text commentsCreatingBlock__text_last">
                {t('internalPage.commentsCreatingBlock.no')}
            </p>}

        </div>
    );
};

export default CommentsCreatingBlock;