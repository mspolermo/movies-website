import React, {FC, PropsWithChildren} from 'react';
import './TypeYear.scss'
import CreateList from "../../../CreateList/CreateList";
import Icons from "../../../Icons/Icons";
import {useTranslation} from "react-i18next";
import Button from "../../../UI/Buttons/Button/Button";
import {Carousel} from "../../../Carousel/Carousel";

interface TypeYearProps {
    allValues: number[];
    selectValues: number;
    handleChangeFilter: (item: number) => void;
}

const TypeYear: FC<PropsWithChildren<TypeYearProps>> = ({allValues, selectValues, handleChangeFilter}) => {
    const {t, i18n} = useTranslation();
    let isActive = selectValues === 0

    function createMobile() {
        return(
            <div className="FilterTypeYear__scroll">
                <Button
                    type='rounded'
                    color={!selectValues ? 'purple' : 'transparent' }
                    title={['Все годы']}
                    onClick={() => handleChangeFilter(0)}
                />
                <CreateList
                    items={allValues} renderItem={(value: number) =>
                    <Button
                        type='rounded'
                        color={selectValues === value ? 'purple' : 'transparent' }
                        title={[String(value)]}
                        key={value}
                        onClick={() => handleChangeFilter(value)}
                    />
                }/>
            </div>
        )
    }

    return (
        <div>
            <div className="FilterTypeYear">
                <div className="FilterTypeYear__content">

                    <div className="FilterTypeYear__selectAll"
                         onClick={() => handleChangeFilter(0)}
                    >
                        <div className={isActive ? 'FilterTypeYear__year_white' : 'FilterTypeYear__year selected-year'}>
                            {t('filters.filtersYears.allYears')}
                            {isActive ?
                                <Icons className='selected-year__circle-mark-checked' name='circle-checked' size='16'/> :
                                <Icons className='selected-year__circle-mark' name='circle' size='16'/>
                            }
                        </div>
                    </div>
                    <CreateList items={allValues} renderItem={(year: number) =>
                        <div key={year}
                             className={selectValues === year ? 'FilterTypeYear__year_white' : 'FilterTypeYear__year selected-year'}
                             onClick={() => handleChangeFilter(year)}
                        >
                            {year}
                            {selectValues === year ?
                                <Icons className='selected-year__circle-mark-checked' name='circle-checked' size='16'/> :
                                <Icons className='selected-year__circle-mark' name='circle' size='16'/>
                            }
                        </div>
                    }/>

                </div>

                <div className="FilterTypeYear__mobile">
                    <Carousel variant='filters' children={createMobile()}/>
                </div>
            </div>

        </div>
    );
};

export default TypeYear;