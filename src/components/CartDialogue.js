import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useStore } from '../store';

export default function CartDialogue({}) {
  const [fullWidth, setFullWidth] = React.useState('lg');
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const cartModalOpen = useStore((state) => state.cartModalOpen);
  const closeCartModal = useStore((state) => state.closeCartModal);

  const cartItems = useStore((state) => state.cartItems);
  const removeItem = useStore((state) => state.removeFromCart);
  const setItemCount = useStore((state) => state.setCartItemCount);

  console.log({ cartItems });

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={cartModalOpen}
        onClose={closeCartModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
          Your Shopping Cart
        </DialogTitle>
        <DialogContent>
          <Box>
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
                        alt="Product"
                        src={item.image}
                        style={{
                          width: '120px',
                          height: '90px',
                        }}
                      />
                      <ListItemText
                        primary={item.name}
                        sx={{
                          pl: '5px',
                          width: '90px',
                        }}
                      />
                      <ListItemText
                        primary={'£' + (item.quantity * item.price).toFixed(2)}
                      />
                      {/* <UseNumberInputCompact quantity={item.quantity}/> */}
                      <Box
                        sx={{
                          display: 'flex',
                          height: '30px',
                          alignItems: 'center',
                        }}
                      >
                        <IconButton>
                          <AddCircleOutlineIcon
                            onClick={() =>
                              setItemCount(item.id, item.quantity + 1)
                            }
                          />
                        </IconButton>
                        <Typography variant="inherit">
                          {item.quantity}
                        </Typography>
                        <IconButton>
                          <RemoveCircleOutlineIcon
                            onClick={() =>
                              setItemCount(item.id, item.quantity - 1)
                            }
                          />
                        </IconButton>
                      </Box>
                      <DeleteIcon onClick={() => removeItem(item.id)} />
                    </ListItem>
                    <Divider />
                  </List>
                );
              })}
            </Box>
          </Box>
        </DialogContent>
        {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}

        <DialogActions>
          <Button onClick={closeCartModal} autoFocus>
            Close
          </Button>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
