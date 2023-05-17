import React, { FC } from "react";
import classes from './QualityTag.module.scss'
import { QualityTagProps } from "../../../../types/UiTypes";

const QualityTag:FC<QualityTagProps> = ({quality}) => {
    return (
        <p className={classes.icon}>{quality}</p>
    )
}

export default QualityTag;