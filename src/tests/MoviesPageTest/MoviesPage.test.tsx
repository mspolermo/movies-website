import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React, {useState} from "react";
import Filters from "../../components/Filters/Filters";
import {activeFilters, arrAllFiltersTest} from "../../types/filtersTypes";
import _ from "lodash";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";

jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            get: jest.fn(),
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
                response: { use: jest.fn(), eject: jest.fn() }
            }
        }))
    }
})

describe('MoviesPage test-suite', () => {

    let response:any;
    beforeEach( () => {
        response = {
            data: arrAllFiltersTest
        }})

    test('opening filters', () => {
        function setSelectedFilters(){
        }

        render(
            <BrowserRouter>
                <Filters activeFilters={activeFilters}
                         allFilters={arrAllFiltersTest}
                         selectedFilters={_.cloneDeep(activeFilters)}
                         setSelectedFilters={setSelectedFilters}/>

            </BrowserRouter>
        );
        const filters = screen.getAllByTestId("filter-button");
        const filtersResult = screen.getAllByTestId('filter-result');
        expect(filtersResult[2]).toHaveTextContent('')
        // userEvent.click(filters[2])
        // userEvent.click(filters[3])
        // expect(filtersResult[2]).toHaveTextContent('')
    })
})
