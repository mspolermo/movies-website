import React from 'react';
import Footer from './components/Footer/Footer';
import'./styles/App.scss'
import Filters from "./components/Filters/Filters";
import Header from './components/Header/Header';
import ActorPage from "./components/ActorPage/ActorPage";

const  App = () => {
  return (
    <div>
      <Header />
      <h1 className='heading'>Welcome to Movies-Website!</h1>
        <Filters/>
        <div>
            <ActorPage/>
        </div>
      <Footer />
    </div>
  );
}

export default App;

