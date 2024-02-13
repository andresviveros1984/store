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

const ProductDetails = ({setCartCount,cartCount}) => {

    let { category, id } = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mainImage, setMainImage] = useState('');
    const [radioBTNS,setRadioBTNS] = useState({colors:["red"]});
    const [categoryType, setCategoryType] = useState({
        "smartphones":"Choose Color",
        "laptops": "Choose Color",
        "fragrances": "Choose Size",
        "skincare": "Choose Size",
        "groceries" : "Choose Size",
        "home-decoration":"Choose Color",
        "furniture":"Choose Color",
        "tops":"Choose Color",
        "womens-dresses": "Choose Size",
        "womens-shoes": "Choose Size",
        "mens-shirts":"Choose Size",
        "mens-shoes":"Choose Size",
        "mens-watches":"Choose Color",
        "womens-watches":"Choose Color",
        "womens-bags":"Choose Color",
        "womens-jewellery":["Gold","Silver"],
        "sunglasses":"Choose Color",
        "automotive":false,
        "motorcycle":false,
        "lighting":false
    })

    const radioBTNHelper = (category,radios) => {
        //put logic to add selection options based on category
        //put state in place to dynamically change radio options
        //maybe put in usefffect
        switch(category) {
            case "smartphones":
              
              break;
            case "":
             
              break;
            default:
             
          }
    }

    const handleCart = () =>{
        setCartCount(cartCount+1)
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
    }, []);

    return (
        <Box>
            {console.log(productDetail)}
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
                    <Grid item md={6}>
                        <Box>
                            <Typography variant="h2" color="initial">{productDetail.brand} {productDetail.title}</Typography>
                            <Typography variant="h3" color="initial">£{productDetail.price}</Typography>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">{productDetail.category === "womens-jewellery" ? "Choose from Gold or Silver" : categoryType[productDetail.category]}</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value={productDetail.category === "womens-jewellery" ? categoryType[productDetail.category][0] : categoryType[productDetail.category]} control={<Radio />} label={productDetail.category === "womens-jewellery" ? categoryType[productDetail.category][0] : categoryType[productDetail.category]} />
                                    <FormControlLabel value={productDetail.category === "womens-jewellery" ? categoryType[productDetail.category][1] : categoryType[productDetail.category]} control={<Radio />} label={productDetail.category === "womens-jewellery" ? categoryType[productDetail.category][1] : categoryType[productDetail.category]} />
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
                    </Grid>
                </Grid>)}
        </Box >
    )
    //create page for product detail
    //box replaces div
}

export default ProductDetails;