import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PersonPage from "../Pages/ActorPage/PersonPage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import FilmPage from "../Pages/FilmPage/FilmPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/movies-website/person/:id'} element={<PersonPage/>}/>

                <Route path={'/movies-website/films/'} element={<MoviesPage/>}/>

                <Route path={'/movies-website/films/genre/:genre'} element={<MoviesPage/>}/>
                <Route path={'/movies-website/films/country/:country'} element={<MoviesPage/>}/>
                <Route path={'/movies-website/films/year/:year'} element={<MoviesPage/>}/>

                <Route path={'/movies-website/film/:id'} element={<FilmPage/>}/>

                {/*/!*todo: переход на главную*!/*/}
                {/*<Route path={'/movies-website/'} element={</>}/>*/}
                {/*<Route path={'*'} element={</>}/>*/}
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Router;