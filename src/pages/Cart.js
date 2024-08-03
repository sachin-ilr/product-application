import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  removeFromCart,
  incrementCart,
  decrementCart,
} from "../redux/reducer/products";
import Box from "@mui/material/Box";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrementCart = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCart(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  const handleRemoveAll = () => {
    cart.forEach((item) => dispatch(removeFromCart(item)));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Grid container spacing={2} key={item.id} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">Price: ${item.price}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} container alignItems="center">
                <Typography variant="body2" gutterBottom>
                  Quantity:
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleDecrementCart(item)}
                  sx={{ minWidth: "30px", padding: "0 8px" }}
                >
                  <RemoveIcon />
                </Button>
                <Typography variant="body2" sx={{ padding: "0 8px" }}>
                  {item.quantity}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => dispatch(incrementCart(item))}
                  sx={{ minWidth: "30px", padding: "0 8px" }}
                >
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
          ))}
          <Typography variant="h6" gutterBottom>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Checkout
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2, marginLeft: 2 }}
            onClick={handleRemoveAll}
          >
            Remove All
          </Button>
        </>
      )}
    </Box>
  );
};

export default Cart;
