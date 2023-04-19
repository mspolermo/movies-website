import React from 'react';
import Footer from './components/Footer/Footer';
import'./styles/App.scss'
import FilmCard from './components/FilmCard/FilmCard';

const  App = () => {
  return (
    <div>
      <h1 className='header'>Welcome to Movies-Website!</h1>
      <Footer />
    </div>
  );
}

export default App;

