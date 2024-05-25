import React, { useState } from "react";
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
import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import TemporaryDrawer from "./SideBar";
import Badge from "@mui/material/Badge";



const Header = ({ categories, getSingleCategory, cartCount,handleDialogOpen,handleDialogClose }) => {
  const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();

  const [state, setState] = React.useState({
    left: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onClick={handleClick}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "secondary" }}
          >
            <StyledLink to={"/"}>Fabio's Store</StyledLink>
          </Typography>
          {/* {conditional rendering} of icon if authenticated */}
          {isAuthenticated && (
            <StyledLink  to={'/cart'}>
            <Badge badgeContent={cartCount} color="cartCol">
              <ShoppingCartIcon onClick={handleDialogOpen}/>
            </Badge>
            </StyledLink>
          )}
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
                <MenuItem
                  onClick={() => {
                    navigate("/user");
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </MenuItem>
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
      <TemporaryDrawer
        state={state}
        toggleDrawer={toggleDrawer}
        setState={setState}
        categories={categories}
      />
    </Box>
  );
};

export default Header;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
