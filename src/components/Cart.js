import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'
import { Box, Button, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import UseNumberInputCompact from './UseNumberInputCompact';

//for a single user only, specific cart for logged in user

//user info
//item options
//total price

//maybe use an object

//create ui
//create functions for handling increase in quantity
const Cart = ({ cartItems, setCartItems,setCartCount,cartCount }) => {

    const [quantity, setQuantity] = useState(0);
    const [deleteItem,setDeleteItem] = useState(false);


    const handleRemoveFromItemCart = (item) => {
        const remainingCartItems = [];
        if(cartItems){
            for (let i = 0; i < cartItems.length; i++) {
                if(item.productID === cartItems[i].productID){
                    continue;
                }else{
                    remainingCartItems.push(cartItems[i]);
                } 
            }
        }
        setCartItems(remainingCartItems);
        if(cartItems.length == 0){
            setCartCount(cartCount = 0);
        }
        //how to update the cart counter?? 
    }

    return (
        <Box >
            {console.log(cartItems)}
            <Typography variant="h3" color="initial">Your Cart</Typography>
            {cartItems.length === 0 && <Typography variant='h4'>Your Cart is empty</Typography>}
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <Typography variant="inherit" color="initial">Item</Typography>
                <Typography variant="inherit" color="initial">Price</Typography>
                <Typography variant="inherit" color="initial">Total</Typography>
            </Box>
            <Box sx={{ backgroundColor: "grey" }}>
                {cartItems.map(item => {
                    return (
                        <List>
                            <ListItem sx={{ pr: "50px"}}>
                                <img src={item.image} style={{ width: "100px" }} />
                                <ListItemText primary={item.name} sx={{ pl: "5px", width: "90px" }} />
                                <ListItemText primary={"£" + item.price} />
                                <UseNumberInputCompact quantity={item.quantity}/>
                                <DeleteIcon onClick={()=>handleRemoveFromItemCart(item)} />  
                            </ListItem>
                            <Divider />
                        </List>
                    )
                })}
            </Box>
        </Box>
    )
}




export default Cart;