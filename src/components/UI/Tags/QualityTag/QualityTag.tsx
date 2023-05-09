import React, { FC } from "react";
import classes from './QualityTag.module.scss'

interface QualityTagProps {
    quality: 'FullHD' | 'HD' | '1080' | '720'
}

const QualityTag:FC<QualityTagProps> = ({quality}) => {
    return (
        <p className={classes.icon}>{quality}</p>
    )
}

export default QualityTag;
