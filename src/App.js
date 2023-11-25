import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
    </div>
  )
};

export default App;
