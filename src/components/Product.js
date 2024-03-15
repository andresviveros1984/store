import React from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card sx={{ width: "15rem", height: "20rem", margin: 2 }}>
      <CardMedia
        component="img"
        title=""
        image={product.thumbnail}
        width="8rem"
        height="150px"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "5rem",
        }}
      >
        <Typography variant="h6" color="initial">
          {product.title}
        </Typography>
        <Typography variant="inherit" color="initial">
          $ {product.price}
        </Typography>
      </CardContent>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <Link to={`/${product.category}/${product.id}`}>
        <Button size="small">See More</Button>
      </Link>
    </Card>
  );
};

export default Product;

