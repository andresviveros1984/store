import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { teal } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';




const Header = () => {
  const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1,backgroundColor:"red" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "secondary" }}
          >
            Fabio's Store
          </Typography>
          <ShoppingCartIcon />
          {isAuthenticated ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() =>{
                    navigate("/user")
                    handleClose()
                } }>Profile</MenuItem>
                <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="secondary" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          )}

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
