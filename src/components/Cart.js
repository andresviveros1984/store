import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useStore } from '../store';

const Cart = () => {
  const cartItems = useStore((state) => state.cartItems);
  const setItemCount = useStore((state) => state.setCartItemCount);
  const removeItem = useStore((state) => state.removeFromCart);

  return (
    <Box>
      <Typography variant="h3" color="initial" sx={{ textAlign: 'center' }}>
        Your Cart
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Typography variant="inherit" color="initial" sx={{ pl: '20px' }}>
          Item
        </Typography>
        <Typography variant="inherit" color="initial" sx={{ pl: '70px' }}>
          Price
        </Typography>
        <Typography variant="inherit" color="initial" sx={{ pr: '30px' }}>
          Total
        </Typography>
      </Box>

      {cartItems.length === 0 && (
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Your Cart is empty
        </Typography>
      )}
      <Box>
        {cartItems.map((item, index) => {
          return (
            <List>
              <ListItem sx={{ pr: '50px', margin: '15px' }}>
                <img
                  src={item.image}
                  style={{ width: '120px', height: '90px' }}
                  alt="Product"
                />
                <ListItemText
                  primary={item.name}
                  sx={{ pl: '5px', width: '90px' }}
                />
                <ListItemText primary={'£' + item.quantity * item.price} />
                {/* <UseNumberInputCompact quantity={item.quantity}/> */}
                <Box
                  sx={{ display: 'flex', height: '30px', alignItems: 'center' }}
                >
                  <IconButton>
                    <AddCircleOutlineIcon
                      onClick={() => setItemCount(item.id, item.count + 1)}
                    />
                  </IconButton>
                  <Typography variant="inherit">{item.quantity}</Typography>
                  <IconButton>
                    <RemoveCircleOutlineIcon
                      onClick={() => setItemCount(item.id, item.count - 1)}
                    />
                  </IconButton>
                  {/* {create function one or two to handle increase and decrease
                                    ,once quantity is zero in ui, remove cart item
                                    } */}
                </Box>
                <DeleteIcon onClick={() => removeItem(item.id)} />
              </ListItem>
              <Divider />
            </List>
          );
        })}
      </Box>
    </Box>
  );
};

export default Cart;
