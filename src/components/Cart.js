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

    const handleIncreaseQuantity = (i) => {
        cartItems[i] = { ...cartItems[i], quantity: cartItems[i].quantity + 1 }
        setCartItems(cartItems)
        setCartCount(cartCount += 1);
    }

    const handleDecreaseQuantity = (i) => {
        cartItems[i] = { ...cartItems[i], quantity: cartItems[i].quantity - 1 }
        setCartItems(cartItems)
        setCartCount(cartCount -= 1);
        if (cartItems[i].quantity == 0) {
            cartItems.splice(i, 1);
            setCartItems(cartItems)
        }
    }

    return (
        <Box >
            {console.log(cartItems)}
            <Typography variant="h3" color="initial" sx={{ textAlign: "center" }}>Your Cart</Typography>
            {cartCount == 0 ? " " : (
                <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                    <Typography variant="inherit" color="initial" sx={{ pl: "20px" }}>Item</Typography>
                    <Typography variant="inherit" color="initial" sx={{ pl: "70px" }} >Price</Typography>
                    <Typography variant="inherit" color="initial" sx={{ pr: "30px" }}>Total</Typography>
                </Box>)}
            {cartItems.length === 0 && <Typography variant='h4' sx={{ textAlign: "center" }}>Your Cart is empty</Typography>}
            <Box>
                {cartItems.map((item, index) => {
                    return (
                        <List>
                            <ListItem sx={{ pr: "50px", margin: "15px" }}>
                                <img src={item.image} style={{ width: "120px", height: "90px" }} />
                                <ListItemText primary={item.name} sx={{ pl: "5px", width: "90px" }} />
                                <ListItemText primary={"£" + (item.quantity * item.price)} />
                                {/* <UseNumberInputCompact quantity={item.quantity}/> */}
                                <Box sx={{ display: "flex", height: "30px", alignItems: "center" }}>
                                    <IconButton >
                                        <AddCircleOutlineIcon onClick={() => handleIncreaseQuantity(index)} />
                                    </IconButton>
                                    <Typography variant='inherit'>{item.quantity}</Typography>
                                    <IconButton>
                                        <RemoveCircleOutlineIcon onClick={() => handleDecreaseQuantity(index)} />
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