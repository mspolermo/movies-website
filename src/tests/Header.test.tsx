import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import App from "../App";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";


class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

describe('Header test-suite', () => {
    window.ResizeObserver = ResizeObserver;

    test('Link to main page check', () => {

        render(
            <MemoryRouter>
                <App />     
            </MemoryRouter>
            
        );

        const mainPageLink = screen.getByTestId('mainPageLink');
        fireEvent.click(mainPageLink);
        expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });
    test('Link to movies page check',  () => {

        render(
            <MemoryRouter>
                <App />     
            </MemoryRouter>
            
        );

        const moviesPageLink = screen.getByTestId('moviesPageLink');
        
        act(() => { userEvent.click(moviesPageLink) });
        expect(screen.getByTestId('moviesPage')).toBeInTheDocument();
    });
    test('Open drop-down-menu check', () => {

        render(
            <MemoryRouter>
                <App />     
            </MemoryRouter>
            
        );

        const seriesPageLink = screen.getByTestId('headerSeriesSection');
        act(() => { userEvent.hover(seriesPageLink) });
        expect(screen.getByTestId('headerDropDownMenu')).toBeVisible();
    });
    test('Open search page check', () => {

        render(
            <MemoryRouter>
                <App />     
            </MemoryRouter>
            
        );

        const search= screen.getByTestId('headerSerch');

        act(() => { userEvent.click(search) });
        expect(screen.getByTestId('searchPage')).toBeVisible();
        expect(screen.getByTestId('searchPage')).not.toHaveClass('searchBlock__hidden')
    });
});
