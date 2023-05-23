import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../store';


class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

describe('Router test-suite', () => {
    window.ResizeObserver = ResizeObserver;

    test('Route to main page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/main']}>
                <App /> 
            </MemoryRouter> 
        );

        expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });
    test('Route to Movies page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/films/']}>
                <App />
            </MemoryRouter>  
        );

        expect(screen.getByTestId('moviesPage')).toBeInTheDocument();
    });
    test('Route to Film page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/film/0']}>
                <Provider store={store}> 
                    <App />
                </Provider>
            </MemoryRouter>  
        );

        expect(screen.getByTestId('filmPage')).toBeInTheDocument();
    });
    test('Route to Person page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/person/0']}>
                <Provider store={store}> 
                    <App />
                </Provider>
            </MemoryRouter>  
        );

        expect(screen.getByTestId('personPage')).toBeInTheDocument();
    });
    test('Route to Admin page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/admin/']}>
                <Provider store={store}> 
                    <App />
                </Provider>
            </MemoryRouter>  
        );

        expect(screen.getByTestId('adminPage')).toBeInTheDocument();
    });
});