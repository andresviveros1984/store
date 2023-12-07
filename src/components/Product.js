import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, CardContent, CardActions,IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
//display some products
//use map or for loop
//display categories as a menu option, side bar on burger menu
const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: "350px", bgcolor: "red" }}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default Product;
