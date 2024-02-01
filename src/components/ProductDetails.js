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
        <Box>
            <Grid container>
                {error && (<Typography>{error}</Typography>)}
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item md={3}>
                            <Grid container>
                                {productDetail && productDetail.images.map(image => {
                                    return (
                                        <Grid item md={10}>
                                            <img src={image} alt="" />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={9}>
                            <img src={productDetail.thumbnail} alt="" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    Product details text
                </Grid>
            </Grid>

        </Box >
    )
    //create page for product detail
    //box replaces div
}

export default ProductDetails;