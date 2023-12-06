import React from 'react';
import Typography from '@mui/material/Typography'

//display some products
//use map or for loop
//display categories as a menu option, side bar on burger menu
const Product = ({product}) => {

    return(
        <div>
            <Typography variant="h1" color="initial">{product.title}</Typography>
        </div>
    )
}

export default Product