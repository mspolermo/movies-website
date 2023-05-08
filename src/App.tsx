import React from 'react';
import Footer from './components/Footer/Footer';
import './styles/App.scss'
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PersonPage from "./components/Pages/ActorPage/PersonPage";
import Filters from "./components/Filters/Filters";
import MoviesPage from "./components/Pages/MoviesPage/MoviesPage";
import HeaderSearch from "./components/Header/HeaderSearch/HeaderSearch";
import FilmCard from "./components/FilmCard/FilmCard";
import { Carousel } from './components/Carousel/Carousel';
import FilmPage from './components/Pages/FilmPage/FilmPage';


const App = () => {
    return (

        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/movies-website/person/:id'} element={<PersonPage/>}/>
                    <Route path={'/movies-website/film/:id'} element={<FilmPage/>}/>
                    <Route path={'/movies-website/films/'} element={<MoviesPage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>

    );
}

export default App;

