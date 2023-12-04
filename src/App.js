import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart.js'
import User from './components/User';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/user' element={ <User />} />
        
        {/* <Cart /> */}
      </Routes>

    </div>
  )
};

export default App;
