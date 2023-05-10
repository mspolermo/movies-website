import React, { FC } from "react";
import './SloganBlock.scss';
import { SloganBlockProps } from "../../../../types/filmPageTypes";
import Icons from "../../../Icons/Icons";

const SloganBlock:FC<SloganBlockProps> = ({slogan}) => {
    return (
        <div>
            {(slogan) && <div className="sloganBlock">
                <Icons name="slogan-open" color="white" size="70" strokeWidth="0"/>
                <p className="sloganBlock__text">{slogan}</p>
                <Icons name="slogan-close" color="white" size="70" strokeWidth="0"/>   
            </div>}
        </div>
    );
};

export default SloganBlock;

