import React, {FC, PropsWithChildren} from 'react';
import {RatingRangeSlider} from "../../../RatingRangeSlider/RatingRangeSlider";
import './TypeRangeSlider.scss'

interface RangeSliderProps {
    handleChangeFilter: (item:number) => void,
    blockName?: string
}

const TypeRangeSlider: FC<PropsWithChildren<RangeSliderProps>> = ({handleChangeFilter, blockName}) => {
    return (
        <>
            <div className='RangeSlider'>
                <div className="RangeSlider__content">
                    <RatingRangeSlider filterBy={blockName === 'rating' ? 'by-rating' : 'by-rating-quantity'}
                                       handleChangeValue={handleChangeFilter}
                    />
                </div>
            </div>
        </>
    );
};

export default TypeRangeSlider;