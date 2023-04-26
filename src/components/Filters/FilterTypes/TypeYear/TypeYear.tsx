import React, {FC, PropsWithChildren} from 'react';
import './TypeYear.scss'
import CreateList from "../../../CreateList/CreateList";
import Icons from "../../../Icons/Icons";

interface TypeYearProps {
    listYears: string[];
    selectedFiltersBy: string;
    selectedYear: (item: string) => void;
    setActiveBlock: (item: string) => void;
}

//todo: Почему не выбираются фильтры?

const TypeYear: FC<PropsWithChildren<TypeYearProps>> = ({listYears, selectedFiltersBy, selectedYear, setActiveBlock}) => {
   let isActive = selectedFiltersBy === ''

    return (
        <div>

            <div className="close_block"
                 onClick={() => setActiveBlock('')}
            ></div>

            <div className="FilterTypeYear">
                <div className="FilterTypeYear__content">

                    <div className="FilterTypeYear__selectAll"
                         onClick={() => selectedYear('')}
                    >
                        <div className={isActive ? 'FilterTypeYear__year_white' : 'FilterTypeYear__year selected-year'}>
                            Все годы
                            {isActive ?
                                <Icons className='selected-year__circle-mark-checked' name='circle-checked' size='16'/> :
                                <Icons className='selected-year__circle-mark' name='circle' size='16'/>
                            }
                        </div>
                    </div>
                    <CreateList items={listYears} renderItem={(year: string) =>
                        <div key={year}
                             className={selectedFiltersBy.includes(year) ? 'FilterTypeYear__year_white' : 'FilterTypeYear__year selected-year'}
                             onClick={() => selectedYear(year)}
                        >
                            {year}
                            {selectedFiltersBy.includes(year) ?
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