import { Box} from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
import styled from 'styled-components';
import Product from './Product';


const Results = ({results, handleFavourites, favourites}) => {
    

    return (
        <Box>
            {results.products ? (
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {results.products.map((result) => {
                        return <Product product={result} handleFavourites={handleFavourites} favourites={favourites}/>;
                    })}
                </Box>
            ) : (
                <Box sx={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    )
}



export default Results;