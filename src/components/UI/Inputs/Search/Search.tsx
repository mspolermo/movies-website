import React, {FC, PropsWithChildren, useState} from 'react';
import Icons from "../../../Icons/Icons";
import './Search.scss'
import ButtonReset from "../../../Filters/ButtonReset/ButtonReset";

interface SearchProps<T> {
    result: T[],
    renderResult: (item: T) => React.ReactNode,
    handleClear?: () => void,
    placeholder: string,
    cl: boolean,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void
}

export default function Search<T> (
    {
        result,
        renderResult,
        handleClear,
        placeholder,
        searchQuery,
        setSearchQuery,
        cl = false,
    }: SearchProps<T>
    ) {


    return (
        <div className='Search'>
            <div className="Search__content">
                <div className="Search__input input">

                    <div className="input__block">
                        <div className={searchQuery ? "input__title_small" : 'input__title'}>
                            {placeholder}
                        </div>
                        <input className='input__input'
                               type="text"
                               placeholder=''
                               value={searchQuery}
                               onChange={e => setSearchQuery(e.target.value)}
                               onClick={() => setSearchQuery(' ')}
                        />
                        <div className="input__icons"
                             onClick={() => setSearchQuery('')}
                        >
                            {searchQuery ? <Icons className="input__cross" name='cross' size='24'/>
                                : <Icons className="input__search" name='search' size='24'/>}

                        </div>
                    </div>

                </div>
            </div>

            {cl &&
                <div className="Search__btn-reset btn-reset"
                     onClick={handleClear}
                >
                    <div className="btn-reset__text">
                        Очистить результат
                    </div>
                    <div className="btn-reset__cross">
                        <Icons className="btn-reset__icon-cross" name='cross' size='13'/>
                    </div>
                </div>
            }

            <div className="Search__result">
                {result.map(renderResult)}
            </div>
        </div>
    )
};
