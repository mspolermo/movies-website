import React, {FC, PropsWithChildren, useState} from 'react';
import './TypeSearch.scss'
import Search from "../../../UI/Inputs/Search/Search";
import RowSearchResult from "../../../Search/RowSearchResult/RowSearchResult";

interface TypeSearchProps {
    handleChangeFilter: (item:string) => void,
}

interface Result {
    name: string,
    key: string,
}

const TypeSearch: FC<PropsWithChildren<TypeSearchProps>> = ({handleChangeFilter}) => {
    const [searchResults, setSearchResult] = useState<Result[]>([{name: 'name', key: 'key'}])
    const [searchQuery, setSearchQuery] = useState('')
    
    function renderResult(value: Result){
        return (<RowSearchResult title={value.name} onClick={() => handleChangeFilter(value.name)}/>
        )
    }

    return (
        <>
            <div className='TypeSearch'>
                <div className="TypeSearch__content">
                    <Search result={searchResults}
                            renderResult={renderResult}
                            placeholder={''} cl={true}
                            handleClear={() => handleChangeFilter('')}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}/>
                </div>
            </div>
        </>
    );
};

export default TypeSearch;