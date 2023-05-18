import React, {useState} from 'react';
import Icons from "../../../Icons/Icons";
import './Search.scss'

// В result можно передать пустой массив([])
// В renderResult стрелочную функцию, возвращающую пустой массив

interface SearchProps<T> {
    result: T[],
    renderResult: (item: T) => React.ReactNode,
    handleClear?: () => void,
    placeholder: string,
    cl: boolean,
    search: boolean,
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
        search = true
    }: SearchProps<T>
    ) {
    const [active, setActive ] = useState(false)

    return (
        <div className='Search'>
            <div className="Search__content">
                <div className="Search__input input">

                    <div className="input__block">
                        {!search && <Icons className='input__icon' name='person' size='30'/>}
                        {search ? (<div className={active ? "input__title_small" : 'input__title'}>
                            {placeholder}
                        </div>) :
                            (<div className={active ? "input__title-mail_small" : 'input__title-mail'}>
                                {placeholder}
                            </div>)}

                        <input className={search ? 'input__input' :'input__input-mail'}
                               type="text"
                               placeholder=''
                               value={searchQuery}
                               onChange={e => setSearchQuery(e.target.value)}
                               onClick={() => setActive(true)}
                        />
                        {
                            search &&
                            <div className="input__icons"
                                           onClick={() => setSearchQuery('')}
                            >
                                {searchQuery ? <Icons className="input__cross" name='cross' size='24'/>
                                    : <Icons className="input__search" name='search' size='24'/>}

                            </div>
                        }
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

            {
                search &&
                <div className={cl ? "Search__result" : "Search__result-column"}>
                    {result.map(renderResult)}
                </div>
            }

        </div>
    )
};
