import React from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

//display some products
//use map or for loop
//display categories as a menu option, side bar on burger menu
const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: "300px" }}>
      <CardMedia component="img" title="" image={product.images[0]} />
      <CardContent>
        <Typography variant="inherit" color="initial">
          {product.title}
        </Typography>
        <Typography variant="inherit" color="initial">
          {product.description}
        </Typography>
        <Typography variant="inherit" color="initial">
          $ {product.price}
        </Typography>
      </CardContent>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};

export default Product;

// const ImageContainer = styled.div`

// `
