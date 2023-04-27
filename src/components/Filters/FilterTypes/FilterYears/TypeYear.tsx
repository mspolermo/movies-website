import React, {FC, PropsWithChildren} from 'react';
import './TypeYear.scss'
import CreateList from "../../../CreateList/CreateList";
import Icons from "../../../Icons/Icons";

interface TypeYearProps {
    allValues: string[];
    selectValues: string;
    handleChangeFilter: (item: string) => void;
}

//todo: Почему не выбираются фильтры?

const TypeYear: FC<PropsWithChildren<TypeYearProps>> = ({allValues, selectValues, handleChangeFilter}) => {
   let isActive = selectValues === ''

    return (
        <div>
            <div className="FilterTypeYear">
                <div className="FilterTypeYear__content">

                    <div className="FilterTypeYear__selectAll"
                         onClick={() => handleChangeFilter('')}
                    >
                        <div className={isActive ? 'FilterTypeYear__year_white' : 'FilterTypeYear__year selected-year'}>
                            Все годы
                            {isActive ?
                                <Icons className='selected-year__circle-mark-checked' name='circle-checked' size='16'/> :
                                <Icons className='selected-year__circle-mark' name='circle' size='16'/>
                            }
                        </div>
                    </div>
                    <CreateList items={allValues} renderItem={(year: string) =>
                        <div key={year}
                             className={selectValues.includes(year) ? 'FilterTypeYear__year_white' : 'FilterTypeYear__year selected-year'}
                             onClick={() => handleChangeFilter(year)}
                        >
                            {year}
                            {selectValues.includes(year) ?
                                <Icons className='selected-year__circle-mark-checked' name='circle-checked' size='16'/> :
                                <Icons className='selected-year__circle-mark' name='circle' size='16'/>
                            }
                        </div>
                    }/>

                </div>
            </div>

        </div>
    );
};

export default TypeYear;