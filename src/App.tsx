import React from 'react';
import Footer from './components/Footer/Footer';
import'./styles/App.scss'
import Filters from "./components/Filters/Filters";
import Header from './components/Header/Header';
import MoviesPage from "./components/Pages/MoviesPage/MoviesPage";
import HeaderSearch from "./components/Header/HeaderSearch/HeaderSearch";
import FilmCard from "./components/FilmCard/FilmCard";
import { Carousel } from './components/Carousel/Carousel';
import FilmPage from './components/Pages/FilmPage/FilmPage';


const  App = () => {
    return (
        <div>
            <Header />
            <FilmPage />
            <Footer />
        </div>
    );
}

export default App;

