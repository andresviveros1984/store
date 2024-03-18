import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'
import { Box, Button, List, ListItem, ListItemText,Avatar,ListItemAvatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UseNumberInputCompact from './UseNumberInputCompact';

//for a single user only, specific cart for logged in user

//user info
//item options
//total price

//maybe use an object

//create ui
//create functions for handling increase in quantity
const Cart = ({ cartItems, cartItem }) => {

    const [quantity, setQuantity] = useState(0);

    return (
        <Box >
            {console.log(cartItems)}
            <Typography variant="h3" color="initial">Your Cart</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <Typography variant="inherit" color="initial">Item</Typography>
                <Typography variant="inherit" color="initial">Price</Typography>
                <Typography variant="inherit" color="initial">Total</Typography>
            </Box>
            <Box sx={{ border: "1px solid red" }}>

                {/* <List>
                    <ListItem>
                        <ListItemText primary={"item 1"} />
                        <UseNumberInputCompact />
                        <DeleteIcon />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"item 2"} />
                        <UseNumberInputCompact />
                        <DeleteIcon />
                    </ListItem>
                </List> */}
                <List>
                    {cartItems.map(item => {
                        return (
                        <ListItem>
                            <img src={item.image}/>
                            <ListItemText primary={item.name}/>
                            <ListItemText primary={"£" + item.price}/>
                            <UseNumberInputCompact />
                            <DeleteIcon />
                        </ListItem>
                    )
                    })}
                </List>
            </Box>
        </Box>
    )
}




export default Cart;