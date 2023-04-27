import React from 'react';
import Footer from './components/Footer/Footer';
import'./styles/App.scss'
import Filters from "./components/Filters/Filters";
import Header from './components/Header/Header';

const  App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Filters/>
        <div className="empty">
          <h1 className='heading'>Welcome to Movies-Website!</h1> 
        </div>
          
      </div>

      <Footer />
    </div>
  );
}

export default App;

