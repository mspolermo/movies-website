import React, {FC, PropsWithChildren} from 'react';
import './RowSearchResult.scss'

interface RowResult{
    title: string,
    onClick: () => void;
}

const RowSearchResult: FC<PropsWithChildren<RowResult>> = ({title, onClick}) => {
    return (
        <div className='SearchRow'
             onClick={onClick}
        >
            <div className="SearchRow__result">
                <div className="SearchRow__title">
                    {title}
                </div>
            </div>

        </div>
    );
};

export default RowSearchResult;