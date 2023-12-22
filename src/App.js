import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Category from './components/Category';
import Cart from './components/Cart.js'
import User from './components/User';
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { Category } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#09090A"
    },
    secondary:{
      main:"#F6F6F6"
    }
  }
});


function App() {

  const [results, setResults] = useState([]);
  const url = 'https://dummyjson.com/products';

  const [categories,setCategories] = useState([]);
  const [singleCategory,setSingleCategory] = useState([]);

  useEffect(() => {
    fetchAllProducts();
    getCategories();
  }, [])

  function fetchAllProducts() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(response => setResults(response));
  }

  function getCategories() {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(response => setCategories(response) )
  }

  function getSingleCategory(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then(response => setSingleCategory(response));
      
  }

  return (
    <ThemeProvider theme={theme}>
      {/* {console.log(results)} */}
      {console.log(singleCategory)}
      <div className="App">
        <Header categories={categories} getSingleCategory={getSingleCategory}/>
        <Routes>
          <Route path='/' element={<Home results={results} />} />
          <Route path='/user' element={<User />} />
          <Route path='/category' element={<Category category={singleCategory}/>}/>
          {/* <Cart /> */}
        </Routes>
      </div>
    </ThemeProvider>
  )
};

export default App;
