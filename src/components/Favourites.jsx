import { Box, Typography } from '@mui/material';
import React from 'react';

//favourte items functionality similar to cart
//favourite button will remove or add to favourites component

const Favourites = ({favourites}) => {
    return (
        <Box>
            {console.log(favourites)}
            <Typography variant="h1" color="initial" sx={{textAlign:"center"}}>Your Favourites</Typography>
        </Box>
    )
}


export default Favourites;