import React from 'react';
import './App.css';
import './img/logo.png';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import AppMenu from './components/AppMenu';



function App() {
  return (
   <Router>   
    <div className="App">
    <AppMenu/>
    <Routes/>
    <h1 style={{color:'white',backgroundColor:'black'}}>Para comecar digite /inicio apos localhost:3000</h1>
    </div> 
    </Router>    
  )
}

export default App;
