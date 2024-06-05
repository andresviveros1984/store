import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { Box, Container } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Results from "./Results";
import { useParams } from "react-router-dom";
import CartDialogue from "./CartDialogue";
import Authenticated from '../components/Auth/Authenticated';


const Home = ({handleFavourites, favourites,cartCount,setCartCount,cartItems,cartItem,setCartItems}) => {
  const [results, setResults] = useState([]);
  const url = "https://dummyjson.com/products";

  // const [categories,setCategories] = useState([]);
  // const [singleCategory,setSingleCategory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleCategory(id);
    } else {
      fetchAllProducts();
    }
  }, [id]);

  function fetchAllProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => setResults(response));
  }

  function getSingleCategory(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((response) => setResults(response));
  }

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  return (
    <Container>
      <Results results={results} handleFavourites={handleFavourites} favourites={favourites}/>
      {/* <CartDialogue 
      cartCount={cartCount} 
      setCartCount={setCartCount} 
      cartItems={cartItems} cartItem={cartItem}
       setCartItems={setCartItems}/> */}
      
    </Container>
  );
};

export default Home;
