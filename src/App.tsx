import React from 'react';
import Footer from './components/Footer/Footer';
import'./styles/App.scss'
import FilmCard from './components/FilmCard/FilmCard';
import Header from './components/Header/Header';

const  App = () => {
  return (
    <div>
      <Header />
      <h1 className='heading'>Welcome to Movies-Website!</h1>
      <Footer />
    </div>
  );
}

export default App;

