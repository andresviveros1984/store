import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
        <Header />
        <Home />
    </div>
  )
};

export default App;
