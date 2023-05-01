import React, {FC, PropsWithChildren, useState} from 'react';
import './Sorting.scss'
import Icons from "../Icons/Icons";
import CreateList from "../CreateList/CreateList";
import {useTranslation} from "react-i18next";

interface Sorting {
    options: string[];
    sortValue: string;
    setSortValue: (value:string) => void
}

const Sorting: FC<PropsWithChildren<Sorting>> = ({options, sortValue, setSortValue}) => {
    const {t, i18n} = useTranslation();
    const [active, setActive] = useState(false)

    function changeSettings(option:string) {
        setActive(!active)
        setSortValue(option)
    }

    return (
        <div className='Sorting'>

            <div className="Sorting__content">

                <div className="Sorting__block"
                >
                    <div className="Sorting__select select"
                         onClick={() => setActive(!active)}
                    >
                        <div className="select__active">
                            <Icons className='select__icon-sorting' name='sorting' size='16'/>
                            <div className="select__title">
                                {t(`sorting.sort.${sortValue}`)}
                            </div>
                            <Icons className={active ? 'select__arrow-up' : 'select__arrow-down'} name='chevron-down' size='20'/>
                        </div>

                        {active && <>
                            <div className="select__close-block"
                                 onClick={() => setActive(false)}
                            ></div>

                            <div className="select__value">
                                <div className="select__subtitle">
                                    {t('sorting.title')}
                                </div>
                                <CreateList items={options} renderItem={(option: string) =>
                                    <div className={sortValue === option ? 'select__option-active': 'select__option'}
                                         key={option}
                                         onClick={() => changeSettings(option)}
                                    >
                                        {t(`sorting.sort.${option}`)}
                                    </div>
                                }/>
                            </div>
                        </>
                            }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Sorting;