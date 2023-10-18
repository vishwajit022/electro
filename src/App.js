import React from 'react';
import './App.css';
import Uppernav from './components/Uppernav';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <Uppernav/>
        <hr className='uppernav__line'></hr>
        <Header/>
        


    </div>
  );
}

export default App;
