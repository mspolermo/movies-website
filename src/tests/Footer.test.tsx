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
window.ResizeObserver = ResizeObserver;

test('Footer exists test', () => {

    render(
        <MemoryRouter>
            <App />     
        </MemoryRouter>
        
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
});
