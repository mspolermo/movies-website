import React, { FC } from "react";
import './CommentsCreatingBlock.scss'

interface CommentsCreatingBlockProps {

}

const CommentsCreatingBlock:FC<CommentsCreatingBlockProps> = () => {
    return (
        <div className="commentsCreatingBlock">
            <h2 className="commentsCreatingBlock__heading">Блок создания комментариев</h2>
            <p className="commentsCreatingBlock__text">К сожалению комментариев еще нет</p>
        </div>
    )
}

export default CommentsCreatingBlock;