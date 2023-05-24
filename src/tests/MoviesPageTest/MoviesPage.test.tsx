import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import React, {useState} from "react";
import Filters from "../../components/Filters/Filters";
import {activeFilters, activeFiltersProps, arrAllFilters} from "../../types/filtersTypes";
import _ from "lodash";

test('opening filters',() => {
    axios.get.mockRetunrValue(response)
    const [selectedFilters, setSelectedFilters] = useState<activeFiltersProps>(_.cloneDeep(activeFilters));

    render(
        <Filters activeFilters={activeFilters}
                 allFilters={arrAllFilters}
                 selectedFilters={selectedFilters}
                 setSelectedFilters={setSelectedFilters}/>
    );
    const filters = screen.getByTestId('filter-button');
    const filterResult = screen.getByTestId('filter-result');
    expect(filterResult).toBeNull()
    userEvent.click(filters)
    expect(filterResult).toBeInTheDocument()
    userEvent.click(filters)
    expect(filterResult).toBeNull()
})