import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { Box, Container } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Results from "./Results";
import { useParams } from "react-router-dom";
import CartDialogue from "./CartDialogue";


const Home = ({handleFavourites, favourites}) => {
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

  return (
    <Container>
      <Results results={results} handleFavourites={handleFavourites} favourites={favourites}/>
      {/* put cart modal here. */}
      {/* <CartDialogue /> */}
    </Container>
  );
};

export default Home;
