import React from 'react';
import './App.css';
import './img/logo.png';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
   <Router>   
    <div className="App">
    
    <Routes/>
    </div>
    </Router>    
  )
}

export default App;
