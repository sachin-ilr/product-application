import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/products";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ description, title, thumbnail, price, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductDetails = () => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price }));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </Button>
        <Button size="small" onClick={handleProductDetails}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
