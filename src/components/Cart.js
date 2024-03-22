import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'
import { Box, Button, List, ListItem, ListItemText, Avatar, ListItemAvatar, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import UseNumberInputCompact from './UseNumberInputCompact';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const Cart = ({ cartItems, setCartItems, setCartCount, cartCount }) => {

    const [quantity, setQuantity] = useState(0);
    const handleRemoveFromItemCart = (item) => {
        // const remainingCartItems = [];
        // if (cartItems) {
        //     for (let i = 0; i < cartItems.length; i++) {
        //         if (item.productID === cartItems[i].productID) {
        //             continue;
        //         } else {
        //             remainingCartItems.push(cartItems[i]);
        //         }
        //     }
        // }

        const filteredCartItems = cartItems.filter(cartProduct => cartProduct.productID !== item.productID)
        setCartItems(filteredCartItems);
        setCartCount(cartCount - item.quantity);
        
    }

    const handleIncreaseQuantity = () => {
        //state in cart has to increase
        // add to cart start
        setCartCount(cartCount +=1);
    }

    const handleDecreaseQuantity = () => {
        setCartCount(cartCount -=1);
    }


    return (
        <Box >
            {console.log(cartItems)}
            <Typography variant="h3" color="initial">Your Cart</Typography>
            <Box sx={{ display: "flex", justifyContent:"space-between", padding: "20px" }}>
                <Typography variant="inherit" color="initial">Item</Typography>
                <Typography variant="inherit" color="initial">Price</Typography>
                <Typography variant="inherit" color="initial">Total</Typography>
            </Box>
            {cartItems.length === 0 && <Typography variant='h4'>Your Cart is empty</Typography>}
            <Box sx={{ backgroundColor: "grey",display:"flex",justifyContent:"center" }}>
                {cartItems.map(item => {
                    return (
                        <List>
                            <ListItem sx={{ pr: "50px" }}>
                                <img src={item.image} style={{ width: "100px" }} />
                                <ListItemText primary={item.name} sx={{ pl: "5px", width: "90px" }} />
                                <ListItemText primary={"£" + item.price} />
                                {/* <UseNumberInputCompact quantity={item.quantity}/> */}
                                <Box sx={{display:"flex", height:"30px",alignItems:"center"}}>
                                    <IconButton >
                                        <AddCircleOutlineIcon onClick={handleIncreaseQuantity}/>
                                    </IconButton>
                                    <Typography variant='inherit'>{item.quantity}</Typography>
                                    <IconButton>
                                        <RemoveCircleOutlineIcon onClick={handleDecreaseQuantity}/>
                                    </IconButton>
                                    {/* {create function one or two to handle increase and decrease
                                    ,once quantity is zero in ui, remove cart item
                                    } */}
                                </Box>
                                <DeleteIcon onClick={() => handleRemoveFromItemCart(item)} />
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