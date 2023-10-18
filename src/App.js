import React from 'react';
import './App.css';
import Uppernav from './components/Uppernav';
import Header from './components/Header';
import BelowHeader from './components/BelowHeader';
import ImageLine from './components/ImageLine';

function App() {
  return (
    <div className="page__1">
        <Uppernav/>
        <hr className='uppernav__line'></hr>
        <Header/>
        <BelowHeader/>
        <ImageLine />
        


    </div>
  );
}

export default App;
