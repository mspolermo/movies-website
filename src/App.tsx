import React from 'react';
import Footer from './components/Footer/Footer';
import './styles/App.scss'
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PersonPage from "./components/Pages/ActorPage/PersonPage";
import Filters from "./components/Filters/Filters";
import MoviesPage from "./components/Pages/MoviesPage/MoviesPage";


const App = () => {
    return (
        // <div>
        //   <Header />
        //   <div className="container">
        //     {/*<MoviesPage/>*/}
        //       <ActorPage/>
        //
        //     <div className="empty">
        //       {/*<h1 className='heading'>Welcome to Movies-Website!</h1> */}
        //     </div>
        //   </div>
        //   <Footer />
        // </div>
        <div>
            <Header/>

            <BrowserRouter>
                <Routes>
                    <Route path={'/movies-website/person/:id'} element={<PersonPage/>}/>
                    <Route path={'/movies-website/films/'} element={<MoviesPage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>

    );
}

export default App;

