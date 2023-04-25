import React from 'react';
import Footer from './components/Footer/Footer';

import'./styles/App.scss'
import FilmCard from './components/FilmCard/FilmCard';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';

const  App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className='heading'>Welcome to Movies-Website!</h1>
        <div className="empty"></div>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default App;

