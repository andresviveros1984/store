import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';

//for a single user only, specific cart for logged in user

//user info
//item options
//total price

//maybe use an object

//create ui
//create functions for handling increase in quantity
const Cart = ({ cartItems, cartItem }) => {

    const [quantity,setQuantity]= useState(0);

    return (
        <Box>
            {console.log(cartItems)}
            <Typography variant="h3" color="initial">Your Cart</Typography>
            {cartItems.map(item => {
                return (
                    <Box>
                        <Typography variant='inherit'></Typography>
                        <Typography variant="inherit" color="initial" onClick={()=>setQuantity(quantity--)}>-</Typography>
                        <Typography variant="inherit" color="initial">{quantity}</Typography>
                        <Typography variant="inherit" color="initial" onClick={()=>setQuantity(quantity++)}>+</Typography>

                    </Box>
                )
            })}
        </Box>
    )
}




export default Cart;