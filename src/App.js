import React from 'react';
import './App.css';
import Uppernav from './components/Uppernav';
import Header from './components/Header';
import BelowHeader from './components/BelowHeader';
import ImageLine from './components/ImageLine';
import BelowImageLine from './components/BelowImageLine';
import TwoGrid from './components/TwoGrid';

function App() {
  return (
    <div className="page__1">
        <Uppernav/>
        <hr className='uppernav__line'></hr>
        <Header/>
        <BelowHeader/>
        <ImageLine />
        <BelowImageLine/>
        <TwoGrid/>


    </div>
  );
}

export default App;
