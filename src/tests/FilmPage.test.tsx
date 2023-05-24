import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../store';
import { act } from 'react-dom/test-utils';
import axios from "axios";
    
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

describe('FilmPage test-suite', () => {
    window.ResizeObserver = ResizeObserver;

    test('Open Film page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/film/1']}>
                <Provider store={store}> 
                    <App />
                </Provider>
            </MemoryRouter>  
        );

        expect(screen.getByTestId('filmPage')).toBeInTheDocument();
    });

    // test('Internal blocks exist check', async () => {
    //     render(

    //         <MemoryRouter initialEntries={['/movies-website/film/1']}>
    //             <Provider store={store}> 
    //                 <App />
    //             </Provider>
    //         </MemoryRouter>  
    //     );

    //     await act(async () => {
    //         setTimeout(() => {}, 2000)
            
    //     });

    //     expect(screen.getByTestId('summaryBlock')).toBeInTheDocument();
    // });
});