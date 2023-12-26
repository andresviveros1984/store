import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { Box } from '@mui/material';


const Category = ({categories}) => {
    return(
        <Box>
            {categories.map(category => {
                return(
                   <p>{category.title}</p> 
                )
            })}
        </Box>
    )
}




export default Category;