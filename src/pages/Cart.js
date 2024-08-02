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

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Grid container spacing={2} key={item.id}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">Price: ${item.price}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" gutterBottom>
                Quantity:
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => dispatch(decrementCart(item))}
                >
                  <RemoveIcon />
                </Button>
                {item.quantity}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => dispatch(incrementCart(item))}
                >
                  <AddIcon />
                </Button>
              </Typography>
            </Grid>
          </Grid>
        ))
      )}
    </div>
  );
};

export default Cart;
