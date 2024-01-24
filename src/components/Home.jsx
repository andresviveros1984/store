import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { Box, Container } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Results from "./Results";
import { useParams } from "react-router-dom";

const Home = () => {
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
    // getCategories();
  }, [id]);

  function fetchAllProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => setResults(response));
  }

  // function getCategories() {
  //   fetch("https://dummyjson.com/products/categories")
  //     .then((res) => res.json())
  //     .then((response) => setCategories(response));
  // }

  function getSingleCategory(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((response) => setResults(response));
  }

  return (
    <Container>
      {console.log(results)}
      {/* {results.products ? (
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
          {results.products.map((result) => {
            return <Product product={result} />;
          })}
        </Box>
      ) : (
        <Box sx={{ display: "flex", width: "100vw", height: "100vh" ,alignItems:"center", justifyContent:'center'}}>
          <CircularProgress />
        </Box>
      )} */}
      <Results results={results} />
    </Container>
  );
};

export default Home;
