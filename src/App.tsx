import React from 'react';
import Footer from './components/Footer/Footer';
import'./styles/App.scss'
import Filters from "./components/Filters/Filters";
import Header from './components/Header/Header';
import MoviesPage from "./components/Pages/MoviesPage/MoviesPage";
import HeaderSearch from "./components/Header/HeaderSearch";
import FilmCard from "./components/FilmCard/FilmCard";

const  App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <MoviesPage/>

        <div className="empty">
          {/*<h1 className='heading'>Welcome to Movies-Website!</h1> */}
        </div>
          
      </div>

      <Footer />
    </div>
  );
}

export default App;

