import React, { useEffect, useState } from 'react';
import styledC from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CircularProgress from "@mui/material/CircularProgress";

const ProductDetails = () => {

    let { category, id } = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mainImage,setMainImage] = useState('');

    const getProductDetails = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (response.ok !== true) {
                throw new Error("Product Not available to view");
            }

            const data = await response.json();
            setProductDetail(data);
            setMainImage(data.images[0]);
        } catch (error) {
            setError(error.toString());
        }


    }

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <Box>
            {console.log(productDetail)}
            {!productDetail.images ? <Box sx={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: 'center' }}>
                <CircularProgress />
            </Box> : (
                <Grid container>
                    {error && (<Typography>{error}</Typography>)}
                    <Grid item  md={6}>
                        <Grid container>
                            <Grid item md={3}>
                                <Grid container mx={"10px"} my={"10px"}>
                                    {productDetail.images.map(image => {
                                        return (
                                            <Grid border={"1px solid red"} item md={10} onClick={()=> setMainImage(image)}>
                                                <img src={image} alt=""  width={130} height={100}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid item md={9} my={"10px"} border={"1px solid red"}>
                                <img src={mainImage} alt="" width={500} height={530} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} border={"1px solid red"} my={"10px"}>
                        Product details text
                    </Grid>
                </Grid>) }
        </Box >
    )
    //create page for product detail
    //box replaces div
}

export default ProductDetails;