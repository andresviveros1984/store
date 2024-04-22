import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Category from './components/Category';
import Cart from './components/Cart.js'
import User from './components/User';
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import TemporaryDrawer from './components/SideBar';
import Authenticated from './components/Auth/Authenticated';

// import { Category } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#09090A"
    },
    secondary: {
      main: "#F6F6F6"
    },
    cartCol: {
      main: "#ff0000"
    }
  }
});


function App() {

  const [categories, setCategories] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    getCategories();
  }, [])

  function getCategories() {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header categories={categories} cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<Authenticated><User /></Authenticated>} />
          <Route path='/:id' element={<Home />} />
          <Route path='/:category/:id'
            element={<Authenticated><ProductDetails
              cartCount={cartCount} setCartCount={setCartCount}
              cartItems={cartItems} setCartItems={setCartItems}
              cartItem={cartItem} setCartItem={setCartItem} /></Authenticated>}
          />
          <Route path='/cart'
            element={<Authenticated><Cart
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartItems={cartItems}
              cartItem={cartItem} setCartItems={setCartItems} /></Authenticated>} />
        </Routes>
      </div>
    </ThemeProvider>
  )
};

export default App;
