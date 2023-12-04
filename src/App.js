import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart.js'
import User from './components/User';
import { useState,useEffect } from "react";




function App() {

  const [results, setResults] = useState([]);
  const url = 'https://dummyjson.com/products';

  useEffect(() => {
    fetchAllProducts();
  }, [])

  function fetchAllProducts() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(response=>setResults(response));
  }


  return (
    <div className="App">
      {console.log(results)}
      <Header />
      <Routes>
        <Route path='/' element={<Home results={results} />} />
        <Route path='/user' element={<User />} />

        {/* <Cart /> */}
      </Routes>

    </div>
  )
};

export default App;
