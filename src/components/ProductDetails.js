import React, { useEffect, useState } from 'react';
import styledC from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ProductDetails = () => {

    let { category, id } = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [error, setError] = useState(null);

    const getProductDetails = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (response.ok !== true) {
                throw new Error("Product Not available to view");
            }

            const data = await response.json();
            setProductDetail(data);
        } catch (error) {
            setError(error.toString());
        }

    }

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <Container>
            <Grid container>
                {console.log(productDetail)}
                {error && (<Typography>{error}</Typography>)}
                <Grid >
                    <Box class="imgBx">
                        <img src={productDetail.images[0]} alt={""} />
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <Paper>{productDetail.title}</Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper>{id}</Paper>
                </Grid>
            </Grid>
        </Container>
    )
    //create page for product detail
    //box replaces div
}

export default ProductDetails;