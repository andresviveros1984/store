import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { Box, Container } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

const Home = ({ results }) => {
  return (
    <Container sx={{bgcolor: "red",display: "flex", flexDirection: "row"}}>
      {results.products ? (
        <Box>
          <p>Products</p>
          {results.products.map((result) => {
            return <Product product={result} />;
          })}
        </Box>
      ) : (
        <Box sx={{ display: "flex", width: "100vw", height: "100vh" ,alignItems:"center", justifyContent:'center'}}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default Home;
