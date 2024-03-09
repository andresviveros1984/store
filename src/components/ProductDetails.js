import React, { useEffect, useState } from 'react';
import styledC from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CircularProgress from "@mui/material/CircularProgress";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const ProductDetails = ({ setCartCount, cartCount }) => {

    let { id } = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mainImage, setMainImage] = useState('');
    const [categoryType, setCategoryType] = useState({});
    // const [categoryType, setCategoryType] = useState({
    //     "smartphones": "Choose Color",
    //     "laptops": "Choose Color",
    //     "fragrances": ["Small", "Large"],
    //     "skincare": "Choose Size",
    //     "groceries": "Choose Size",
    //     "home-decoration": "Choose Color",
    //     "furniture": "Choose Color",
    //     "tops": "Choose Color",
    //     "womens-dresses": "Choose Size",
    //     "womens-shoes": "Choose Size",
    //     "mens-shirts": "Choose Size",
    //     "mens-shoes": "Choose Size",
    //     "mens-watches": "Choose Color",
    //     "womens-watches": "Choose Color",
    //     "womens-bags": "Choose Color",
    //     "womens-jewellery": ["Gold", "Silver"],
    //     "sunglasses": "Choose Color",
    //     "automotive": false,
    //     "motorcycle": false,
    //     "lighting": false
    // })

    const radioBTNHelper = (category) => {
        if (category == "smartphones"
            || category == "laptops" ||
            category == "mens-watches"
            || category == "sunglasses"
            || category == "furniture"
        ) {
            setCategoryType({ message: "Choose a Color", radios: ["Black", "Grey", "White"] })
        }
        else if (category == "skincare"
            || category == "fragrances"
            || category == "tops"
            || category == "womens-bags"
        ) {
            setCategoryType({ message: "Choose Size", radios: ["Small", "Medium", "Large"] })
        }
        return categoryType;
    }

    const handleCart = () => {
        setCartCount(cartCount + 1)
    }


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
        radioBTNHelper(productDetail.category)
    }, [productDetail.category]);

    return (
        <Box>
            {!productDetail.images ? <Box sx={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: 'center' }}>
                <CircularProgress />
            </Box> : (
                <Grid container>
                    {error && (<Typography>{error}</Typography>)}
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={3}>
                                <Grid container mx={"10px"} my={"10px"}>
                                    {productDetail.images.map(image => {
                                        return (
                                            <Grid sx={{ boxShadow: 2 }} item md={10} onClick={() => setMainImage(image)}>
                                                <img src={image} alt="" width={130} height={100} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid sx={{ boxShadow: 2 }} item md={9} my={"10px"}>
                                <img src={mainImage} alt="" width={475} height={520} />
                            </Grid>
                        </Grid>
                    </Grid>
                    < Grid item md={6}>
                        <Box sx={{p:"16px"}}>
                            <Box sx={{pb:"16px"}}>
                                <Typography variant="h2" color="initial">{productDetail.brand} {productDetail.title}</Typography>
                                <Typography variant="h3" color="initial">£{productDetail.price}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "61%", justifyContent: "space-evenly" }}>

                                <Box >
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">{categoryType.message}</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            {categoryType.radios && categoryType.radios.map(radio => {
                                                return (
                                                    <FormControlLabel value={radio} control={<Radio />} label={radio} />
                                                )
                                            })}
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <Typography variant="h4" color="initial">Description</Typography>
                                    <Typography variant="inherit" color="initial">{productDetail.description}</Typography>
                                </Box>
                                <Box>
                                    <Button variant="outlined" onClick={handleCart}>Add To Cart</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>)}
        </Box >
    )
    //create page for product detail
    //box replaces div
}

export default ProductDetails;