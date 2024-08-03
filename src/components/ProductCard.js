import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/products";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ id, title, price, thumbnail, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addToCart({ id, title, price, thumbnail }));
  };

  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 3,
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {truncateDescription(description, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          onClick={handleAddToCart}
          color="primary"
          aria-label="add to cart"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
