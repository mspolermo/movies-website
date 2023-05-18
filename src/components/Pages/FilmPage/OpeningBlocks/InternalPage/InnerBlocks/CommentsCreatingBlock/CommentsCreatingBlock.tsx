import React, { FC, useEffect, useState } from "react";
import './CommentsCreatingBlock.scss'
import { IComment, ISoretedComments } from "../../../../../../../types/filmPageTypes";
import Icons from "../../../../../../Icons/Icons";
import { useTypedSelector } from "../../../../../../../hooks/useTypedSelector";
import Button from "../../../../../../UI/Buttons/Button/Button";

interface CommentsCreatingBlockProps {
comments: IComment [];
}

type CommentsStructure = [
    [ parent: IComment,
    childrens: IComment[] | []
    ]
];

const initCommentsStructure: CommentsStructure = [
    [
        {
            id: 0,
            header: "",
            value: "",
            authorId: 0,
            parentId: null,
            createdAt: new Date(),
            filmId: 0
        },
        [
            {
                id: 0,
                header: "",
                value: "",
                authorId: 9999999,
                parentId: 0,
                createdAt: new Date(),
                filmId: 0
            },
            {
                id: 0,
                header: "",
                value: "",
                authorId: 9999999,
                parentId: 0,
                createdAt: new Date(),
                filmId: 0
            }
    ]
    ]
]

const CommentsCreatingBlock:FC<CommentsCreatingBlockProps> = ({comments}) => {

    
    const {commentsCreatingBlockStatus} = useTypedSelector( state => state.commentsCreatingBlock);
    
    const[sortedComments, setSortedComments] = useState<CommentsStructure | []>([]);

    const treeRef = React.useRef() as React.RefObject<HTMLDivElement>;
    
    useEffect( () => {
        if ((comments.length > 0 ) && (commentsCreatingBlockStatus)) {

            let sorting: CommentsStructure = [
                [
                    {
                        id: 0,
                        header: "",
                        value: "",
                        authorId: 0,
                        parentId: null,
                        createdAt: new Date(),
                        filmId: 0
                    },
                    [
                        {
                            id: 0,
                            header: "",
                            value: "",
                            authorId: 9999999,
                            parentId: 0,
                            createdAt: new Date(),
                            filmId: 0
                        },
                        {
                            id: 0,
                            header: "",
                            value: "",
                            authorId: 9999999,
                            parentId: 0,
                            createdAt: new Date(),
                            filmId: 0
                        }
                ]
                ]
            ];

            for (let i =0; i<comments.length; i++) {

                let childrenComments = [];

                if (comments[i].parentId === null) {

                    for (let j = 0; j<comments.length; j++) {
                        if (comments[j].parentId == comments[i].id ) {
                            childrenComments.push(comments[j])
                        }
                    }

                    sorting.push( [ comments[i], childrenComments ])
                }

            }
            sorting.shift();
            setSortedComments(sorting);
        }
    },[]);


    useEffect( () => {


        if ((comments.length > 0 ) && (commentsCreatingBlockStatus)) {

            let sorting: CommentsStructure = [
                [
                    {
                        id: 0,
                        header: "",
                        value: "",
                        authorId: 0,
                        parentId: null,
                        createdAt: new Date(),
                        filmId: 0
                    },
                    [
                        {
                            id: 0,
                            header: "",
                            value: "",
                            authorId: 9999999,
                            parentId: 0,
                            createdAt: new Date(),
                            filmId: 0
                        },
                        {
                            id: 0,
                            header: "",
                            value: "",
                            authorId: 9999999,
                            parentId: 0,
                            createdAt: new Date(),
                            filmId: 0
                        }
                ]
                ]
            ];

            for (let i =0; i<comments.length; i++) {

                let childrenComments = [];

                if (comments[i].parentId === null) {

                    for (let j = 0; j<comments.length; j++) {
                        if (comments[j].parentId == comments[i].id ) {
                            childrenComments.push(comments[j])
                        }
                    }

                    sorting.push( [ comments[i], childrenComments ])
                }

            }
            sorting.shift();
            setSortedComments(sorting);
        }
        


    }, [comments, commentsCreatingBlockStatus]);
    console.log(sortedComments)

    return (
        <div className="commentsCreatingBlock">
            <div className="commentsCreatingBlock__creating"></div>

            {(sortedComments.length > 0) && <div className="commentsCreatingBlock__existsComments" ref={treeRef} >
                
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
                                        <span className="commentsCreatingBlock__likeCounter">{ Math.round(tree[0].id + (Math.random()*14*Math.random()*43))}</span>
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




            {(comments.length < 1) && <p className="commentsCreatingBlock__text commentsCreatingBlock__text_last">К сожалению отзывов еще нет</p>}
        </div>
    )
}

export default CommentsCreatingBlock;